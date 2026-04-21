
-- Codworks Moz | Elite Engineering Platform Schema
-- Optimized for Hybrid Curriculum Model

-- 1. PROFILES & USER DATA
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  avatar_url text,
  preferred_language text DEFAULT 'pt',
  preferred_theme text DEFAULT 'dark',
  total_points integer DEFAULT 0,
  streak integer DEFAULT 0,
  last_active timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- 2. PROGRESS TRACKING (Hybrid Model: IDs map to static Git content)
CREATE TABLE IF NOT EXISTS public.user_lesson_progress (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id text NOT NULL, -- Static ID from src/lib/curriculum/
  level_id integer NOT NULL,
  ka_id text NOT NULL,
  lesson_type text CHECK (lesson_type IN ('theory', 'exercise')),
  completed boolean DEFAULT false,
  completed_at timestamp with time zone DEFAULT now(),
  quiz_passed boolean DEFAULT false,
  quiz_score integer,
  last_code text, -- Used for Project Inheritance (Level 8)
  UNIQUE(user_id, lesson_id)
);

-- 3. CERTIFICATES (Verifiable Achievements)
CREATE TABLE IF NOT EXISTS public.certificates (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  level_id integer NOT NULL,
  level_title text NOT NULL,
  certificate_url text,
  issued_at timestamp with time zone DEFAULT now()
);

-- 4. COMMUNITY (Forums & Interaction)
CREATE TABLE IF NOT EXISTS public.community_posts (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  exercise_id text, -- Optional: links to a specific lab
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.community_comments (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  post_id uuid NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- 5. FUNCTIONS & TRIGGERS

-- Automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Calculate total points based on progress
CREATE OR REPLACE FUNCTION public.calculate_total_points(p_user_id uuid)
RETURNS void AS $$
DECLARE
  v_points integer;
BEGIN
  -- Logic: Theory = 10pts, Exercise = 50pts
  SELECT COALESCE(SUM(
    CASE 
      WHEN lesson_type = 'theory' THEN 10 
      WHEN lesson_type = 'exercise' THEN 50 
      ELSE 0 
    END
  ), 0)
  INTO v_points
  FROM public.user_lesson_progress
  WHERE user_id = p_user_id AND completed = true;

  UPDATE public.profiles
  SET total_points = v_points,
      last_active = now()
  WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RLS POLICIES (Safety First)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;

-- Profiles: Public read, owner write
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Progress: Owner only
CREATE POLICY "Users can view own progress" ON public.user_lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON public.user_lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON public.user_lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- Community: Public read, auth write
CREATE POLICY "Posts are viewable by everyone" ON public.community_posts FOR SELECT USING (true);
CREATE POLICY "Auth users can create posts" ON public.community_posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Comments are viewable by everyone" ON public.community_comments FOR SELECT USING (true);
CREATE POLICY "Auth users can create comments" ON public.community_comments FOR INSERT WITH CHECK (auth.role() = 'authenticated');
