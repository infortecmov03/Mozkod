
-- 🏗️ CONFIGURAÇÃO DE INFRAESTRUTURA - CODWORKS MOZ
-- Este script cria a estrutura necessária para autenticação, progresso e comunidade.

-- 1. EXTENSÕES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. TABELA DE PERFIS (ESTENDE AUTH.USERS)
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE,
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

-- 3. TABELA DE PROGRESSO (SINCRONIZADA COM O MOTOR ESTÁTICO)
-- Os IDs das lições vêm dos ficheiros .ts no Git.
CREATE TABLE public.user_lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER NOT NULL,
    ka_id TEXT NOT NULL,
    lesson_id TEXT NOT NULL,
    lesson_type TEXT CHECK (lesson_type IN ('theory', 'exercise')),
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    quiz_passed BOOLEAN DEFAULT FALSE,
    quiz_score INTEGER,
    quiz_attempts INTEGER DEFAULT 0,
    last_code TEXT, -- Guarda o último código submetido no laboratório
    progress_percentage INTEGER DEFAULT 0,
    UNIQUE(user_id, lesson_id)
);

-- 4. TABELA DE CERTIFICADOS
CREATE TABLE public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER NOT NULL,
    level_title TEXT NOT NULL,
    ka_id TEXT, -- Opcional, para certificados de área específica
    certificate_url TEXT,
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

-- 5. TABELA DE FÓRUM DA COMUNIDADE
CREATE TABLE public.community_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT, -- Vincula a dúvida a um laboratório estático
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    is_resolved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.community_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_solution BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. FUNÇÕES E TRIGGERS AUTOMÁTICOS

-- Função para atualizar o timestamp de alteração
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_update_profiles_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Função para criar perfil automaticamente após o registo no Auth
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, display_name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', SPLIT_PART(NEW.email, '@', 1)),
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Função para calcular pontos baseada no progresso
CREATE OR REPLACE FUNCTION calculate_total_points(p_user_id UUID)
RETURNS void AS $$
DECLARE
    v_total_points INT;
BEGIN
    -- 10 pontos por lição concluída
    SELECT COUNT(*) * 10 INTO v_total_points
    FROM public.user_lesson_progress
    WHERE user_id = p_user_id AND completed = true;

    UPDATE public.profiles
    SET total_points = v_total_points,
        total_xp = v_total_points
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql;

-- 7. POLÍTICAS DE SEGURANÇA (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;

-- Políticas: Perfis
CREATE POLICY "Leitura pública de perfis" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Utilizadores editam o próprio perfil" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Políticas: Progresso
CREATE POLICY "Progresso privado" ON public.user_lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Inserção de progresso próprio" ON public.user_lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Atualização de progresso próprio" ON public.user_lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- Políticas: Comunidade
CREATE POLICY "Leitura pública do fórum" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Criação de posts autorizada" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Comentários públicos" ON public.community_comments FOR SELECT USING (true);
CREATE POLICY "Criação de comentários autorizada" ON public.community_comments FOR INSERT WITH CHECK (auth.uid() = user_id);
