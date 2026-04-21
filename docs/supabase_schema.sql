
-- 🏗️ Esquema Simplificado Codworks Moz (Produção)
-- Foco: Perfis, Progresso, Certificações e Comunidade.

-- Habilitar extensões
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Tabela: profiles
-- Armazena dados de gamificação e preferências do utilizador.
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name TEXT,
    full_name TEXT,
    avatar_url TEXT,
    preferred_language TEXT DEFAULT 'pt',
    preferred_theme TEXT DEFAULT 'dark',
    total_points INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    last_active TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabela: user_lesson_progress
-- Tabela única para rastrear teoria, exercícios e quizzes.
CREATE TABLE IF NOT EXISTS public.user_lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_id TEXT NOT NULL, -- ID vindo do arquivo estático (ex: 'cs-t1')
    level_id INTEGER NOT NULL,
    ka_id TEXT NOT NULL,
    lesson_type TEXT CHECK (lesson_type IN ('theory', 'exercise')),
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    quiz_passed BOOLEAN DEFAULT FALSE,
    quiz_score INTEGER,
    last_code TEXT, -- Armazena o último código para herança no Nível 8
    UNIQUE(user_id, lesson_id)
);

-- 3. Tabela: community_posts
-- Discussões de laboratórios e dúvidas gerais.
CREATE TABLE IF NOT EXISTS public.community_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT, -- Opcional: vincula a dúvida a um lab específico
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Tabela: community_comments
-- Respostas e soluções no fórum.
CREATE TABLE IF NOT EXISTS public.community_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Tabela: certificates
-- Registro de conclusões de nível.
CREATE TABLE IF NOT EXISTS public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER NOT NULL,
    level_title TEXT NOT NULL,
    certificate_url TEXT,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex')
);

-- 🔐 SEGURANÇA (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Políticas de Perfis
CREATE POLICY "Perfis visíveis para todos" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Utilizadores editam próprio perfil" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Políticas de Progresso
CREATE POLICY "Progresso privado ao dono" ON public.user_lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Dono insere progresso" ON public.user_lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Dono atualiza progresso" ON public.user_lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- Políticas de Comunidade
CREATE POLICY "Discussões visíveis para todos" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Utilizadores criam posts" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Comentários visíveis para todos" ON public.community_comments FOR SELECT USING (true);
CREATE POLICY "Utilizadores comentam" ON public.community_comments FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Políticas de Certificados
CREATE POLICY "Certificados públicos" ON public.certificates FOR SELECT USING (true);

-- ⚙️ AUTOMATIZAÇÃO (Triggers e Functions)

-- Função para atualizar pontos baseada no progresso
CREATE OR REPLACE FUNCTION public.calculate_total_points(p_user_id UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE public.profiles
    SET total_points = (
        SELECT COUNT(*) * 10 
        FROM public.user_lesson_progress 
        WHERE user_id = p_user_id AND completed = TRUE
    )
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql;

-- Trigger para criar perfil após o registo no Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, display_name, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email),
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
