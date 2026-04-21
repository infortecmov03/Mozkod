
-- Supabase Curriculum Seeding Script - FULL (Levels 1-7)
-- Execute este script no seu editor de SQL do Supabase.

-- Limpa as tabelas existentes de currículo para evitar duplicatas
TRUNCATE TABLE public.quizzes, public.exercises, public.lessons, public.acm_curriculum RESTART IDENTITY;

-- ==========================================
-- NÍVEL 1: FUNDAMENTOS
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-cs-core', 'CS-Core', 'Computer Science Core', 'Binário, lógica booleana e hardware.', 1, 45, 'Cpu'),
('ka-programming-1', 'PF-1', 'Programming Fundamentals', 'Lógica, variáveis e controle de fluxo.', 1, 80, 'Terminal'),
('ka-web-core', 'WEB-Core', 'Web Core', 'HTML5 semântico e CSS3 moderno.', 1, 60, 'Globe'),
('ka-git-vc', 'GIT-VC', 'Git & Version Control', 'Controlo de versão e colaboração.', 1, 30, 'GitBranch');

INSERT INTO public.lessons (id, ka_id, title, content_mdx, youtube_video_id, order_index) VALUES
('cs-t1', 'ka-cs-core', 'Sistemas Binários', '<h2>O Mundo dos Bits</h2><p>Computadores operam em base 2...</p>', 'rXc_A7G43m0', 1),
('pf1-t1', 'ka-programming-1', 'Variáveis e Memória', '<h2>Guardando Dados</h2><p>Variáveis são contentores...</p>', '_B6K2G_Q4e4', 1);

-- ==========================================
-- NÍVEL 2: ALGORITMOS E ESTRUTURAS
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-algorithms', 'ALG', 'Algorithms', 'Resolução de problemas e complexidade Big O.', 2, 40, 'Zap'),
('ka-data-structures', 'DS', 'Data Structures', 'Listas, Pilhas, Filas e Árvores.', 2, 45, 'Database'),
('ka-discrete-math', 'MATH', 'Discrete Mathematics', 'Lógica matemática e grafos.', 2, 40, 'Calculator');

INSERT INTO public.lessons (id, ka_id, title, content_mdx, youtube_video_id, order_index) VALUES
('alg-t1', 'ka-algorithms', 'Notação Big O', '<h2>Análise de Eficiência</h2><p>Como medir a velocidade do código...</p>', 'v4cd1O4zkGw', 1),
('ds-t1', 'ka-data-structures', 'Listas Ligadas', '<h2>Nós e Ponteiros</h2><p>Organização dinâmica de memória...</p>', 'njTh_NvM1Mw', 1);

-- ==========================================
-- NÍVEL 3: SISTEMAS E INFRAESTRUTURA
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-os-internals', 'OS', 'Operating Systems', 'Kernels, Processos e Memória Virtual.', 3, 50, 'Cpu'),
('ka-networking-adv', 'NET', 'Networking', 'Protocolos TCP/IP e Segurança de Rede.', 3, 40, 'Globe'),
('ka-db-engine', 'DB-Eng', 'Database Engines', 'SQL avançado e transações ACID.', 3, 45, 'Database');

-- ==========================================
-- NÍVEL 4: ENGENHARIA DE SOFTWARE
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-software-processes', 'SE-PROC', 'Software Processes', 'Agile, Scrum e SDLC.', 4, 30, 'Settings'),
('ka-software-design', 'SE-DES', 'Design & Architecture', 'SOLID, Design Patterns e Clean Arch.', 4, 50, 'Layout'),
('ka-software-quality', 'SE-QUAL', 'Software Quality', 'QA, Testes e CI/CD.', 4, 40, 'ShieldCheck');

-- ==========================================
-- NÍVEL 5: ESPECIALIZAÇÕES
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-web-engineering', 'WEB-ENG', 'Web Engineering', 'Next.js e Performance de Elite.', 5, 60, 'Zap'),
('ka-ai-ds', 'AI-DS', 'AI & Data Science', 'Machine Learning e Redes Neuronais.', 5, 70, 'Brain'),
('ka-cloud-sec', 'CLOUD-SEC', 'Cloud & Cybersecurity', 'DevSecOps e Kubernetes.', 5, 60, 'Lock');

-- ==========================================
-- NÍVEL 6: CARREIRA
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-career-dev', 'CAREER', 'Career Development', 'LinkedIn, Currículo e Entrevistas Globais.', 6, 30, 'Briefcase');

-- ==========================================
-- NÍVEL 7: CAPSTONE
-- ==========================================

INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName) VALUES
('ka-capstone-project', 'CAPSTONE', 'Capstone Project', 'Desenvolvimento do projeto final de graduação.', 7, 100, 'Trophy');

-- ==========================================
-- QUIZZES E EXERCÍCIOS DE EXEMPLO (N2-N7)
-- ==========================================

INSERT INTO public.quizzes (id, ka_id, title, questions) VALUES
('quiz-alg-1', 'ka-algorithms', 'Quiz: Complexidade Big O', '[{"id": "q1", "question": "O(n) representa qual tipo de crescimento?", "options": ["Constante", "Linear", "Quadrático"], "correctAnswer": 1}]'),
('quiz-se-1', 'ka-software-processes', 'Quiz: Metodologias Ágeis', '[{"id": "q1", "question": "Quem facilita as reuniões no Scrum?", "options": ["Product Owner", "Scrum Master", "CEO"], "correctAnswer": 1}]');

INSERT INTO public.exercises (id, ka_id, language, title, statement, template_code, test_cases) VALUES
('alg-binary-search', 'ka-algorithms', 'javascript', 'Busca Binária', 'Implemente a busca binária num array ordenado.', 'function search(arr, target) { \n  // Escreva aqui \n}', '[{"description": "Deve retornar o índice correto", "code": "return search([1,2,3], 2) === 1"}]');

-- NOTA: O Nível 8 (Linguagens) é gerido via código no sistema de fases, 
-- mas a estrutura base 1-7 agora reside no banco de dados.
