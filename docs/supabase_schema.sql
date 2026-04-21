-- Codworks Moz - Final Production Schema
-- Este script configura a base de dados completa para suportar os níveis 1 a 8.

-- 1. Habilitar Extensões
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Tabela: profiles
-- Sincronizada com AuthContext e Leaderboard
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE NOT NULL,
    full_name TEXT,
    display_name TEXT,
    avatar_url TEXT,
    preferred_language TEXT DEFAULT 'pt',
    level INTEGER DEFAULT 1,
    total_points INTEGER DEFAULT 0,
    total_xp INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    last_active TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabela: acm_curriculum (Knowledge Areas)
CREATE TABLE public.acm_curriculum (
    id TEXT PRIMARY KEY, -- ex: 'ka-cs-core'
    level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 8),
    ka_code TEXT NOT NULL,
    ka_name TEXT NOT NULL,
    description TEXT,
    required_hours TEXT,
    iconName TEXT, -- Nome do ícone Lucide
    order_index INTEGER DEFAULT 0
);

-- 4. Tabela: lessons
CREATE TABLE public.lessons (
    id TEXT PRIMARY KEY, -- ex: 'cs-t1'
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content_mdx TEXT,
    youtube_video_id TEXT,
    order_index INTEGER DEFAULT 0
);

-- 5. Tabela: exercises
CREATE TABLE public.exercises (
    id TEXT PRIMARY KEY, -- ex: 'py-p1'
    lesson_id TEXT REFERENCES public.lessons(id) ON DELETE SET NULL,
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    language TEXT NOT NULL,
    template_code TEXT,
    test_cases JSONB DEFAULT '[]',
    detailed_explanation TEXT
);

-- 6. Tabela: quizzes
CREATE TABLE public.quizzes (
    id TEXT PRIMARY KEY, -- ex: 'quiz-pf-1'
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    questions JSONB NOT NULL DEFAULT '[]' -- Array de objetos com {question, options, correctAnswer}
);

-- 7. Tabela: user_lesson_progress
-- Sincronizada com ProgressContext.tsx
CREATE TABLE public.user_lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    ka_id TEXT,
    lesson_id TEXT,
    lesson_type TEXT CHECK (lesson_type IN ('theory', 'exercise')),
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    quiz_passed BOOLEAN DEFAULT FALSE,
    quiz_score INTEGER,
    last_code TEXT,
    UNIQUE(user_id, lesson_id)
);

-- 8. Tabela: community_posts
CREATE TABLE public.community_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Tabela: certificates
CREATE TABLE public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    level_title TEXT,
    certificate_url TEXT,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex')
);

-- 10. Funções e Triggers

-- Atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Criar perfil automaticamente ao registar novo user
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, username, display_name, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'user_name', NEW.email, NEW.id::text),
        COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', 'Estudante Moz'),
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Calcular pontos totais
CREATE OR REPLACE FUNCTION calculate_total_points(p_user_id UUID)
RETURNS void AS $$
DECLARE
    total INT;
BEGIN
    SELECT COUNT(*) * 10 INTO total
    FROM public.user_lesson_progress
    WHERE user_id = p_user_id AND completed = TRUE;

    UPDATE public.profiles
    SET total_points = total, total_xp = total
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql;

-- 11. Segurança (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.acm_curriculum ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Perfis visíveis para todos" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Utilizadores editam o próprio perfil" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Currículo público" ON public.acm_curriculum FOR SELECT USING (true);
CREATE POLICY "Lições públicas" ON public.lessons FOR SELECT USING (true);

CREATE POLICY "Progresso privado" ON public.user_lesson_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Posts públicos" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Criar posts logado" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
