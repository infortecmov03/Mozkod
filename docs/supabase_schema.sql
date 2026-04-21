
-- Codworks Moz - Sistema de Gestão de Aprendizagem (LMS)
-- Script de Criação de Esquema Unificado

-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Tabela de Perfis (Estende auth.users)
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE NOT NULL,
    display_name TEXT,
    full_name TEXT,
    avatar_url TEXT,
    bio TEXT,
    preferred_language TEXT DEFAULT 'pt',
    preferred_theme TEXT DEFAULT 'dark',
    level INTEGER DEFAULT 1,
    total_points INTEGER DEFAULT 0,
    total_xp INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    last_active TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabela de Currículo (Knowledge Areas)
CREATE TABLE public.acm_curriculum (
    id TEXT PRIMARY KEY,
    ka_code TEXT NOT NULL,
    ka_name TEXT NOT NULL,
    description TEXT,
    level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 8),
    required_hours INTEGER,
    iconName TEXT,
    order_index INTEGER DEFAULT 0
);

-- 3. Tabela de Lições
CREATE TABLE public.lessons (
    id TEXT PRIMARY KEY,
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content_mdx TEXT,
    theory JSONB,
    youtube_video_id TEXT,
    order_index INTEGER DEFAULT 0
);

-- 4. Tabela de Exercícios
CREATE TABLE public.exercises (
    id TEXT PRIMARY KEY,
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    lesson_id TEXT REFERENCES public.lessons(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    description TEXT,
    language TEXT NOT NULL,
    template_code TEXT,
    solution_code TEXT,
    test_cases JSONB DEFAULT '[]',
    objectives JSONB DEFAULT '[]',
    is_project_part BOOLEAN DEFAULT FALSE
);

-- 5. Tabela de Quizzes
CREATE TABLE public.quizzes (
    id TEXT PRIMARY KEY,
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    questions JSONB NOT NULL DEFAULT '[]',
    passing_score INTEGER DEFAULT 70
);

-- 6. Tabela de Progresso do Usuário
CREATE TABLE public.user_lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    ka_id TEXT,
    lesson_id TEXT NOT NULL,
    lesson_type TEXT,
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    quiz_passed BOOLEAN DEFAULT FALSE,
    quiz_score INTEGER,
    last_code TEXT,
    UNIQUE(user_id, lesson_id)
);

-- 7. Tabela de Certificados
CREATE TABLE public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    level_title TEXT,
    certificate_url TEXT,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex')
);

-- 8. Tabela de Posts da Comunidade (Fórum)
CREATE TABLE public.community_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- FUNÇÕES E TRIGGERS

-- Trigger para criar perfil automaticamente no SignUp
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, username, display_name, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'user_name', NEW.email),
        COALESCE(NEW.raw_user_meta_data->>'display_name', 'Estudante Moz'),
        COALESCE(NEW.raw_user_meta_data->>'avatar_url', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Função para calcular pontos
CREATE OR REPLACE FUNCTION public.calculate_total_points(p_user_id UUID)
RETURNS void AS $$
DECLARE
    v_points INT;
BEGIN
    SELECT COUNT(*) * 50 INTO v_points
    FROM public.user_lesson_progress
    WHERE user_id = p_user_id AND completed = true;

    UPDATE public.profiles
    SET total_points = v_points, total_xp = v_points
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- SEGURANÇA (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Perfis visíveis para todos" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Usuários editam próprio perfil" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Progresso privado" ON public.user_lesson_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Posts visíveis" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Usuários criam posts" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
