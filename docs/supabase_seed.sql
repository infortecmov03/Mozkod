
-- Supabase Curriculum Seeding Script (LEVELS 1 - 8 COMPLETE)
-- Execute este script no seu editor de SQL do Supabase para popular as tabelas do currículo.

-- Limpa as tabelas existentes para evitar duplicatas e garantir integridade
TRUNCATE TABLE public.user_quiz_attempts, public.user_exercise_submissions, public.user_lesson_progress RESTART IDENTITY CASCADE;
TRUNCATE TABLE public.quizzes, public.exercises, public.lessons, public.acm_curriculum RESTART IDENTITY CASCADE;

-- ==========================================
-- NÍVEL 1: FUNDAMENTOS (CORE)
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-cs-core', 'CS-Core', 'Computer Science Core', 'Sistemas binários, lógica booleana e arquitetura.', 1, 40, 'Cpu'),
('ka-programming', 'PF', 'Programming Fundamentals', 'Lógica, variáveis e estruturas de controle.', 1, 80, 'Code2'),
('ka-web', 'WEB-Core', 'Web Core', 'HTML5 semântico e CSS3 moderno.', 1, 60, 'Globe'),
('ka-git', 'GIT-VC', 'Git & Version Control', 'Controle de versão e colaboração.', 1, 30, 'GitBranch');

INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index) VALUES
('cs-t1', 'ka-cs-core', 'O Mundo Binário', '<p>Computadores funcionam com eletricidade (0 e 1)...</p>', 1),
('pf-t1', 'ka-programming', 'Variáveis e Memória', '<p>Pense em variáveis como caixas nomeadas...</p>', 1),
('web-t1', 'ka-web', 'HTML5 Semântico', '<p>Dando significado ao conteúdo web...</p>', 1);

-- ==========================================
-- NÍVEL 2: ALGORITMOS & ESTRUTURAS
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-algorithms', 'ALGO', 'Algorithms', 'Resolução de problemas e complexidade Big O.', 2, 40, 'Zap'),
('ka-ds', 'DS', 'Data Structures', 'Listas, Árvores, Pilhas e Filas.', 2, 45, 'Database'),
('ka-math', 'MATH', 'Discrete Mathematics', 'Lógica matemática e teoria de grafos.', 2, 40, 'Calculator');

-- ==========================================
-- NÍVEL 3: SISTEMAS & INFRAESTRUTURA
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-os', 'OS', 'Operating Systems', 'Kernels, memória virtual e processos.', 3, 45, 'Cpu'),
('ka-net', 'NET', 'Networking', 'Protocolos TCP/IP e arquitetura de rede.', 3, 40, 'Globe'),
('ka-db-int', 'DB-INT', 'Database Internals', 'Transações ACID e otimização SQL.', 3, 40, 'Database');

-- ==========================================
-- NÍVEL 4: ENGENHARIA DE SOFTWARE
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-se-proc', 'SE-PROC', 'Software Processes', 'Agile, Scrum e ciclo de vida SDLC.', 4, 30, 'Settings'),
('ka-se-des', 'SE-DES', 'Design & Architecture', 'SOLID, Design Patterns e Clean Arch.', 4, 45, 'Layout'),
('ka-se-qual', 'SE-QUAL', 'Quality & QA', 'Testes automatizados e CI/CD.', 4, 35, 'ShieldCheck');

-- ==========================================
-- NÍVEL 5 - 7: ESPECIALIZAÇÃO E CAPSTONE
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-ai', 'AI', 'Artificial Intelligence', 'Machine Learning e Deep Learning.', 5, 60, 'Brain'),
('ka-sec', 'SEC', 'Cybersecurity', 'Segurança ofensiva e defensiva.', 5, 50, 'Lock'),
('ka-career', 'CAREER', 'Career Development', 'LinkedIn, Currículo e Entrevistas.', 6, 30, 'Briefcase'),
('ka-capstone', 'CAP', 'Capstone Project', 'Projeto final de graduação.', 7, 100, 'Trophy');

