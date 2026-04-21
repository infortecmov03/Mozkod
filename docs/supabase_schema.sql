
-- 🏗️ MIGRATION SCRIPT: CODWORKS MOZ
-- Este script configura a estrutura para dados dinâmicos preservando utilizadores existentes.

-- 1. Extensões Necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Tabela de Perfis (User State)
-- Mantém compatibilidade com display_name (UI) e full_name (Supa default)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name TEXT,
    full_name TEXT,
    username TEXT UNIQUE,
    avatar_url TEXT,
    bio TEXT,
    preferred_language TEXT DEFAULT 'pt',
    preferred_theme TEXT DEFAULT 'system',
    total_points INTEGER DEFAULT 0,
    total_xp INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    last_active TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Progresso das Lições (O Cérebro do Aprendizado)
-- Esta tabela liga o utilizador às aulas estáticas do Git via lesson_id (String)
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
    quiz_attempts INTEGER DEFAULT 0,
    last_code TEXT, -- Guarda o código do aluno para herança de projeto (Nível 8)
    UNIQUE(user_id, lesson_id)
);

-- 4. Comunidade e Fórum
CREATE TABLE IF NOT EXISTS public.community_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT, -- Ligação com o laboratório estático
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

-- 5. Certificados Digitais
CREATE TABLE IF NOT EXISTS public.certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER NOT NULL,
    level_title TEXT NOT NULL,
    certificate_url TEXT DEFAULT '#',
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex')
);

-- 6. Funções de Automação

-- Atualizar timestamp de alteração
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para perfis
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'tr_update_profiles_updated_at') THEN
        CREATE TRIGGER tr_update_profiles_updated_at
            BEFORE UPDATE ON public.profiles
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;

-- Criação automática de perfil no registo
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, display_name, username, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', SPLIT_PART(NEW.email, '@', 1)),
        COALESCE(NEW.raw_user_meta_data->>'username', NEW.id::text),
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger de criação de perfil
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN
        CREATE TRIGGER on_auth_user_created
            AFTER INSERT ON auth.users
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
    END IF;
END $$;

-- Cálculo de Pontos Reais (Baseado no progresso)
CREATE OR REPLACE FUNCTION public.calculate_total_points(p_user_id UUID)
RETURNS void AS $$
DECLARE
    v_points INTEGER;
BEGIN
    -- 10 pontos por cada lição concluída
    SELECT COUNT(*) * 10 INTO v_points
    FROM public.user_lesson_progress
    WHERE user_id = p_user_id AND completed = TRUE;

    UPDATE public.profiles
    SET total_points = v_points, total_xp = v_points
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql;

-- 7. Segurança RLS (Row Level Security)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso
-- Perfis: Público para ver (ranking), privado para editar
CREATE POLICY "Profiles are viewable by all" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can edit own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Progresso: Estritamente privado
CREATE POLICY "Progress is private" ON public.user_lesson_progress FOR ALL USING (auth.uid() = user_id);

-- Fórum: Público para ler, privado para escrever
CREATE POLICY "Forum is public" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Users can post" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Comments are public" ON public.community_comments FOR SELECT USING (true);
CREATE POLICY "Users can comment" ON public.community_comments FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Certificados: Público para validação
CREATE POLICY "Certs are public" ON public.certificates FOR SELECT USING (true);
