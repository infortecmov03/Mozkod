-- Codworks Moz - Esquema Unificado de Produção
-- Este script cria a estrutura necessária para Autenticação, Currículo (1-8), Progresso e Comunidade.

-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. TABELA: profiles
-- Armazena dados do utilizador e estatísticas de gamificação.
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

-- 2. TABELA: acm_curriculum
-- Define as Knowledge Areas (KAs) organizadas por nível.
CREATE TABLE public.acm_curriculum (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 8),
    ka_code TEXT NOT NULL,
    ka_name TEXT NOT NULL,
    ka_name_pt TEXT,
    description TEXT,
    required_hours INTEGER,
    iconName TEXT,
    order_index INTEGER,
    prerequisites JSONB DEFAULT '[]',
    UNIQUE(level, ka_code)
);

-- 3. TABELA: lessons
-- Conteúdo teórico das lições.
CREATE TABLE public.lessons (
    id TEXT PRIMARY KEY, -- ID legível (ex: 'cs-t1')
    ka_id UUID REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content_mdx TEXT,
    youtube_video_id TEXT,
    order_index INTEGER,
    quiz_id TEXT -- Referência lógica para a tabela quizzes
);

-- 4. TABELA: exercises
-- Desafios práticos de laboratório.
CREATE TABLE public.exercises (
    id TEXT PRIMARY KEY, -- ID legível (ex: 'html-p1')
    ka_id UUID REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    lesson_id TEXT REFERENCES public.lessons(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    description TEXT,
    language TEXT NOT NULL,
    statement TEXT,
    template_code TEXT,
    solution_code TEXT,
    detailed_explanation TEXT,
    test_cases JSONB DEFAULT '[]',
    objectives JSONB DEFAULT '[]',
    is_project_part BOOLEAN DEFAULT FALSE,
    order_index INTEGER
);

-- 5. TABELA: quizzes
-- Avaliações teóricas.
CREATE TABLE public.quizzes (
    id TEXT PRIMARY KEY,
    ka_id UUID REFERENCES public.acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    passing_score INTEGER DEFAULT 70,
    questions JSONB NOT NULL DEFAULT '[]'
);

-- 6. TABELA: user_lesson_progress (Sincronizado com o ProgressContext.tsx)
-- Regista a conclusão de lições e exercícios.
CREATE TABLE public.user_lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    ka_id TEXT,
    lesson_id TEXT NOT NULL,
    lesson_type TEXT CHECK (lesson_type IN ('theory', 'exercise')),
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    quiz_score INTEGER,
    quiz_passed BOOLEAN DEFAULT FALSE,
    last_code TEXT,
    UNIQUE(user_id, lesson_id)
);

-- 7. TABELA: community_posts (Fórum de Ajuda)
CREATE TABLE public.community_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. TABELA: certificates
CREATE TABLE public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    level_title TEXT,
    certificate_type TEXT DEFAULT 'professional',
    certificate_url TEXT,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
    metadata JSONB DEFAULT '{}'
);

-- TRIGGERS E SEGURANÇA (RLS) --

-- Função para criar perfil automaticamente no SignUp
CREATE OR REPLACE FUNCTION public.handle_new_user()
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Habilitar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.acm_curriculum ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;

-- Políticas de Acesso
CREATE POLICY "Leitura pública do currículo" ON public.acm_curriculum FOR SELECT USING (true);
CREATE POLICY "Leitura pública de lições" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "Leitura pública de exercícios" ON public.exercises FOR SELECT USING (true);
CREATE POLICY "Leitura pública de quizzes" ON public.quizzes FOR SELECT USING (true);

CREATE POLICY "Perfis visíveis para todos" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Dono edita seu perfil" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Utilizador gere seu progresso" ON public.user_lesson_progress 
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Utilizador gere seus posts" ON public.community_posts 
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Posts visíveis para todos" ON public.community_posts FOR SELECT USING (true);

-- Função para calcular pontos
CREATE OR REPLACE FUNCTION public.calculate_total_points(p_user_id UUID)
RETURNS void AS $$
DECLARE
    v_points INTEGER;
BEGIN
    SELECT COUNT(*) * 50 INTO v_points 
    FROM public.user_lesson_progress 
    WHERE user_id = p_user_id AND completed = true;
    
    UPDATE public.profiles SET total_points = v_points WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
