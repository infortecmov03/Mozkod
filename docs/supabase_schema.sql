
-- 🏗️ Codworks Moz - Esquema Unificado de Produção
-- Este script cria a estrutura necessária para perfis, progresso e comunidade.

-- Habilitar extensões
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TABELA: profiles
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE NOT NULL,
    display_name TEXT,
    full_name TEXT,
    avatar_url TEXT,
    bio TEXT,
    preferred_language TEXT DEFAULT 'pt',
    total_points INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABELA: user_lesson_progress
-- Centraliza o progresso de lições teóricas e laboratórios
CREATE TABLE IF NOT EXISTS public.user_lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_id TEXT NOT NULL,
    level_id INTEGER NOT NULL,
    ka_id TEXT NOT NULL,
    lesson_type TEXT CHECK (lesson_type IN ('theory', 'exercise')),
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    quiz_passed BOOLEAN DEFAULT FALSE,
    quiz_score INTEGER,
    last_code TEXT, -- Para herança de projeto no Nível 8
    UNIQUE(user_id, lesson_id)
);

-- 3. TABELAS: comunidade
CREATE TABLE IF NOT EXISTS public.community_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT, -- Nulo para discussões gerais
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.community_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TABELA: certificates
CREATE TABLE IF NOT EXISTS public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER NOT NULL,
    level_title TEXT NOT NULL,
    certificate_url TEXT,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex')
);

-- 5. FUNÇÕES E TRIGGERS
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, username, display_name, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'user_name', NEW.email),
        COALESCE(NEW.raw_user_meta_data->>'display_name', 'Dev Moz'),
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criação de perfil
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Função para calcular pontos (RPC)
CREATE OR REPLACE FUNCTION calculate_total_points(p_user_id UUID)
RETURNS VOID AS $$
DECLARE
    points INT;
BEGIN
    SELECT COUNT(*) * 10 INTO points 
    FROM public.user_lesson_progress 
    WHERE user_id = p_user_id AND completed = TRUE;

    UPDATE public.profiles 
    SET total_points = points 
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. SEGURANÇA (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Políticas de Visualização
CREATE POLICY "Leitura pública de perfis" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Leitura pública de posts" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Leitura pública de comentários" ON public.community_comments FOR SELECT USING (true);
CREATE POLICY "Leitura pública de certificados" ON public.certificates FOR SELECT USING (true);

-- Políticas de Usuário
CREATE POLICY "Utilizadores gerem seu próprio progresso" ON public.user_lesson_progress 
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Utilizadores gerem seus próprios posts" ON public.community_posts 
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Utilizadores gerem seus próprios comentários" ON public.community_comments 
    FOR ALL USING (auth.uid() = user_id);
