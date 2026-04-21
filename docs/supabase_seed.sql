-- Supabase Curriculum Seeding Script (Full Levels 1-8)
-- Execute este script no seu editor de SQL do Supabase para popular o currículo completo.

-- 1. Limpeza de Segurança (Mantém utilizadores e perfis)
TRUNCATE TABLE public.quizzes, public.exercises, public.lessons, public.acm_curriculum RESTART IDENTITY CASCADE;

-- 2. NÍVEL 1: FUNDAMENTOS
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, "iconName") VALUES
('ka-cs-core', 'CS-101', 'CS Core (Engenharia Base)', 'Sistemas binários, lógica booleana e arquitetura de CPU.', 1, 45, 'Cpu'),
('ka-prog-fund', 'PF-101', 'Programming Fundamentals', 'Lógica universal, variáveis, fluxos e estruturas de dados básicas.', 1, 80, 'Terminal'),
('ka-web-core', 'WEB-101', 'Web Core (HTML/CSS)', 'Estrutura semântica e estilização moderna.', 1, 60, 'Globe'),
('ka-tech-eng', 'ENG-101', 'Technical English', 'Vocabulário técnico para o mercado global.', 1, 30, 'Languages'),
('ka-git-vc', 'GIT-101', 'Git & Version Control', 'Gestão de histórico e colaboração profissional.', 1, 30, 'GitBranch'),
('ka-hci', 'HCI-101', 'Human-Computer Interaction', 'Usabilidade e design centrado no utilizador.', 1, 20, 'MousePointerClick'),
('ka-dev-tools', 'DT-101', 'Dev Tools', 'Produtividade com VS Code e Terminal.', 1, 15, 'Wrench');

-- 3. NÍVEL 2: ALGORITMOS E ESTRUTURAS
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, "iconName") VALUES
('ka-algorithms', 'ALG-201', 'Algorithms', 'Busca, ordenação e análise de complexidade (Big O).', 2, 35, 'Zap'),
('ka-data-struct', 'DS-201', 'Data Structures', 'Listas ligadas, pilhas, filas e tabelas hash.', 2, 40, 'Database'),
('ka-discrete-math', 'MATH-201', 'Discrete Mathematics', 'Lógica proposicional, conjuntos e grafos.', 2, 45, 'Calculator');

-- 4. NÍVEL 3: SISTEMAS E INFRAESTRUTURA
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, "iconName") VALUES
('ka-os', 'OS-301', 'Operating Systems', 'Kernels, gestão de processos e memória.', 3, 45, 'Cpu'),
('ka-networking', 'NET-301', 'Networking', 'Protocolos TCP/IP, roteamento e segurança de rede.', 3, 40, 'Globe'),
('ka-db-systems', 'DB-301', 'Databases', 'SQL avançado, transações ACID e NoSQL.', 3, 45, 'Database');

-- 5. NÍVEL 4: ENGENHARIA DE SOFTWARE
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, "iconName") VALUES
('ka-se-processes', 'SE-401', 'Software Processes', 'SDLC, Scrum e metodologias ágeis.', 4, 30, 'Settings'),
('ka-se-design', 'SE-402', 'Design & Architecture', 'SOLID, Design Patterns e Clean Architecture.', 4, 45, 'Layout'),
('ka-se-quality', 'SE-403', 'Software Quality', 'QA, Testes Automatizados e CI/CD.', 4, 35, 'ShieldCheck'),
('ka-integ-proj', 'PROJ-401', 'Projetos Integrativos', 'Construção de módulos fullstack reais.', 4, 40, 'Blocks');

-- 6. NÍVEL 5: ESPECIALIZAÇÕES
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, "iconName") VALUES
('ka-web-eng', 'W-ENG-501', 'Web Engineering', 'Next.js, Server Components e Performance.', 5, 50, 'Zap'),
('ka-ai-ds', 'AI-501', 'AI & Data Science', 'Deep Learning e Modelos de Linguagem (LLM).', 5, 60, 'Brain'),
('ka-cloud-sec', 'SEC-501', 'Cloud & Cybersecurity', 'Segurança, Kubernetes e Cloud Native.', 5, 50, 'Lock');

-- 7. NÍVEL 6 E 7: CARREIRA E GRADUAÇÃO
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, "iconName") VALUES
('ka-career', 'CAREER-601', 'Career Development', 'Portfólio, LinkedIn e Entrevistas Globais.', 6, 30, 'Briefcase'),
('ka-capstone', 'CAP-701', 'Capstone Project', 'Projeto de Graduação Final.', 7, 100, 'Trophy');

