
-- Codworks Moz - Curriculum Seeding Script (Levels 1-8)
-- Este script popula a base de dados com a jornada completa do engenheiro.

-- Limpeza de dados existentes (Cascade para evitar erros de FK)
TRUNCATE TABLE public.user_lesson_progress, public.quizzes, public.exercises, public.lessons, public.acm_curriculum CASCADE;

-- ==========================================
-- 1. NÍVEL 1: FUNDAMENTOS (KAs)
-- ==========================================
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-cs-core', 'CS-101', 'Computer Science Core', 'Binário, Lógica e Arquitetura.', 1, 40, 'Cpu'),
('ka-programming', 'PF-101', 'Programming Fundamentals', 'Lógica de programação universal.', 1, 80, 'Terminal'),
('ka-web', 'WEB-101', 'Web Core', 'HTML5 e CSS3 Semântico.', 1, 60, 'Globe'),
('ka-git', 'GIT-101', 'Git & Version Control', 'Controle de versão e GitHub.', 1, 20, 'GitBranch');

-- ==========================================
-- 2. NÍVEL 2: ALGORITMOS & ESTRUTURAS
-- ==========================================
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-algorithms', 'ALG-201', 'Algorithms', 'Busca, ordenação e complexidade.', 2, 50, 'Zap'),
('ka-data-structures', 'DS-201', 'Data Structures', 'Listas, Pilhas e Árvores.', 2, 50, 'Database');

-- ==========================================
-- 3. NÍVEL 3: SISTEMAS & INFRA
-- ==========================================
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-os', 'OS-301', 'Operating Systems', 'Kernels e gestão de memória.', 3, 40, 'Settings'),
('ka-networking', 'NET-301', 'Networking', 'Protocolos e TCP/IP.', 3, 40, 'Share2');

-- ==========================================
-- 4. NÍVEIS 4-7: ENGENHARIA E CARREIRA
-- ==========================================
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-se', 'SE-401', 'Software Engineering', 'SDLC e Design Patterns.', 4, 60, 'Box'),
('ka-ai', 'AI-501', 'AI & Data Science', 'Especialização em Inteligência Artificial.', 5, 80, 'Brain'),
('ka-career', 'CAR-601', 'Career Development', 'Preparação para o mercado global.', 6, 30, 'Briefcase'),
('ka-capstone', 'CAP-701', 'Capstone Project', 'Projeto final de graduação.', 7, 100, 'Trophy');

-- ==========================================
-- 5. NÍVEL 8: MAESTRIA DE LINGUAGEM
-- ==========================================
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('lang-html', 'M-HTML', 'HTML Master', 'Arquitetura de documentos de elite.', 8, 30, 'Code'),
('lang-css', 'M-CSS', 'CSS Master', 'Design Systems e Performance.', 8, 40, 'Palette'),
('lang-js', 'M-JS', 'JavaScript Master', 'Motores, V8 e Metaprogramação.', 8, 50, 'Zap'),
('lang-python', 'M-PY', 'Python Master', 'Async, Data Science e Backend.', 8, 50, 'FileCode'),
('lang-rust', 'M-RS', 'Rust Master', 'Segurança de memória e performance.', 8, 60, 'Shield');

-- ==========================================
-- 6. POPULAR LIÇÕES (EXEMPLOS)
-- ==========================================

-- Lições Nível 1 (CS Core)
INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index) VALUES
('cs-t1', 'ka-cs-core', 'Sistemas Binários', '<h2>O Mundo de 0 e 1</h2><p>Computadores operam com eletricidade. 1 para ligado, 0 para desligado.</p>', 1),
('pf-t1', 'ka-programming', 'Variáveis e Tipos', '<h2>Caixas de Memória</h2><p>Variáveis guardam dados que podemos usar depois.</p>', 1);

-- Lições Nível 8 (HTML Master)
INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index) VALUES
('html-m1', 'lang-html', 'Fase 1: Estrutura Master e DOCTYPE', '<p>Domine o esqueleto de aplicações de alta performance.</p>', 1);

-- ==========================================
-- 7. POPULAR EXERCÍCIOS (LABS)
-- ==========================================
INSERT INTO public.exercises (id, ka_id, language, title, statement, template_code, test_cases) VALUES
('js-vars-lab', 'ka-programming', 'javascript', 'Lab: Declarando Variáveis', 'Crie as variáveis nome e idade.', 'let nome = "";\nlet idade = 0;', '[{"description": "Variável nome existe", "code": "return typeof nome === ''string''"}]'),
('html-structure-lab', 'lang-html', 'html', 'Lab Master: DOCTYPE', 'Inicie o documento corretamente.', '<!DOCTYPE html>', '[{"description": "Contém Doctype", "code": "return code.includes(''!DOCTYPE html'')"}]');

-- ==========================================
-- 8. POPULAR QUIZZES
-- ==========================================
INSERT INTO public.quizzes (id, ka_id, title, questions) VALUES
('q-cs-1', 'ka-cs-core', 'Quiz: Binário', '[{"id": "q1", "question": "O que é um bit?", "options": ["8 bytes", "Dígito 0 ou 1", "Um erro"], "correctAnswer": 1}]');

-- NOTA: O administrador pode continuar a adicionar lições via Painel de Admin ou expandindo este script.
