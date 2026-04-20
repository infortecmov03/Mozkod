# Configuração do Banco de Dados Supabase - Codworks Moz

Para que a plataforma funcione corretamente, execute o seguinte script no **SQL Editor** do seu painel Supabase.

## 1. Schema Principal

```sql
-- Extensões
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Perfis de Usuário
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

-- Progresso de Lições
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

-- Certificados
CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  level_id INTEGER NOT NULL,
  level_title TEXT NOT NULL,
  certificate_url TEXT NOT NULL,
  issued_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, level_id)
);

-- Configurações
CREATE TABLE user_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  language TEXT DEFAULT 'pt',
  theme TEXT DEFAULT 'system',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 2. Funções de Automação

```sql
-- Trigger para criar perfil após o Signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)));
  
  INSERT INTO public.user_settings (user_id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Função para calcular pontos (RPC)
CREATE OR REPLACE FUNCTION calculate_total_points(p_user_id UUID)
RETURNS VOID AS $$
DECLARE
  points INTEGER;
BEGIN
  SELECT 
    COALESCE(SUM(CASE WHEN lesson_type = 'theory' THEN 10 ELSE 20 END), 0)
    INTO points
  FROM user_lesson_progress
  WHERE user_id = p_user_id AND completed = TRUE;

  UPDATE profiles SET total_points = points WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql;
```

## 3. Segurança (RLS)
Ative o RLS em todas as tabelas e crie políticas que permitam aos usuários acessar apenas seus próprios dados (`auth.uid() = user_id` ou `auth.uid() = id`).
