-- CODWORKS MOZ - SUPABASE SCHEMA (ELITE EDITION)
-- Este script deve ser executado no SQL Editor do Supabase.

-- 1. EXTENSÕES
create extension if not exists "uuid-ossp";

-- 2. PERFIS DE UTILIZADOR
create table if not exists public.profiles (
    id uuid references auth.users on delete cascade primary key,
    email text unique not null,
    display_name text,
    avatar_url text,
    preferred_language text default 'pt',
    preferred_theme text default 'dark',
    total_points integer default 0,
    streak integer default 0,
    last_active timestamp with time zone default now(),
    created_at timestamp with time zone default now()
);

-- 3. PROGRESSO DE LIÇÕES (Currículo Híbrido)
create table if not exists public.user_lesson_progress (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    level_id integer not null,
    ka_id text not null,
    lesson_id text not null,
    lesson_type text check (lesson_type in ('theory', 'exercise')),
    completed boolean default false,
    completed_at timestamp with time zone default now(),
    quiz_passed boolean default false,
    quiz_score integer,
    last_code text, -- Armazena o último código enviado para herança (Nível 8)
    unique(user_id, lesson_id)
);

-- 4. CERTIFICAÇÕES
create table if not exists public.certificates (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    level_id integer not null,
    level_title text not null,
    certificate_url text default '#',
    issued_at timestamp with time zone default now()
);

-- 5. COMUNIDADE (Fórum de Ajuda)
create table if not exists public.community_posts (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) on delete cascade not null,
    exercise_id text, -- ID do laboratório relacionado (opcional para posts gerais)
    title text not null,
    content text not null,
    created_at timestamp with time zone default now()
);

create table if not exists public.community_comments (
    id uuid default uuid_generate_v4() primary key,
    post_id uuid references public.community_posts(id) on delete cascade not null,
    user_id uuid references public.profiles(id) on delete cascade not null,
    content text not null,
    created_at timestamp with time zone default now()
);

-- 6. SEGURANÇA (RLS - Row Level Security)
alter table public.profiles enable row level security;
alter table public.user_lesson_progress enable row level security;
alter table public.certificates enable row level security;
alter table public.community_posts enable row level security;
alter table public.community_comments enable row level security;

-- Políticas de Acesso
create policy "Perfis públicos" on public.profiles for select using (true);
create policy "Utilizadores editam próprio perfil" on public.profiles for update using (auth.uid() = id);

create policy "Utilizadores veem próprio progresso" on public.user_lesson_progress for select using (auth.uid() = user_id);
create policy "Utilizadores inserem próprio progresso" on public.user_lesson_progress for insert with check (auth.uid() = user_id);
create policy "Utilizadores atualizam próprio progresso" on public.user_lesson_progress for update using (auth.uid() = user_id);

create policy "Certificados são públicos para verificação" on public.certificates for select using (true);
create policy "Apenas o sistema/utilizador insere certificados" on public.certificates for insert with check (auth.uid() = user_id);

create policy "Posts da comunidade são públicos" on public.community_posts for select using (true);
create policy "Utilizadores autenticados criam posts" on public.community_posts for insert with check (auth.role() = 'authenticated');

create policy "Comentários são públicos" on public.community_comments for select using (true);
create policy "Utilizadores autenticados comentam" on public.community_comments for insert with check (auth.role() = 'authenticated');

-- 7. FUNÇÕES E TRIGGERS (Lógica de Gamificação)

-- Função para calcular pontos totais
create or replace function public.calculate_total_points(p_user_id uuid)
returns void as $$
declare
    v_points integer;
begin
    -- 15 pontos por teoria, 50 pontos por exercício concluído
    select coalesce(sum(
        case 
            when lesson_type = 'theory' then 15 
            when lesson_type = 'exercise' then 50 
            else 0 
        end
    ), 0) into v_points
    from public.user_lesson_progress
    where user_id = p_user_id and completed = true;

    update public.profiles
    set total_points = v_points,
        last_active = now()
    where id = p_user_id;
end;
$$ language plpgsql security definer;

-- Trigger para criar perfil após signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, display_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();