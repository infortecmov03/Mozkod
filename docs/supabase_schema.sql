-- Codworks Moz - Final Schema (Production Ready)
-- Suporta Níveis 1 a 8 e sincronizado com o frontend

-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. TABELA DE PERFIS (Sincronizada com AuthContext e ProgressContext)
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

-- 2. TABELA DE CURRÍCULO (Knowledge Areas)
CREATE TABLE public.acm_curriculum (
    id TEXT PRIMARY KEY, -- ex: 'ka-cs-core'
    ka_code TEXT NOT NULL,
    ka_name TEXT NOT NULL,
    description TEXT,
    level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 8),
    required_hours TEXT,
    iconName TEXT, -- compatível com lucide-react
    order_index INTEGER DEFAULT 0
);

-- 3. TABELA DE LIÇÕES (Teoria)
CREATE TABLE public.lessons (
    id TEXT PRIMARY KEY, -- ex: 'cs-t1'
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content_mdx TEXT, -- HTML/Markdown para renderização
    youtube_video_id TEXT,
    duration_minutes INTEGER DEFAULT 30,
    order_index INTEGER DEFAULT 0
);

-- 4. TABELA DE EXERCÍCIOS (Laboratório)
CREATE TABLE public.exercises (
    id TEXT PRIMARY KEY, -- ex: 'js-p1'
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    lesson_id TEXT REFERENCES public.lessons(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    description TEXT,
    language TEXT NOT NULL, -- 'javascript', 'python', 'html', etc
    template_code TEXT,
    test_cases JSONB DEFAULT '[]', -- Objetivos e validações
    is_project_part BOOLEAN DEFAULT false,
    order_index INTEGER DEFAULT 0
);

-- 5. TABELA DE QUIZZES
CREATE TABLE public.quizzes (
    id TEXT PRIMARY KEY, -- ex: 'quiz-cs-t1'
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    questions JSONB NOT NULL DEFAULT '[]',
    passing_score INTEGER DEFAULT 70
);

-- 6. TABELA DE PROGRESSO (Utilizada pelo ProgressContext)
CREATE TABLE public.user_lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    ka_id TEXT,
    lesson_id TEXT NOT NULL,
    lesson_type TEXT, -- 'theory' ou 'exercise'
    completed BOOLEAN DEFAULT false,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    quiz_passed BOOLEAN DEFAULT false,
    quiz_score INTEGER DEFAULT 0,
    last_code TEXT, -- Persistência do código do aluno
    UNIQUE(user_id, lesson_id)
);

-- 7. TABELA DE CERTIFICADOS
CREATE TABLE public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    level_title TEXT,
    certificate_url TEXT,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex')
);

-- 8. COMUNIDADE (Fórum)
CREATE TABLE public.community_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.community_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- FUNÇÃO: Cálculo de Pontos Automático
CREATE OR REPLACE FUNCTION calculate_total_points(p_user_id UUID)
RETURNS void AS $$
DECLARE
    points_total INTEGER;
BEGIN
    SELECT COUNT(*) * 10 INTO points_total
    FROM public.user_lesson_progress
    WHERE user_id = p_user_id AND completed = true;

    UPDATE public.profiles
    SET total_points = points_total, total_xp = points_total
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql;

-- TRIGGER: Criar Perfil ao Registar
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, username, display_name, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'user_name', NEW.email),
        COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', 'Estudante Moz'),
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ATIVAR RLS (Segurança)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.acm_curriculum ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Perfis visíveis para todos" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Utilizadores editam seu perfil" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Progresso privado" ON public.user_lesson_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Currículo público" ON public.acm_curriculum FOR SELECT USING (true);
CREATE POLICY "Lições públicas" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "Comunidade pública" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Postar na comunidade" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