-- 8. NÍVEL 8: DOMÍNIO DE LINGUAGENS (MASTERY)
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, "iconName") VALUES
('lang-html', 'M-HTML', 'HTML Master', 'Arquitetura de documentos e acessibilidade global.', 8, 30, 'Code'),
('lang-css', 'M-CSS', 'CSS Master', 'Design Systems e performance visual.', 8, 40, 'Palette'),
('lang-js', 'M-JS', 'JavaScript Master', 'Motores JS, Metaprogramação e APIs de Browser.', 8, 50, 'Zap'),
('lang-python', 'M-PY', 'Python Master', 'AsyncIO, Data Science e Automação.', 8, 50, 'Code2'),
('lang-java', 'M-JV', 'Java Master', 'Enterprise, JVM Tuning e Spring Boot.', 8, 60, 'Coffee'),
('lang-kotlin', 'M-KT', 'Kotlin Master', 'Android, Coroutines e KMP.', 8, 45, 'Smartphone'),
('lang-go', 'M-GO', 'Go Master', 'Sistemas Distribuídos e Cloud Native.', 8, 40, 'Cloud'),
('lang-rust', 'M-RS', 'Rust Master', 'Segurança de Memória e Performance de Sistema.', 8, 60, 'Shield'),
('lang-ruby', 'M-RB', 'Ruby Master', 'Metaprogramação e Rails de Elite.', 8, 35, 'Gem'),
('lang-php', 'M-PHP', 'PHP Master', 'PHP 8 Moderno e Arquitetura Web.', 8, 40, 'Globe');

-- 9. INSERÇÃO DE LIÇÕES DE AMOSTRA (LEVEL 1)
INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index) VALUES
('cs-t1', 'ka-cs-core', 'Sistemas Binários e de Numeração', '<h2>O mundo em 0 e 1</h2><p>Entenda como transístores criam a lógica computacional.</p>', 1),
('pf-t1', 'ka-prog-fund', 'Variáveis e Memória', '<h2>Guardando Dados</h2><p>Variáveis como caixas nomeadas na RAM.</p>', 1),
('web-t1', 'ka-web-core', 'HTML5 Semântico', '<h2>Significado na Web</h2><p>Dando contexto ao conteúdo para Google e Acessibilidade.</p>', 1);

-- 10. INSERÇÃO DE LIÇÕES DE AMOSTRA (LEVEL 8)
INSERT INTO public.lessons (id, ka_id, title, content_mdx, order_index) VALUES
('html-m1', 'lang-html', 'Fase 1: Arquitetura de Documentos Master', '<h2>Estrutura de Elite</h2><p>O impacto do DOCTYPE e a árvore DOM real.</p>', 1),
('js-m1', 'lang-js', 'Fase 1: Motores JS e Event Loop', '<h2>V8 e Concorrência</h2><p>Como o JavaScript lida com milhares de eventos numa única thread.</p>', 1),
('rs-m1', 'lang-rust', 'Fase 1: Ownership e Posse de Memória', '<h2>Memória Segura</h2><p>Eliminando o Garbage Collector com regras de posse estritas.</p>', 1);

-- 11. INSERÇÃO DE EXERCÍCIOS DE AMOSTRA
INSERT INTO public.exercises (id, ka_id, lesson_id, language, title, statement, template_code, test_cases) VALUES
('ex-js-1', 'ka-prog-fund', 'pf-t1', 'javascript', 'Declaração de Variáveis', 'Crie uma constante PI com valor 3.14.', 'const PI = ', '[{"test": "PI === 3.14"}]'),
('ex-html-m1', 'lang-html', 'html-m1', 'html', 'Estrutura Base', 'Crie um documento HTML5 válido.', '<!DOCTYPE html>\n<html>\n</html>', '[{"test": "DOCTYPE"}]');

-- 12. INSERÇÃO DE QUIZZES DE AMOSTRA
INSERT INTO public.quizzes (id, ka_id, title, questions) VALUES
('q-cs-1', 'ka-cs-core', 'Quiz de Sistemas Numéricos', '[{"question": "Quantos bits tem um Byte?", "options": ["4", "8", "16", "32"], "correctAnswer": 1}]'),
('q-js-m1', 'lang-js', 'Quiz de Arquitetura JS', '[{"question": "Quem executa as microtasks?", "options": ["O SO", "O Event Loop", "O Disco", "A Placa Gráfica"], "correctAnswer": 1}]');

COMMIT;