-- ==========================================
-- NÍVEL 8: DOMÍNIO DE LINGUAGENS (MASTERY)
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-lang-html', 'L-HTML', 'HTML Master', 'Arquitetura de documentos de alta complexidade.', 8, 30, 'Code'),
('ka-lang-css', 'L-CSS', 'CSS Master', 'Design Systems e animações de elite.', 8, 40, 'Palette'),
('ka-lang-js', 'L-JS', 'JavaScript Master', 'Event Loop, V8 internals e metaprogramação.', 8, 50, 'Zap'),
('ka-lang-py', 'L-PY', 'Python Master', 'AsyncIO, Decoradores e Data Science.', 8, 50, 'Code2'),
('ka-lang-java', 'L-JV', 'Java Master', 'JVM Tuning, Spring Boot 3 e Concorrência.', 8, 60, 'Coffee'),
('ka-lang-kt', 'L-KT', 'Kotlin Master', 'Coroutines, KMP e Android moderno.', 8, 45, 'Smartphone'),
('ka-lang-go', 'L-GO', 'Go Master', 'Goroutines, Channels e Cloud Native.', 8, 40, 'Cloud'),
('ka-lang-rs', 'L-RS', 'Rust Master', 'Ownership, Borrowing e sistemas seguros.', 8, 60, 'Shield'),
('ka-lang-rb', 'L-RB', 'Ruby Master', 'Metaprogramação e elegância técnica.', 8, 35, 'Gem'),
('ka-lang-php', 'L-PHP', 'PHP Master', 'PHP 8+, Swoole e arquiteturas web.', 8, 40, 'Globe');

-- Lições de Exemplo para Nível 8 (Fase 1 de cada)
INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index) VALUES
('html-m1', 'ka-lang-html', 'Fase 1: Estrutura Master e DOCTYPE', '<p>Domínio absoluto da fundação do documento...</p>', 1),
('css-m1', 'ka-lang-css', 'Fase 1: Seletores de Elite e Especificidade', '<p>Desenhando a cascata sem conflitos...</p>', 1),
('js-m1', 'ka-lang-js', 'Fase 1: Motores JS e o Event Loop', '<p>Como o V8 processa o teu código...</p>', 1),
('py-m1', 'ka-lang-py', 'Fase 1: Duck Typing e Protocolos', '<p>A flexibilidade do sistema de tipos Python...</p>', 1),
('jv-m1', 'ka-lang-java', 'Fase 1: Arquitetura da JVM e JIT', '<p>Compilação em níveis e performance enterprise...</p>', 1),
('kt-m1', 'ka-lang-kt', 'Fase 1: Null Safety Internals', '<p>Eliminando o erro de um bilhão de dólares...</p>', 1),
('go-m1', 'ka-lang-go', 'Fase 1: Interfaces Implícitas', '<p>O segredo do desacoplamento em Go...</p>', 1),
('rs-m1', 'ka-lang-rs', 'Fase 1: Ownership e Movimentação', '<p>Segurança de memória determinística...</p>', 1),
('rb-m1', 'ka-lang-rb', 'Fase 1: Tudo é Objeto e Sintaxe Flexível', '<p>A filosofia da elegância Ruby...</p>', 1),
('php-m1', 'ka-lang-php', 'Fase 1: PHP 8 Attributes e Metadados', '<p>A modernização do backend PHP...</p>', 1);

-- ==========================================
-- EXERCÍCIOS E QUIZZES (AMOSTRA)
-- ==========================================

INSERT INTO public.exercises (id, ka_id, language, title, statement, template_code) VALUES
('html-p1', 'ka-lang-html', 'html', 'Lab Master: DOCTYPE e Head', 'Configure a estrutura base de elite.', '<!DOCTYPE html>\n<html>\n<head></head>\n</html>');

INSERT INTO public.quizzes (id, ka_id, title, questions) VALUES
('quiz-m-1', 'ka-lang-js', 'Quiz: V8 Internals', '[{"id": "q1", "question": "O que é o JIT?", "options": ["Just-In-Time Compiler", "Javascript Interface Tool"], "correctAnswer": 0}]');
