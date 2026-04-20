# Configuração do Banco de Dados Supabase - Codworks Moz

Execute o script SQL abaixo no **SQL Editor** do seu painel Supabase para preparar toda a infraestrutura da plataforma.

```sql
-- ============================================
-- SCRIPT COMPLETO - COPIAR TUDO E EXECUTAR
-- ============================================

-- ============================================
-- 1. EXTENSÕES
-- ============================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 2. TABELA: profiles
-- ============================================
DROP TABLE IF EXISTS profiles CASCADE;
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  preferred_language TEXT DEFAULT 'pt',
  preferred_theme TEXT DEFAULT 'system',
  total_points INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 3. TABELA: user_lesson_progress
-- ============================================
DROP TABLE IF EXISTS user_lesson_progress CASCADE;
CREATE TABLE user_lesson_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  level_id INTEGER NOT NULL,
  ka_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  lesson_type TEXT CHECK (lesson_type IN ('theory', 'exercise')),
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  quiz_score INTEGER,
  quiz_passed BOOLEAN DEFAULT FALSE,
  quiz_attempts INTEGER DEFAULT 0,
  last_code TEXT,
  UNIQUE(user_id, lesson_id)
);

-- ============================================
-- 4. TABELA: user_quiz_attempts
-- ============================================
DROP TABLE IF EXISTS user_quiz_attempts CASCADE;
CREATE TABLE user_quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  answers JSONB NOT NULL,
  attempted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 5. TABELA: certificates
-- ============================================
DROP TABLE IF EXISTS certificates CASCADE;
CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  level_id INTEGER NOT NULL,
  level_title TEXT NOT NULL,
  ka_id TEXT,
  certificate_url TEXT NOT NULL,
  issued_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, level_id, ka_id)
);

-- ============================================
-- 6. TABELA: user_settings
-- ============================================
DROP TABLE IF EXISTS user_settings CASCADE;
CREATE TABLE user_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  language TEXT DEFAULT 'pt',
  theme TEXT DEFAULT 'system',
  email_notifications BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 7. TABELA: curriculum_lessons
-- ============================================
DROP TABLE IF EXISTS curriculum_lessons CASCADE;
CREATE TABLE curriculum_lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  level_id INTEGER NOT NULL,
  ka_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  lesson_title TEXT NOT NULL,
  lesson_order INTEGER NOT NULL,
  UNIQUE(level_id, ka_id, lesson_id)
);

-- ============================================
-- 8. ÍNDICES
-- ============================================
CREATE INDEX IF NOT EXISTS idx_progress_user ON user_lesson_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_lesson ON user_lesson_progress(lesson_id);
CREATE INDEX IF NOT EXISTS idx_progress_completed ON user_lesson_progress(user_id, completed);
CREATE INDEX IF NOT EXISTS idx_quiz_user ON user_quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_lesson ON user_quiz_attempts(lesson_id);
CREATE INDEX IF NOT EXISTS idx_certificates_user ON certificates(user_id);
CREATE INDEX IF NOT EXISTS idx_curriculum_lessons ON curriculum_lessons(level_id, ka_id, lesson_order);

-- ============================================
-- 9. TRIGGERS E FUNÇÕES
-- ============================================

-- Função para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para updated_at
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS update_settings_updated_at ON user_settings;
CREATE TRIGGER update_settings_updated_at
  BEFORE UPDATE ON user_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Função para criar perfil automaticamente
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, display_name)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1))
  );
  
  INSERT INTO user_settings (user_id, language, theme)
  VALUES (NEW.id, 'pt', 'system');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para novo usuário
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Função para atualizar last_active
CREATE OR REPLACE FUNCTION update_last_active()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles SET last_active = NOW() WHERE id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para last_active
DROP TRIGGER IF EXISTS update_last_active_on_progress ON user_lesson_progress;
CREATE TRIGGER update_last_active_on_progress
  AFTER INSERT OR UPDATE ON user_lesson_progress
  FOR EACH ROW EXECUTE FUNCTION update_last_active();

-- ============================================
-- 10. FUNÇÃO: get_next_lesson
-- ============================================
CREATE OR REPLACE FUNCTION get_next_lesson(
  p_user_id UUID,
  p_level_id INTEGER,
  p_ka_id TEXT,
  p_current_lesson_id TEXT
)
RETURNS TABLE (
  next_lesson_id TEXT,
  all_completed BOOLEAN
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COALESCE(
      (SELECT lesson_id FROM curriculum_lessons
       WHERE level_id = p_level_id AND ka_id = p_ka_id 
         AND lesson_order > (SELECT lesson_order FROM curriculum_lessons WHERE lesson_id = p_current_lesson_id)
         AND NOT EXISTS (
           SELECT 1 FROM user_lesson_progress 
           WHERE user_id = p_user_id 
             AND lesson_id = curriculum_lessons.lesson_id 
             AND completed = TRUE
         )
       ORDER BY lesson_order ASC LIMIT 1),
      NULL
    ) AS next_lesson_id,
    NOT EXISTS (
      SELECT 1 FROM curriculum_lessons
      WHERE level_id = p_level_id AND ka_id = p_ka_id
        AND NOT EXISTS (
          SELECT 1 FROM user_lesson_progress 
          WHERE user_id = p_user_id 
            AND lesson_id = curriculum_lessons.lesson_id 
            AND completed = TRUE
        )
    ) AS all_completed;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 11. FUNÇÃO: calculate_total_points
-- ============================================
CREATE OR REPLACE FUNCTION calculate_total_points(p_user_id UUID)
RETURNS VOID AS $$
DECLARE
  theory_points INTEGER;
  exercise_points INTEGER;
BEGIN
  SELECT COUNT(*) * 10 INTO theory_points
  FROM user_lesson_progress
  WHERE user_id = p_user_id 
    AND lesson_type = 'theory' 
    AND completed = TRUE;
  
  SELECT COUNT(*) * 20 INTO exercise_points
  FROM user_lesson_progress
  WHERE user_id = p_user_id 
    AND lesson_type = 'exercise' 
    AND completed = TRUE;
  
  UPDATE profiles SET total_points = (COALESCE(theory_points, 0) + COALESCE(exercise_points, 0)) WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- SEED DATA - CURRICULUM
-- ============================================
TRUNCATE curriculum_lessons RESTART IDENTITY CASCADE;

INSERT INTO curriculum_lessons (level_id, ka_id, lesson_id, lesson_title, lesson_order) VALUES
-- NÍVEL 1 - FUNDAMENTOS
(1, 'ka-programming', 'pf-t1', 'Variáveis e Tipos de Dados', 1),
(1, 'ka-programming', 'pf-t2', 'Operadores Aritméticos e Lógicos', 2),
(1, 'ka-programming', 'pf-t3', 'Strings e Input/Output', 3),
(1, 'ka-cs', 'cs-t1', 'Sistemas Numéricos', 1),
(1, 'ka-web', 'web-t1', 'Estrutura HTML5', 1),
-- NÍVEL 2 - ALGORITMOS
(2, 'ka-algorithms', 'alg-t1', 'Introdução a Algoritmos', 1),
(2, 'ka-data-structures', 'ds-t1', 'Arrays Estáticos', 1);

-- ============================================
-- RLS POLICIES
-- ============================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

ALTER TABLE user_lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own progress" ON user_lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON user_lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON user_lesson_progress FOR UPDATE USING (auth.uid() = user_id);

ALTER TABLE curriculum_lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view curriculum" ON curriculum_lessons FOR SELECT USING (true);
```
