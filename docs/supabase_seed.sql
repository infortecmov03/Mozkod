-- Codworks Moz - Seed Completo (Nível 1 ao 8)
-- Execute este script para popular o currículo após rodar o schema.sql.

-- Limpeza de tabelas (ordem inversa de dependência)
TRUNCATE TABLE public.user_lesson_progress, public.community_posts, public.quizzes, public.exercises, public.lessons, public.acm_curriculum RESTART IDENTITY;

-- NÍVEL 1: FUNDAMENTOS --
INSERT INTO public.acm_curriculum (id, level, ka_code, ka_name, required_hours, iconName, order_index) VALUES
('550e8400-e29b-41d4-a716-446655440001', 1, 'CS-CORE', '01. CS Core (Ciência da Computação)', 45, 'Cpu', 1),
('550e8400-e29b-41d4-a716-446655440002', 1, 'PROG-FUND', '02. Programming Fundamentals', 80, 'Terminal', 2),
('550e8400-e29b-41d4-a716-446655440003', 1, 'WEB-CORE', '03. Web Core (HTML/CSS)', 60, 'Globe', 3);

-- Lições Nível 1
INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index, quiz_id) VALUES
('cs-t1', '550e8400-e29b-41d4-a716-446655440001', 'Sistemas Binários', '<h2>O Mundo Digital</h2><p>Tudo no computador é 0 ou 1.</p>', 1, 'cs-q1'),
('pf-t1', '550e8400-e29b-41d4-a716-446655440002', 'Variáveis e Tipos', '<h2>Caixas de Memória</h2><p>Aprenda a guardar dados.</p>', 1, 'pf-q1');

-- NÍVEL 8: DOMÍNIO DE LINGUAGENS --
INSERT INTO public.acm_curriculum (id, level, ka_code, ka_name, required_hours, iconName, order_index) VALUES
('550e8400-e29b-41d4-a716-446655440008', 8, 'MASTER-JS', 'JavaScript Mastery', 100, 'Zap', 1),
('550e8400-e29b-41d4-a716-446655440009', 8, 'MASTER-RUST', 'Rust Mastery', 120, 'Shield', 2);

-- Lições Nível 8
INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index, quiz_id) VALUES
('js-m1', '550e8400-e29b-41d4-a716-446655440008', 'Fase 1: Motor V8 e Event Loop', '<h2>Engenharia de Execução</h2><p>Como o JS realmente corre.</p>', 1, 'js-mq1'),
('rs-m1', '550e8400-e29b-41d4-a716-446655440009', 'Fase 1: Ownership e Borrowing', '<h2>Segurança de Memória</h2><p>O pilar fundamental do Rust.</p>', 1, 'rs-mq1');

-- Quizzes de Amostra
INSERT INTO public.quizzes (id, ka_id, title, questions) VALUES
('cs-q1', '550e8400-e29b-41d4-a716-446655440001', 'Quiz Binário', '[{"id":"q1","question":"O que é um bit?","options":["0 ou 1","Uma letra","Um cabo"],"correctAnswer":0}]'),
('js-mq1', '550e8400-e29b-41d4-a716-446655440008', 'Quiz V8', '[{"id":"q1","question":"O V8 é o motor de qual browser?","options":["Chrome","Safari","Firefox"],"correctAnswer":0}]');

-- Exercícios de Amostra
INSERT INTO public.exercises (id, ka_id, lesson_id, title, language, statement, template_code, objectives) VALUES
('js-p1', '550e8400-e29b-41d4-a716-446655440008', 'js-m1', 'Lab: Call Stack', 'javascript', 'Execute uma função simples.', 'function test() {}', '[{"id":"obj1","description":"Criar função","test":"function"}]');
