
-- Codworks Moz - Elite Database Schema
-- Execute este script no SQL Editor do Supabase para garantir o funcionamento correto.

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. PROFILES TABLE
CREATE TABLE public.profiles (
  id uuid NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  display_name text,
  avatar_url text,
  preferred_language text DEFAULT 'pt',
  preferred_theme text DEFAULT 'dark',
  total_points integer DEFAULT 0,
  streak integer DEFAULT 0,
  last_active timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- 3. PROGRESS TABLE
CREATE TABLE public.user_lesson_progress (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id text NOT NULL,
  level_id integer NOT NULL,
  ka_id text NOT NULL,
  lesson_type text CHECK (lesson_type IN ('theory', 'exercise')),
  completed boolean DEFAULT false,
  completed_at timestamp with time zone DEFAULT now(),
  quiz_passed boolean DEFAULT false,
  quiz_score integer,
  last_code text,
  UNIQUE(user_id, lesson_id)
);

-- 4. CERTIFICATES TABLE
CREATE TABLE public.certificates (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  level_id integer NOT NULL,
  level_title text NOT NULL,
  certificate_url text,
  issued_at timestamp with time zone DEFAULT now()
);

-- 5. COMMUNITY TABLES
CREATE TABLE public.community_posts (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  exercise_id text,
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

CREATE TABLE public.community_comments (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  post_id uuid REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- 6. AUTOMATION FUNCTIONS
-- Função para atualizar pontos e streak ao completar lições
CREATE OR REPLACE FUNCTION public.handle_lesson_completion()
RETURNS TRIGGER AS $$
DECLARE
    points_to_add INTEGER;
    days_diff INTEGER;
BEGIN
    -- Definir pontos: Exercícios valem 50, Teoria vale 15
    IF (NEW.lesson_type = 'exercise') THEN
        points_to_add := 50;
    ELSE
        points_to_add := 15;
    END IF;

    -- Calcular diferença de dias para a Streak
    SELECT (CURRENT_DATE - (last_active::DATE)) INTO days_diff 
    FROM public.profiles WHERE id = NEW.user_id;

    -- Atualizar Perfil
    UPDATE public.profiles
    SET 
        total_points = total_points + points_to_add,
        streak = CASE 
            WHEN days_diff = 1 THEN streak + 1   -- Consecutivo: aumenta
            WHEN days_diff = 0 THEN streak       -- Mesmo dia: mantém
            ELSE 1                               -- Mais de 1 dia: reinicia
        END,
        last_active = NOW(),
        updated_at = NOW()
    WHERE id = NEW.user_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para chamar a função acima
CREATE TRIGGER on_lesson_completed
  AFTER INSERT OR UPDATE ON public.user_lesson_progress
  FOR EACH ROW
  WHEN (NEW.completed = true AND (OLD.completed IS NULL OR OLD.completed = false))
  EXECUTE FUNCTION public.handle_lesson_completion();

-- Função para criar perfil automaticamente no Signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', 'https://picsum.photos/seed/' || NEW.id || '/200')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para novo utilizador
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 7. RLS POLICIES (Segurança)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own progress" ON public.user_lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own progress" ON public.user_lesson_progress FOR ALL USING (auth.uid() = user_id);

ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Posts are viewable by everyone" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Users can create posts" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Comments are viewable by everyone" ON public.community_comments FOR SELECT USING (true);
CREATE POLICY "Users can create comments" ON public.community_comments FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Certificates are viewable by everyone" ON public.certificates FOR SELECT USING (true);
CREATE POLICY "System handles certificates" ON public.certificates FOR INSERT WITH CHECK (true);
