-- Codworks Moz - Complete Curriculum Seed
-- Popula os níveis 1 a 8 com dados estruturados da ACM/IEEE.

-- Limpeza Segura
TRUNCATE public.acm_curriculum, public.lessons, public.exercises, public.quizzes CASCADE;

-- NÍVEL 1: FUNDAMENTOS
INSERT INTO public.acm_curriculum (id, level, ka_code, ka_name, description, required_hours, iconName, order_index) VALUES
('ka-cs-core', 1, 'CS-1', '01. CS Core (Engenharia Base)', 'Sistemas binários, lógica e arquitetura.', '45h', 'Cpu', 1),
('ka-prog-fund', 1, 'PF-1', '02. Programming Fundamentals', 'Lógica de programação e sintaxe.', '80h', 'Code2', 2),
('ka-web-core', 1, 'WEB-1', '03. Web Core (HTML/CSS)', 'Estrutura e estilo da interface web.', '60h', 'Globe', 3),
('ka-git-vc', 1, 'GIT-1', '05. Git & Controlo Versão', 'Gestão de histórico e colaboração.', '15h', 'GitBranch', 4);

-- NÍVEL 2: ALGORITMOS
INSERT INTO public.acm_curriculum (id, level, ka_code, ka_name, description, required_hours, iconName, order_index) VALUES
('ka-algorithms', 2, 'ALG-2', '01. Algorithms', 'Eficiência, ordenação e busca.', '35h', 'Zap', 1),
('ka-data-struct', 2, 'DS-2', '02. Data Structures', 'Organização de memória e dados.', '40h', 'Database', 2);

-- NÍVEL 8: DOMÍNIO (LINGUAGENS)
INSERT INTO public.acm_curriculum (id, level, ka_code, ka_name, description, required_hours, iconName, order_index) VALUES
('lang-js-master', 8, 'JS-8', 'JavaScript Master', 'Especialização profunda em JS e Motores.', '50h', 'Zap', 1),
('lang-rust-master', 8, 'RS-8', 'Rust Master', 'Sistemas críticos e performance extrema.', '60h', 'Shield', 2),
('lang-python-master', 8, 'PY-8', 'Python Master', 'Engenharia de dados e produção.', '40h', 'Terminal', 3);

-- LIÇÕES EXEMPLO (NÍVEL 1)
INSERT INTO public.lessons (id, ka_id, title, content_mdx, youtube_video_id, order_index) VALUES
('cs-t1', 'ka-cs-core', 'Sistemas Numéricos: O Mundo Binário', '<p>O computador entende apenas 0 e 1.</p>', 'rXc_A7G43m0', 1),
('pf-t1', 'ka-prog-fund', 'Variáveis: As Caixas da Memória', '<p>Guardando dados com nomes amigáveis.</p>', '_B6K2G_Q4e4', 1);

-- LIÇÕES EXEMPLO (NÍVEL 8)
INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index) VALUES
('js-m1', 'lang-js-master', 'Fase 1: Prototypal Inheritance', '<p>Como o JS gere herança via protótipos.</p>', 1),
('rs-m1', 'lang-rust-master', 'Fase 1: Ownership e Borrowing', '<p>O sistema de segurança de memória do Rust.</p>', 1);

-- EXERCÍCIOS EXEMPLO
INSERT INTO public.exercises (id, ka_id, language, title, statement, template_code, test_cases) VALUES
('js-p1', 'lang-js-master', 'javascript', 'Laboratório: Prototype Chain', 'Aceda ao protótipo do objeto.', 'const obj = {};', '[{"test": "Object.getPrototypeOf"}]'),
('py-p1', 'ka-prog-fund', 'python', 'Lab: Variáveis Python', 'Crie a variável nome.', 'nome = ""', '[{"test": "nome ="}]');

-- QUIZZES EXEMPLO
INSERT INTO public.quizzes (id, ka_id, title, questions) VALUES
('quiz-cs-1', 'ka-cs-core', 'Validação Binária', '[{"question": "O que é um Bit?", "options": ["Binary Digit", "Big Text", "Basic Item"], "correctAnswer": 0}]');
