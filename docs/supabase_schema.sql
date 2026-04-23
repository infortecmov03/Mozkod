
-- 🏛️ Codworks Moz - Supabase Database Schema
-- Execute este script no SQL Editor do seu projeto Supabase.

-- 1. Tabela de Perfis de Usuário
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  total_points INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS para Perfis
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Utilizadores podem ver todos os perfis" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Utilizadores podem editar o seu próprio perfil" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Tabela de Progresso de Lições
CREATE TABLE IF NOT EXISTS public.user_lesson_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  level_id INTEGER NOT NULL,
  ka_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  lesson_type TEXT CHECK (lesson_type IN ('theory', 'exercise')),
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  quiz_passed BOOLEAN DEFAULT FALSE,
  quiz_score INTEGER DEFAULT 0,
  last_code TEXT,
  UNIQUE(user_id, lesson_id)
);

-- Habilitar RLS para Progresso
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Utilizadores podem ver o seu próprio progresso" ON public.user_lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Utilizadores podem inserir o seu próprio progresso" ON public.user_lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Utilizadores podem atualizar o seu próprio progresso" ON public.user_lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- 3. Função para Recalcular Pontos (10 pontos por lição concluída)
CREATE OR REPLACE FUNCTION public.calculate_total_points(p_user_id UUID)
RETURNS VOID AS $$
DECLARE
    v_points INTEGER;
BEGIN
    -- Soma 10 pontos para cada lição única concluída
    SELECT COUNT(*) * 10 INTO v_points
    FROM public.user_lesson_progress
    WHERE user_id = p_user_id AND completed = TRUE;

    -- Atualiza o perfil do utilizador
    UPDATE public.profiles
    SET total_points = v_points,
        last_active = NOW()
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Gatilho automático para pontos (opcional mas recomendado)
CREATE OR REPLACE FUNCTION public.after_progress_update()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM public.calculate_total_points(NEW.user_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER trigger_update_points
AFTER INSERT OR UPDATE ON public.user_lesson_progress
FOR EACH ROW EXECUTE FUNCTION public.after_progress_update();
