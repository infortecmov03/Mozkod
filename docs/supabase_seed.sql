
-- Supabase Curriculum Seeding Script (Final Production Version)

-- Limpa as tabelas existentes para evitar duplicatas
TRUNCATE TABLE public.quizzes, public.exercises, public.lessons, public.acm_curriculum RESTART IDENTITY;

-- NÍVEL 1 --

-- Inserir Knowledge Areas (KA) do Nível 1
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, iconName, order_index) VALUES
('ka-cs-core', 'CS-Core', 'Computer Science Core', 'Sistemas binários, lógica booleana, representação de dados.', 1, 40, 'Cpu', 1),
('ka-programming', 'PF', 'Programming Fundamentals', 'Variáveis, tipos, estruturas de controle, funções, arrays.', 1, 80, 'Terminal', 2),
('ka-web', 'WEB-Core', 'Web Core', 'HTML5 semântico, CSS3 (Flexbox/Grid), padrões web.', 1, 60, 'Globe', 3),
('ka-tech-english', 'T-ENG', 'Technical English', 'Vocabulário, leitura de documentação, mensagens de erro.', 1, 30, 'Languages', 4),
('ka-git', 'GIT-VC', 'Git & Version Control', 'Comandos básicos, GitHub, controle de versão.', 1, 30, 'GitBranch', 5),
('ka-hci', 'HCI', 'Human-Computer Interaction', 'Usabilidade, acessibilidade, design centrado no usuário.', 1, 20, 'MousePointerClick', 6),
('ka-dev-tools', 'DEV-Tools', 'Ferramentas de Desenvolvimento', 'IDEs, editores de código, e o ambiente de desenvolvimento.', 1, 10, 'SquareTerminal', 7);

-- Inserir Lições (Lessons) para Nível 1
INSERT INTO public.lessons (id, ka_id, title, content_mdx, youtube_video_id, order_index) VALUES
('cs-t1', 'ka-cs-core', 'Sistemas Binários e de Numeração', '<h2>O que são Sistemas de Numeração?</h2> <p>Um sistema de numeração é um conjunto de regras e símbolos que nos permite representar números. O sistema que usamos no dia-a-dia é o <strong>decimal (base 10)</strong>, que usa dez dígitos (0-9).</p> <p>Os computadores, por outro lado, operam com o sistema <strong>binário (base 2)</strong>. Ele usa apenas dois dígitos: 0 e 1. Cada dígito binário é chamado de <strong>bit</strong>.</p> <h3>Por que binário?</h3> <p>Computadores usam transistores, que são como interruptores elétricos. Eles podem estar em um de dois estados: ligado (representado por 1) ou desligado (representado por 0). Esta é a razão fundamental pela qual os computadores funcionam em binário.</p>', '10_yY-sLzJo', 1),
('cs-t2', 'ka-cs-core', 'Lógica Booleana', '<h2>O que é Lógica Booleana?</h2> <p>A lógica booleana é a base da computação digital. Ela lida com valores verdadeiros (True) e falsos (False), representados por 1 e 0.</p> <h3>Operadores Fundamentais:</h3> <ul> <li><strong>AND:</strong> Verdadeiro somente se ambos forem 1.</li> <li><strong>OR:</strong> Verdadeiro se pelo menos um for 1.</li> <li><strong>NOT:</strong> Inverte o valor.</li> </ul>', 'gI-qXk7XojA', 2),
('pf-t1', 'ka-programming', 'Variáveis e Tipos de Dados', '<h2>O que é uma Variável?</h2> <p>Pense em uma variável como uma caixa com uma etiqueta. Você pode guardar informações dentro dessa caixa e usar a etiqueta (o nome da variável) para se referir a ela mais tarde.</p>', '_B6K2G_Q4e4', 1);

-- Inserir Exercícios (Exercises) para Nível 1
INSERT INTO public.exercises (id, ka_id, language, title, statement, template_code, test_cases) VALUES
('js-vars', 'ka-programming', 'javascript', 'Exercício de Variáveis', 'Declare variáveis para nome, idade e cidade.', '// Escreva seu código abaixo', '[{"description": "Variável nome deve ser string", "code": "return typeof nome === ''string'';"}]');

-- Inserir Quizzes para Nível 1
INSERT INTO public.quizzes (id, ka_id, title, questions, passing_score) VALUES
('quiz-pf-1', 'ka-programming', 'Quiz de Fundamentos 1', '[{"id": "q1", "question": "Qual tipo de dado é usado para armazenar texto?", "options": ["Integer", "Boolean", "String", "Float"], "correctAnswer": 2}]', 70);
