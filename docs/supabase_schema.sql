
-- 🏗️ Esquema Unificado Codworks Moz (Engenharia de Elite)

-- Habilitar extensões
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Tabela: profiles (estende auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name TEXT,
    full_name TEXT,
    username TEXT UNIQUE,
    avatar_url TEXT,
    preferred_language TEXT DEFAULT 'pt',
    preferred_theme TEXT DEFAULT 'system',
    total_points INTEGER DEFAULT 0,
    total_xp INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    last_active TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: acm_curriculum
CREATE TABLE IF NOT EXISTS public.acm_curriculum (
    id TEXT PRIMARY KEY,
    ka_code TEXT NOT NULL,
    ka_name TEXT NOT NULL,
    description TEXT,
    level INTEGER NOT NULL,
    required_hours INTEGER,
    iconName TEXT,
    order_index INTEGER
);

-- Tabela: lessons
CREATE TABLE IF NOT EXISTS public.lessons (
    id TEXT PRIMARY KEY,
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content_mdx TEXT,
    youtube_video_id TEXT,
    order_index INTEGER
);

-- Tabela: exercises
CREATE TABLE IF NOT EXISTS public.exercises (
    id TEXT PRIMARY KEY,
    lesson_id TEXT REFERENCES public.lessons(id) ON DELETE SET NULL,
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    statement TEXT,
    language TEXT NOT NULL,
    template_code TEXT,
    test_cases JSONB DEFAULT '[]'
);

-- Tabela: quizzes
CREATE TABLE IF NOT EXISTS public.quizzes (
    id TEXT PRIMARY KEY,
    ka_id TEXT REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    questions JSONB NOT NULL DEFAULT '[]',
    passing_score INTEGER DEFAULT 70
);

-- Tabela: user_lesson_progress
CREATE TABLE IF NOT EXISTS public.user_lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    ka_id TEXT,
    lesson_id TEXT NOT NULL,
    lesson_type TEXT,
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    quiz_passed BOOLEAN DEFAULT FALSE,
    quiz_score INTEGER,
    last_code TEXT,
    UNIQUE(user_id, lesson_id)
);

-- Tabela: community_posts
CREATE TABLE IF NOT EXISTS public.community_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: community_comments
CREATE TABLE IF NOT EXISTS public.community_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: certificates
CREATE TABLE IF NOT EXISTS public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    level_title TEXT,
    certificate_url TEXT,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex')
);

-- Função para atualizar pontos baseada no progresso
CREATE OR REPLACE FUNCTION public.calculate_total_points(p_user_id UUID)
RETURNS void AS $$
DECLARE
    points_count INTEGER;
BEGIN
    SELECT count(*) * 10 INTO points_count 
    FROM public.user_lesson_progress 
    WHERE user_id = p_user_id AND completed = true;

    UPDATE public.profiles 
    SET total_points = points_count, total_xp = points_count
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql;

-- Trigger para criar perfil automaticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, display_name, username)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'user_name', split_part(NEW.email, '@', 1)),
        COALESCE(NEW.raw_user_meta_data->>'user_name', split_part(NEW.email, '@', 1) || floor(random()*1000)::text)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- RLS e Políticas
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Perfis públicos" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Edição do próprio perfil" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Acesso ao próprio progresso" ON public.user_lesson_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Leitura pública do fórum" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Criação de posts" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Leitura de certificados" ON public.certificates FOR SELECT USING (true);
