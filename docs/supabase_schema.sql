
-- Codworks Moz - Migração de Segurança e Estrutura Final
-- Focada em Perfis, Progresso (Git-based) e Comunidade

-- 1. Extensões Necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Tabela de Perfis (Sincronizada com o Dashboard)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  avatar_url text,
  preferred_language text DEFAULT 'pt',
  preferred_theme text DEFAULT 'dark',
  total_points integer DEFAULT 0,
  streak integer DEFAULT 0,
  last_active timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now()
);

-- 3. Tabela de Progresso Unificada
-- Grava o progresso das lições estáticas do Git
CREATE TABLE IF NOT EXISTS public.user_lesson_progress (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id text NOT NULL,
  level_id integer NOT NULL,
  ka_id text NOT NULL,
  lesson_type text CHECK (lesson_type IN ('theory', 'exercise')),
  completed boolean DEFAULT false,
  completed_at timestamp with time zone DEFAULT now(),
  quiz_score integer DEFAULT 0,
  quiz_passed boolean DEFAULT false,
  last_code text, -- Guarda o progresso de código para o Nível 8
  UNIQUE(user_id, lesson_id)
);

-- 4. Tabela de Certificados com Verificação
CREATE TABLE IF NOT EXISTS public.certificates (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  level_id integer NOT NULL,
  level_title text NOT NULL,
  issued_at timestamp with time zone DEFAULT now()
);

-- 5. Comunidade: Posts
CREATE TABLE IF NOT EXISTS public.community_posts (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  exercise_id text, -- Opcional: vincula a dúvida a um lab
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- 6. Comunidade: Comentários/Respostas
CREATE TABLE IF NOT EXISTS public.community_comments (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  post_id uuid NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- 7. Funções de Automação
-- Atualiza os pontos totais do utilizador baseado no progresso
CREATE OR REPLACE FUNCTION public.calculate_total_points(p_user_id uuid)
RETURNS void AS $$
DECLARE
    v_points integer;
BEGIN
    SELECT COUNT(*) * 10 INTO v_points 
    FROM public.user_lesson_progress 
    WHERE user_id = p_user_id AND completed = true;
    
    UPDATE public.profiles 
    SET total_points = v_points, last_active = now()
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criar perfil automaticamente no Signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 8. Políticas de Segurança (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;

-- Perfis: Público para leitura, dono para escrita
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Progresso: Privado para o dono
CREATE POLICY "Users can view own progress" ON public.user_lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON public.user_lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON public.user_lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- Certificados: Público para verificação, dono para listar
CREATE POLICY "Certificates are publicly verifiable" ON public.certificates FOR SELECT USING (true);
CREATE POLICY "System can issue certificates" ON public.certificates FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Comunidade: Público para leitura, autenticado para criar
CREATE POLICY "Community is readable by all" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Authenticated users can post" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Community comments are readable by all" ON public.community_comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can comment" ON public.community_comments FOR INSERT WITH CHECK (auth.uid() = user_id);
