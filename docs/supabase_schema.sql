-- ============================================
-- 🚀 CODWORKS MOZ - UNIFIED SUPABASE SCHEMA
-- Merge: New Curriculum Structure + Current App Logic
-- ============================================

-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- 1. TABELA: profiles
-- Mantém compatibilidade com AuthContext.tsx e Leaderboard
-- ============================================
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE NOT NULL,
    display_name TEXT, -- Nome exibido na UI atual
    full_name TEXT,    -- Nome completo legal
    avatar_url TEXT,
    bio TEXT,
    preferred_language TEXT DEFAULT 'pt',
    preferred_theme TEXT DEFAULT 'dark',
    level INTEGER DEFAULT 1,
    total_points INTEGER DEFAULT 0, -- Sistema de pontos atual
    total_xp INTEGER DEFAULT 0,     -- Novo sistema de XP
    streak INTEGER DEFAULT 0,       -- Dias seguidos de estudo
    last_active TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 2. ESTRUTURA DO CURRÍCULO (ACM/IEEE)
-- Suporte para migrar o currículo de TS para DB no futuro
-- ============================================
CREATE TABLE IF NOT EXISTS acm_curriculum (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 8),
    ka_code TEXT NOT NULL,
    ka_name TEXT NOT NULL,
    ka_name_pt TEXT,
    description TEXT,
    order_index INTEGER,
    required_hours INTEGER,
    prerequisites JSONB DEFAULT '[]',
    UNIQUE(level, ka_code)
);

CREATE TABLE IF NOT EXISTS lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ka_id UUID REFERENCES acm_curriculum(id) ON DELETE CASCADE,
    module_number INTEGER,
    title TEXT NOT NULL,
    title_translations JSONB DEFAULT '{}',
    content_mdx TEXT,
    theory JSONB,
    video_url TEXT,
    duration_minutes INTEGER,
    order_index INTEGER
);

CREATE TABLE IF NOT EXISTS exercises (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
    ka_id UUID REFERENCES acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    language TEXT NOT NULL,
    difficulty TEXT DEFAULT 'beginner',
    template_code TEXT,
    solution_code TEXT,
    test_cases JSONB DEFAULT '[]',
    hints JSONB DEFAULT '[]',
    exercise_file TEXT,
    order_index INTEGER
);

CREATE TABLE IF NOT EXISTS quizzes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ka_id UUID REFERENCES acm_curriculum(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    passing_score INTEGER DEFAULT 70,
    time_limit_minutes INTEGER,
    questions JSONB NOT NULL DEFAULT '[]'
);

-- ============================================
-- 3. PROGRESSO E SUBMISSÕES
-- Sincronizado com ProgressContext.tsx e LearnPage.tsx
-- ============================================
CREATE TABLE IF NOT EXISTS user_lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    ka_id TEXT,
    lesson_id TEXT NOT NULL, -- ID do currículo (ex: cs-t1)
    lesson_type TEXT,        -- 'theory' ou 'exercise'
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    quiz_passed BOOLEAN DEFAULT FALSE,
    quiz_score INTEGER,
    last_code TEXT,          -- Último código salvo no laboratório
    last_accessed_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, lesson_id)
);

CREATE TABLE IF NOT EXISTS user_exercise_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT NOT NULL,
    code_submitted TEXT,
    test_results JSONB,
    status TEXT DEFAULT 'pending',
    attempts INTEGER DEFAULT 1,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 4. CERTIFICADOS E COMUNIDADE
-- Sincronizado com CertificationsPage e CommunityPage
-- ============================================
CREATE TABLE IF NOT EXISTS certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    level_id INTEGER,
    level_title TEXT,
    certificate_type TEXT DEFAULT 'completion',
    certificate_url TEXT,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    verification_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
    metadata JSONB DEFAULT '{}'
);

CREATE TABLE IF NOT EXISTS community_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  exercise_id TEXT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS community_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_solution BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 5. FUNÇÕES, TRIGGERS E POLÍTICAS RLS
-- ============================================

-- Função para atualizar timestamp de modificação
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger para criação automática de perfil após registo no Auth
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO profiles (id, username, display_name, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'user_name', NEW.raw_user_meta_data->>'email', NEW.id::text),
        COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', 'Estudante Moz'),
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION handle_new_user();

-- Habilitar RLS em todas as tabelas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE acm_curriculum ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Políticas de Segurança
CREATE POLICY "Leitura pública para currículo" ON acm_curriculum FOR SELECT USING (true);
CREATE POLICY "Leitura pública para lições" ON lessons FOR SELECT USING (true);
CREATE POLICY "Perfis visíveis para todos" ON profiles FOR SELECT USING (true);
CREATE POLICY "Próprio perfil editável" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Progresso privado" ON user_lesson_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Posts visíveis" ON community_posts FOR SELECT USING (true);
CREATE POLICY "Criar posts" ON community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Comentários visíveis" ON community_comments FOR SELECT USING (true);
CREATE POLICY "Criar comentários" ON community_comments FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Função para calcular pontos (RPC)
CREATE OR REPLACE FUNCTION calculate_total_points(p_user_id UUID)
RETURNS void AS $$
BEGIN
    UPDATE profiles
    SET total_points = (
        SELECT COUNT(*) * 10 
        FROM user_lesson_progress 
        WHERE user_id = p_user_id AND completed = true
    )
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql;