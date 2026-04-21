-- CODWORKS MOZ - SCHEMA IMPERIOSO (MIGRAÇÃO FINAL)
-- Este script define a estrutura para dados dinâmicos de utilizadores.
-- O currículo é estático e reside no código Git.

-- 1. EXTENSÕES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TABELA DE PERFIS (Sincronizada com Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  display_name text,
  avatar_url text,
  preferred_language text DEFAULT 'pt',
  preferred_theme text DEFAULT 'dark',
  total_points integer DEFAULT 0,
  streak integer DEFAULT 0,
  last_active timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now()
);

-- 3. TABELA DE PROGRESSO (Mapeia IDs estáticos do Git)
CREATE TABLE IF NOT EXISTS public.user_lesson_progress (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  lesson_id text NOT NULL,
  level_id integer NOT NULL,
  ka_id text NOT NULL,
  lesson_type text CHECK (lesson_type IN ('theory', 'exercise')),
  completed boolean DEFAULT false,
  completed_at timestamp with time zone DEFAULT now(),
  quiz_passed boolean DEFAULT false,
  quiz_score integer,
  quiz_attempts integer DEFAULT 0,
  last_code text,
  UNIQUE(user_id, lesson_id)
);

-- 4. TABELA DE COMUNIDADE (Posts e Comentários)
CREATE TABLE IF NOT EXISTS public.community_posts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  exercise_id text, -- ID do laboratório vinculado (opcional)
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.community_comments (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id uuid REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- 5. TABELA DE CERTIFICADOS
CREATE TABLE IF NOT EXISTS public.certificates (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  level_id integer NOT NULL,
  level_title text NOT NULL,
  certificate_url text DEFAULT '#',
  issued_at timestamp with time zone DEFAULT now()
);

-- 6. FUNÇÕES E TRIGGERS DE AUTOMAÇÃO

-- Trigger: Criar perfil automaticamente ao registar
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'display_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Função: Calcular Pontos Totais
CREATE OR REPLACE FUNCTION calculate_total_points(p_user_id uuid)
RETURNS void AS $$
DECLARE
    v_points integer;
BEGIN
    SELECT count(*) * 10 INTO v_points 
    FROM user_lesson_progress 
    WHERE user_id = p_user_id AND completed = true;
    
    UPDATE profiles SET total_points = v_points WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. POLÍTICAS DE SEGURANÇA (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Políticas de Leitura Pública (Perfis, Posts, Comentários, Certificados)
CREATE POLICY "Leitura pública de perfis" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Leitura pública de posts" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Leitura pública de comentários" ON public.community_comments FOR SELECT USING (true);
CREATE POLICY "Leitura pública de certificados" ON public.certificates FOR SELECT USING (true);

-- Políticas de Escrita Protegida
CREATE POLICY "Utilizadores editam próprio perfil" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Utilizadores editam próprio progresso" ON public.user_lesson_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Utilizadores criam posts" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Utilizadores criam comentários" ON public.community_comments FOR INSERT WITH CHECK (auth.uid() = user_id);