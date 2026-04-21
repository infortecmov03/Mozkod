
-- Supabase Curriculum Seeding Script - Codworks Moz
-- Este script popula as tabelas de currículo sem afetar os utilizadores existentes.

-- 1. Limpeza seletiva (Apenas tabelas de conteúdo, preservando usuários e progresso)
DELETE FROM public.quizzes;
DELETE FROM public.exercises;
DELETE FROM public.lessons;
DELETE FROM public.acm_curriculum;

-- 2. Inserir Knowledge Areas (KA) do Nível 1
INSERT INTO public.acm_curriculum (id, ka_code, ka_name, description, level, required_hours, icon_name) VALUES
('ka-cs-core', 'CS-Core', 'Computer Science Core', 'Sistemas binários, lógica booleana, representação de dados.', 1, 40, 'Cpu'),
('ka-programming', 'PF', 'Programming Fundamentals', 'Variáveis, tipos, estruturas de controle, funções, arrays.', 1, 80, 'Terminal'),
('ka-web', 'WEB-Core', 'Web Core', 'HTML5 semântico, CSS3 (Flexbox/Grid), padrões web.', 1, 60, 'Globe'),
('ka-tech-english', 'T-ENG', 'Technical English', 'Vocabulário, leitura de documentação, mensagens de erro.', 1, 30, 'Languages'),
('ka-git', 'GIT-VC', 'Git & Version Control', 'Comandos básicos, GitHub, controle de versão.', 1, 30, 'GitBranch'),
('ka-hci', 'HCI', 'Human-Computer Interaction', 'Usabilidade, acessibilidade, design centrado no usuário.', 1, 20, 'MousePointerClick'),
('ka-dev-tools', 'DEV-Tools', 'Ferramentas de Desenvolvimento', 'IDEs, editores de código, e o ambiente de desenvolvimento.', 1, 10, 'TerminalSquare');

-- 3. Inserir Lições (Lessons) para Nível 1
INSERT INTO public.lessons (id, ka_id, title, content_mdx, youtube_video_id, order_index) VALUES
('cs-t1', 'ka-cs-core', 'Sistemas Binários e de Numeração', '<h2>O que são Sistemas de Numeração?</h2> <p>Um sistema de numeração é um conjunto de regras e símbolos que nos permite representar números. O sistema que usamos no dia-a-dia é o <strong>decimal (base 10)</strong>, que usa dez dígitos (0-9).</p> <p>Os computadores, por outro lado, operam com o sistema <strong>binário (base 2)</strong>. Ele usa apenas dois dígitos: 0 e 1. Cada dígito binário é chamado de <strong>bit</strong>.</p> <h3>Por que binário?</h3> <p>Computadores usam transistores, que são como interruptores elétricos. Eles podem estar em um de dois estados: ligado (representado por 1) ou desligado (representado por 0). Esta é a razão fundamental pela qual os computadores funcionam em binário.</p>', '10_yY-sLzJo', 1),
('cs-t2', 'ka-cs-core', 'Lógica Booleana', '<h2>O que é Lógica Booleana?</h2> <p>A lógica booleana é a base da computação digital. Ela lida com valores verdadeiros (True) e falsos (False), frequentemente representados por 1 e 0.</p> <h3>Operadores Lógicos Fundamentais:</h3> <ul> <li><strong>AND (E):</strong> Retorna verdadeiro (1) somente se ambas as entradas forem verdadeiras.</li> <li><strong>OR (OU):</strong> Retorna verdadeiro (1) se pelo menos uma das entradas for verdadeira.</li> <li><strong>NOT (NÃO):</strong> Inverte o valor da entrada.</li> </ul>', 'gI-qXk7XojA', 2),
('cs-t3', 'ka-cs-core', 'Representação de Dados', '<h2>Como os computadores armazenam dados?</h2> <p>Tudo em um computador é armazenado como uma sequência de 0s e 1s. A forma como essa sequência é interpretada depende do tipo de dado (caracteres, imagens, sons).</p>', 'USr1-k_5s-E', 3),
('cs-t4', 'ka-cs-core', 'Arquitetura de Computadores (Von Neumann)', '<h2>Como um computador funciona?</h2> <p>A maioria dos computadores modernos segue a arquitetura de Von Neumann: CPU, Memória Principal, Dispositivos de E/S e Barramentos.</p>', 'Qqug2Uncy_A', 4),
('pf-t1', 'ka-programming', 'Variáveis e Tipos de Dados', '<h2>O que é uma Variável?</h2> <p>Pense em uma variável como uma caixa com uma etiqueta. Você pode guardar informações dentro dessa caixa e usar a etiqueta (o nome da variável) para se referir a ela mais tarde.</p>', '_B6K2G_Q4e4', 1),
('pf-t2', 'ka-programming', 'Estruturas de Controle (Condicionais)', '<h2>Tomando Decisões no Código</h2> <p>Estruturas de controle permitem que seu programa tome decisões e execute diferentes blocos de código com base em certas condições (if/else).</p>', 's-i64-W0_sA', 2),
('pf-t3', 'ka-programming', 'Estruturas de Controle (Loops)', '<h2>Repetindo Tarefas</h2> <p>Loops (for, while) são usados para executar o mesmo bloco de código várias vezes.</p>', 'n0p_cQc_i-A', 3),
('pf-t4', 'ka-programming', 'Funções e Métodos', '<h2>Blocos de Código Reutilizáveis</h2> <p>Funções ajudam a organizar o código, evitar repetição e torná-lo mais legível.</p>', 'o_wD-030D-Y', 4),
('pf-t5', 'ka-programming', 'Arrays e Coleções', '<h2>Organizando Múltiplos Dados</h2> <p>Arrays (ou listas) são estruturas de dados que armazenam uma coleção de itens em uma única variável.</p>', 'tVRbu1gJgo4', 5);

-- 4. Inserir Exercícios (Exercises) para Nível 1
INSERT INTO public.exercises (id, ka_id, language, title, statement, template_code, test_cases) VALUES
('js-vars', 'ka-programming', 'javascript', 'Exercício de Variáveis', 'Declare variáveis para nome, idade e cidade.', '// Escreva seu código abaixo', '[{"description": "A variável nome deve existir.", "code": "return typeof nome === ''string'';"}, {"description": "A variável idade deve existir.", "code": "return typeof idade === ''number'';"}]');

-- 5. Inserir Quizzes para Nível 1
INSERT INTO public.quizzes (id, ka_id, title, questions) VALUES
('quiz-pf-1', 'ka-programming', 'Quiz de Fundamentos 1', '[{"id": "q1", "question": "Qual tipo de dado é usado para armazenar texto?", "options": ["Integer", "Boolean", "String", "Float"], "correctAnswer": 2}, {"id": "q2", "question": "Qual símbolo é usado para atribuição?", "options": ["=", "==", ":=", "->"], "correctAnswer": 0}]');
