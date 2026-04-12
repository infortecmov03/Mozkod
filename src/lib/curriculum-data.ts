export type Lesson = {
  id: string;
  title: string;
  content: string;
};

export type KnowledgeArea = {
  id: string;
  title: string;
  description: string;
  load: string;
  iconName: string;
  lessons: Lesson[];
};

export type Level = {
  id: number;
  title: string;
  description: string;
  knowledgeAreas: KnowledgeArea[];
};

export const curriculumData: Level[] = [
    {
        id: 1,
        title: "Nível 1: Fundamentos (Core Foundations)",
        description: "Comece sua jornada aprendendo os conceitos fundamentais da programação e da computação.",
        knowledgeAreas: [
            { 
              id: "ka-cs-core", 
              title: "Computer Science Core", 
              description: "Sistemas binários, lógica booleana, representação de dados.", 
              load: "40h",
              iconName: "Cpu",
              lessons: [
                {
                    id: "l1-cs-1",
                    title: "Introdução aos Sistemas de Numeração",
                    content: `
                        <h2>O que são Sistemas de Numeração?</h2>
                        <p>Um sistema de numeração é um conjunto de regras e símbolos que nos permite representar números. O sistema que usamos no dia-a-dia é o <strong>decimal (base 10)</strong>, que usa dez dígitos (0-9).</p>
                        <p>Os computadores, por outro lado, operam com o sistema <strong>binário (base 2)</strong>. Ele usa apenas dois dígitos: 0 e 1.</p>
                        <h3>Por que os computadores usam binário?</h3>
                        <p>Os computadores são feitos de bilhões de pequenos interruptores chamados transistores. Um transistor pode estar em um de dois estados: ligado (representado por 1) ou desligado (representado por 0). Isso torna o sistema binário a linguagem natural dos computadores.</p>
                    `
                },
                {
                    id: "l1-cs-2",
                    title: "Lógica Booleana e Portas Lógicas",
                    content: `
                        <h2>O que é Lógica Booleana?</h2>
                        <p>A lógica booleana, desenvolvida por George Boole, é a base da computação digital. Ela lida com valores verdadeiros (True) e falsos (False), frequentemente representados por 1 e 0.</p>
                        <h3>Operadores Lógicos</h3>
                        <ul>
                            <li><strong>AND:</strong> Retorna verdadeiro apenas se AMBOS os operandos forem verdadeiros.</li>
                            <li><strong>OR:</strong> Retorna verdadeiro se PELO MENOS UM dos operandos for verdadeiro.</li>
                            <li><strong>NOT:</strong> Inverte o valor do operando (verdadeiro se torna falso, e vice-versa).</li>
                        </ul>
                        <p>Esses operadores são implementados em hardware através de <strong>portas lógicas</strong>, os blocos de construção fundamentais dos circuitos digitais.</p>
                    `
                }
              ]
            },
            { 
              id: "ka-programming", 
              title: "Programming Fundamentals", 
              description: "Variáveis, tipos, estruturas de controle, funções, arrays.", 
              load: "80h",
              iconName: "Terminal",
              lessons: [
                {
                    id: "l1-prog-1",
                    title: "Variáveis e Tipos de Dados",
                    content: `
                        <h2>O que é uma Variável?</h2>
                        <p>Pense em uma variável como uma caixa com uma etiqueta. Você pode guardar informações dentro dessa caixa e usar a etiqueta para se referir a ela mais tarde. Em programação, usamos variáveis para armazenar dados que podem mudar durante a execução de um programa.</p>
                        <h3>Tipos de Dados Comuns</h3>
                        <ul>
                            <li><strong>String:</strong> Texto (e.g., "Olá, Mozkod!").</li>
                            <li><strong>Number / Integer:</strong> Números (e.g., 42, 3.14).</li>
                            <li><strong>Boolean:</strong> Verdadeiro ou Falso (<code>true</code> ou <code>false</code>).</li>
                            <li><strong>Array:</strong> Uma lista de valores (e.g., [1, 2, 3, 4]).</li>
                        </ul>
                        <pre><code>// Exemplo em JavaScript
let nome = "Maria"; // String
let idade = 25; // Number
let estudante = true; // Boolean</code></pre>
                    `
                },
                {
                    id: "l1-prog-2",
                    title: "Estruturas de Controle (If/Else)",
                    content: `
                        <h2>Tomando Decisões no Código</h2>
                        <p>Estruturas de controle permitem que seu programa tome decisões e execute diferentes blocos de código com base em certas condições. A mais comum é a instrução <code>if/else</code>.</p>
                        <pre><code>// Exemplo em JavaScript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
                        </code></pre>
                        <p>Isso permite que o código se comporte de maneira diferente dependendo do valor da variável <code>idade</code>.</p>
                    `
                }
              ]
            },
            { 
              id: "ka-web", 
              title: "Web Core", 
              description: "HTML5 semântico, CSS3 (Flexbox/Grid), padrões web.", 
              load: "60h",
              iconName: "Globe",
              lessons: [
                 {
                    id: "l1-web-1",
                    title: "HTML: A Estrutura da Web",
                    content: `
                        <h2>O que é HTML?</h2>
                        <p>HTML (HyperText Markup Language) não é uma linguagem de programação, mas sim uma <strong>linguagem de marcação</strong>. Ela é usada para estruturar o conteúdo de uma página web.</p>
                        <h3>Tags Comuns</h3>
                        <ul>
                            <li><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> para títulos.</li>
                            <li><code>&lt;p&gt;</code> para parágrafos.</li>
                            <li><code>&lt;a&gt;</code> para links (âncoras).</li>
                            <li><code>&lt;img&gt;</code> para imagens.</li>
                            <li><code>&lt;div&gt;</code> para criar seções ou contêineres.</li>
                        </ul>
                        <p>Usar tags HTML semânticas (como <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>) ajuda na acessibilidade e no SEO (Search Engine Optimization).</p>
                    `
                },
                {
                    id: "l1-web-2",
                    title: "CSS: Estilizando a Web",
                    content: `
                        <h2>O que é CSS?</h2>
                        <p>CSS (Cascading Style Sheets) é a linguagem que usamos para descrever a apresentação de um documento HTML. Com CSS, você controla cores, fontes, espaçamento, layouts e muito mais.</p>
                        <h3>Layouts com Flexbox</h3>
                        <p>Flexbox é um modelo de layout que facilita a criação de designs responsivos e complexos. Ele permite que os itens dentro de um contêiner se ajustem e se alinhem de forma flexível.</p>
                        <pre><code>.container {
  display: flex;
  justify-content: space-between; /* Alinha os itens com espaço entre eles */
  align-items: center; /* Alinha verticalmente ao centro */
}</code></pre>
                    `
                }
              ]
            },
            { 
              id: "ka-tech-english", 
              title: "Technical English", 
              description: "Vocabulário de programação, leitura de documentação, mensagens de erro.", 
              load: "30h",
              iconName: "Languages",
              lessons: [
                 {
                    id: "l1-teng-1",
                    title: "Entendendo Mensagens de Erro Comuns",
                    content: `
                        <h2>Não tenha medo do vermelho!</h2>
                        <p>Mensagens de erro são suas amigas. Elas te dizem exatamente onde o problema está. Aprender a lê-las é uma habilidade crucial.</p>
                        <h3>Erros Comuns</h3>
                        <ul>
                            <li><strong>SyntaxError:</strong> Você escreveu algo que a linguagem não entende. Verifique por erros de digitação, parênteses ou chaves faltando.</li>
                            <li><strong>ReferenceError:</strong> Você tentou usar uma variável que não foi declarada.</li>
                            <li><strong>TypeError:</strong> Você tentou realizar uma operação em um tipo de dado incorreto (e.g., tentar usar um método de string em um número).</li>
                        </ul>
                    `
                }
              ]
            },
            { 
              id: "ka-git", 
              title: "Git & Version Control", 
              description: "Fundamentos de controle de versão, comandos básicos, GitHub.", 
              load: "30h",
              iconName: "GitBranch",
              lessons: [
                {
                    id: "l1-git-1",
                    title: "O que é Controle de Versão?",
                    content: `
                        <h2>Salvando seu progresso de forma inteligente</h2>
                        <p>O Controle de Versão é um sistema que registra as alterações em um arquivo ou conjunto de arquivos ao longo do tempo, para que você possa recuperar versões específicas mais tarde. É como um "salvar" superpoderoso.</p>
                        <h3>Por que usar?</h3>
                        <ul>
                            <li><strong>Histórico:</strong> Veja quem mudou o quê e quando.</li>
                            <li><strong>Colaboração:</strong> Permite que várias pessoas trabalhem no mesmo projeto sem sobrescrever o trabalho umas das outras.</li>
                            <li><strong>Segurança:</strong> Se você quebrar algo, pode facilmente voltar para uma versão anterior que funcionava.</li>
                        </ul>
                        <p><strong>Git</strong> é o sistema de controle de versão mais popular do mundo, e <strong>GitHub</strong> é uma plataforma para hospedar seus projetos Git.</p>
                    `
                }
              ]
            },
            { 
              id: "ka-hci", 
              title: "Human-Computer Interaction", 
              description: "Princípios de usabilidade, acessibilidade básica, design centrado no usuário.", 
              load: "20h",
              iconName: "MousePointerClick",
              lessons: [
                {
                    id: "l1-hci-1",
                    title: "Princípios de Usabilidade",
                    content: `
                        <h2>O que faz um design ser 'bom'?</h2>
                        <p>Usabilidade é sobre quão fácil é para um usuário usar uma interface para atingir um objetivo. Um design com boa usabilidade é intuitivo, eficiente e satisfatório.</p>
                        <h3>Heurísticas de Nielsen</h3>
                        <p>Jakob Nielsen desenvolveu 10 "heurísticas" (princípios gerais) para o design de interfaces. Alguns exemplos são:</p>
                        <ul>
                            <li><strong>Visibilidade do status do sistema:</strong> Mantenha o usuário informado sobre o que está acontecendo.</li>
                            <li><strong>Consistência e padrões:</strong> Não faça os usuários adivinharem se palavras ou ações diferentes significam a mesma coisa.</li>
                            <li><strong>Design minimalista:</strong> Interfaces não devem conter informações irrelevantes ou raramente necessárias.</li>
                        </ul>
                    `
                }
              ]
            },
        ]
    },
    {
        id: 2,
        title: "Nível 2: Algoritmos e Estruturas de Dados",
        description: "Organize e manipule dados de forma eficiente para resolver problemas complexos.",
        knowledgeAreas: [
            { id: "ka-algorithms", title: "Algorithms", description: "Análise de algoritmos, ordenação, busca, recursão, paradigmas.", load: "70h", iconName: "BrainCircuit", 
              lessons: [
                {
                    id: "l2-alg-1",
                    title: "Análise de Complexidade e Notação Big O",
                    content: `
                        <h2>Medindo a Eficiência de Algoritmos</h2>
                        <p>Nem todos os algoritmos são criados iguais. Alguns são mais rápidos e usam menos memória do que outros. A análise de complexidade nos ajuda a medir e comparar essa eficiência.</p>
                        <h3>Notação Big O</h3>
                        <p>A Notação Big O descreve o comportamento de um algoritmo à medida que a quantidade de dados de entrada aumenta. Ela nos dá uma ideia do pior cenário de desempenho.</p>
                        <ul>
                            <li><strong>O(1) - Constante:</strong> O tempo de execução não muda, não importa o tamanho da entrada.</li>
                            <li><strong>O(log n) - Logarítmico:</strong> O tempo de execução cresce muito lentamente.</li>
                            <li><strong>O(n) - Linear:</strong> O tempo de execução cresce proporcionalmente ao tamanho da entrada.</li>
                            <li><strong>O(n²) - Quadrático:</strong> O tempo de execução cresce exponencialmente. Geralmente, deve ser evitado para grandes conjuntos de dados.</li>
                        </ul>
                    `
                }
            ] },
            { id: "ka-data-structures", title: "Data Structures", description: "Arrays, listas ligadas, pilhas, filas, árvores, grafos, hash tables.", load: "70h", iconName: "Database", 
              lessons: [
                {
                    id: "l2-ds-1",
                    title: "Arrays vs. Listas Ligadas",
                    content: `
                        <h2>Organizando coleções de dados</h2>
                        <p>Arrays e Listas Ligadas são duas das estruturas de dados mais fundamentais para armazenar coleções de itens.</p>
                        <h3>Arrays</h3>
                        <ul>
                            <li>Armazenam elementos em blocos contíguos de memória.</li>
                            <li><strong>Vantagem:</strong> Acesso rápido a qualquer elemento pelo seu índice (O(1)).</li>
                            <li><strong>Desvantagem:</strong> Tamanho fixo (na maioria das linguagens) e inserções/remoções no meio podem ser lentas (O(n)).</li>
                        </ul>
                        <h3>Listas Ligadas (Linked Lists)</h3>
                        <ul>
                            <li>Os elementos (nós) podem estar em qualquer lugar na memória. Cada nó contém o dado e um ponteiro (referência) para o próximo nó.</li>
                            <li><strong>Vantagem:</strong> Inserções e remoções são rápidas (O(1)) se você já tiver uma referência ao nó.</li>
                            <li><strong>Desvantagem:</strong> O acesso a um elemento requer percorrer a lista desde o início (O(n)).</li>
                        </ul>
                    `
                }
            ] },
            { id: "ka-discrete-math", title: "Discrete Mathematics", description: "Conjuntos, relações, funções, lógica, combinatória, probabilidade.", load: "40h", iconName: "Sigma", lessons: [] },
            { id: "ka-pl-advanced", title: "Programming Languages Advanced", description: "Programação funcional, orientação a objetos, genéricos, exceções.", load: "40h", iconName: "Code2", 
              lessons: [
                {
                    id: "l2-pla-1",
                    title: "Programação Orientada a Objetos (POO)",
                    content: `
                        <h2>Modelando o Mundo Real</h2>
                        <p>A Programação Orientada a Objetos é um paradigma que organiza o software em torno de "objetos" - instâncias de classes que agrupam dados (atributos) e comportamentos (métodos).</p>
                        <h3>Pilares da POO</h3>
                        <ul>
                            <li><strong>Encapsulamento:</strong> Ocultar o estado interno de um objeto e expor apenas as operações necessárias.</li>
                            <li><strong>Herança:</strong> Permitir que uma nova classe (filha) herde atributos e métodos de uma classe existente (pai).</li>
                            <li><strong>Polimorfismo:</strong> A capacidade de objetos de diferentes classes responderem à mesma mensagem (chamada de método) de maneiras específicas.</li>
                            <li><strong>Abstração:</strong> Focar nos aspectos essenciais de um objeto, ignorando detalhes irrelevantes.</li>
                        </ul>
                    `
                }
            ] },
        ]
    },
    {
        id: 3,
        title: "Nível 3: Sistemas e Infraestrutura",
        description: "Entenda como os sistemas de software funcionam em um nível mais profundo.",
        knowledgeAreas: [
            { id: "ka-os", title: "Operating Systems", description: "Processos, threads, gerenciamento de memória, sistemas de arquivos, concorrência.", load: "50h", iconName: "HardDrive", lessons: [] },
            { id: "ka-networking", title: "Networking & Communications", description: "Modelo OSI, TCP/IP, HTTP/HTTPS, DNS, roteamento, segurança básica.", load: "50h", iconName: "Network", lessons: [] },
            { id: "ka-databases", title: "Database Systems", description: "Modelo relacional, SQL, design de banco de dados, normalização, índices.", load: "60h", iconName: "Database", lessons: [] },
            { id: "ka-security", title: "Information Assurance & Security", description: "Princípios de segurança, criptografia básica, segurança web.", load: "30h", iconName: "ShieldCheck", lessons: [] },
        ]
    },
     {
        id: 4,
        title: "Nível 4: Engenharia de Software",
        description: "Aprenda a projetar, construir e manter software de alta qualidade em equipe.",
        knowledgeAreas: [
            { id: "ka-se", title: "Software Engineering", description: "Ciclo de vida, metodologias ágeis, Scrum, Kanban, estimativas.", load: "40h", iconName: "Construction", lessons: [] },
            { id: "ka-design", title: "Software Design", description: "Padrões de design, princípios SOLID, arquitetura de software, UML, refatoração.", load: "60h", iconName: "Architecture", lessons: [] },
            { id: "ka-testing", title: "Quality Assurance & Testing", description: "Testes unitários, integração, TDD, mocking, CI/CD.", load: "40h", iconName: "ClipboardCheck", lessons: [] },
            { id: "ka-requirements", title: "Requirements Engineering", description: "Levantamento de requisitos, histórias de usuário, casos de uso.", load: "20h", iconName: "ListChecks", lessons: [] },
        ]
    },
    {
        id: 5,
        title: "Nível 5: Especializações",
        description: "Aprofunde-se em áreas de alta demanda no mercado de tecnologia. (Escolha 2-3)",
        knowledgeAreas: [
            { id: "ka-web-advanced", title: "Advanced Web Development", description: "React/Next.js, Node.js, APIs RESTful, GraphQL, WebSockets.", load: "80h", iconName: "Rocket", lessons: [] },
            { id: "ka-mobile", title: "Mobile Development", description: "React Native, Flutter, desenvolvimento nativo (iOS/Android).", load: "60h", iconName: "Smartphone", lessons: [] },
            { id: "ka-ai-ml", title: "Artificial Intelligence & ML", description: "Fundamentos de ML, aprendizagem supervisionada, redes neurais, deep learning.", load: "60h", iconName: "Brain", lessons: [] },
            { id: "ka-cloud", title: "Cloud Computing", description: "AWS/Azure/GCP, containers (Docker), Kubernetes, serverless.", load: "50h", iconName: "Cloud", lessons: [] },
            { id: "ka-cybersecurity", title: "Cybersecurity", description: "Segurança de redes, segurança web, ethical hacking, forense digital.", load: "50h", iconName: "ShieldAlert", lessons: [] },
            { id: "ka-data-science", title: "Data Science & Analytics", description: "Análise de dados, visualização, Big Data, ETL.", load: "40h", iconName: "BarChart", lessons: [] },
            { id: "ka-blockchain", title: "Blockchain & Web3", description: "Fundamentos blockchain, smart contracts, DeFi, dApps.", load: "40h", iconName: "Link", lessons: [] },
            { id: "ka-game-dev", title: "Game Development", description: "Unity, Unreal Engine, design de jogos, física de jogos.", load: "40h", iconName: "Gamepad2", lessons: [] },
            { id: "ka-iot", title: "Internet of Things", description: "Sensores, microcontroladores, protocolos IoT, edge computing.", load: "30h", iconName: "Router", lessons: [] },
        ]
    },
    {
        id: 6,
        title: "Nível 6: Desenvolvimento Profissional",
        description: "Desenvolva as habilidades interpessoais e de carreira para se destacar.",
        knowledgeAreas: [
            { id: "ka-career", title: "Career Skills", description: "Currículo, portfólio, entrevistas técnicas, networking, freelancing.", load: "30h", iconName: "Briefcase", lessons: [] },
            { id: "ka-soft-skills", title: "Soft Skills", description: "Comunicação, trabalho em equipe, resolução de problemas, liderança.", load: "30h", iconName: "Users", lessons: [] },
            { id: "ka-ethics", title: "Ethics & Professionalism", description: "Ética em computação, propriedade intelectual, privacidade, sustentabilidade.", load: "20h", iconName: "Scale", lessons: [] },
            { id: "ka-entrepreneurship", title: "Entrepreneurship", description: "Modelos de negócio, startups, pitch, captação de recursos.", load: "20h", iconName: "Lightbulb", lessons: [] },
            { id: "ka-advanced-git", title: "Advanced Git & Collaboration", description: "Git avançado, code reviews, open source contribution, monorepos.", load: "20h", iconName: "GitMerge", lessons: [] },
        ]
    },
    {
        id: 7,
        title: "Nível 7: Certificações Full Stack (freeCodeCamp)",
        description: "Valide suas habilidades com projetos práticos e certificações reconhecidas.",
        knowledgeAreas: [
             { 
                 id: "fcc-responsive-web", 
                 title: "Responsive Web Design", 
                 description: "5 projetos para dominar HTML e CSS responsivo.", 
                 load: "50h",
                 iconName: "MonitorSmartphone", 
                 lessons: [
                    {
                        id: 'l7-fcc-rwd-1',
                        title: 'Projeto 1: Página de Tributo',
                        content: `
                            <h2>Objetivo do Projeto</h2>
                            <p>Construir uma página web simples para homenagear uma pessoa ou assunto de sua escolha. Este projeto focará no uso correto de HTML semântico e CSS para estilização básica.</p>
                            <h3>Requisitos</h3>
                            <ul>
                                <li>Criar um elemento <code>main</code> com um <code>id</code> de <code>main</code>.</li>
                                <li>Criar um elemento <code>h1</code> ou <code>h2</code> com um <code>id</code> de <code>title</code> contendo o nome da homenagem.</li>
                                <li>Criar um <code>div</code> com um <code>id</code> de <code>img-div</code>.</li>
                                <li>Dentro do <code>img-div</code>, colocar um <code>img</code> com um <code>id</code> de <code>image</code>.</li>
                                <li>... e mais.</li>
                            </ul>
                            <p>Este projeto irá solidificar seus conhecimentos fundamentais de HTML e CSS.</p>
                        `
                    }
                 ]
             },
             {
                 id: "fcc-javascript-algorithms",
                 title: "JavaScript Algorithms and Data Structures",
                 description: "5 projetos para solidificar sua lógica com JavaScript.",
                 load: "50h",
                 iconName: "Code",
                 lessons: [
                    {
                        id: 'l7-fcc-js-1',
                        title: 'Projeto 1: Verificador de Palíndromos',
                        content: `
                            <h2>O que é um Palíndromo?</h2>
                            <p>Um palíndromo é uma palavra, frase, número ou outra sequência de caracteres que se lê da mesma forma para a frente e para trás (ignorando pontuação, capitalização e espaçamento).</p>
                            <h3>Objetivo do Projeto</h3>
                            <p>Escrever uma função em JavaScript que recebe uma string e retorna <code>true</code> se a string for um palíndromo e <code>false</code> caso contrário.</p>
                            <pre><code>function palindrome(str) {
  // Seu código aqui
  return true;
}

palindrome("eye");</code></pre>
                            <p>Este projeto testará suas habilidades com manipulação de strings, loops e lógica condicional.</p>
                        `
                    }
                 ]
             },
             {
                 id: "fcc-frontend-libraries",
                 title: "Front End Development Libraries",
                 description: "5 projetos com bibliotecas populares como React e Redux.",
                 load: "50h",
                 iconName: "Library",
                 lessons: []
             },
             {
                 id: "fcc-data-viz",
                 title: "Data Visualization",
                 description: "5 projetos para visualizar dados com D3.js.",
                 load: "40h",
                 iconName: "AreaChart",
                 lessons: []
             },
             {
                 id: "fcc-relational-db",
                 title: "Relational Database",
                 description: "5 projetos para aprender a gerenciar bancos de dados com SQL.",
                 load: "40h",
                 iconName: "Database",
                 lessons: []
             },
             {
                 id: "fcc-backend-apis",
                 title: "Back End Development and APIs",
                 description: "5 projetos para construir APIs e microserviços.",
                 load: "50h",
                 iconName: "Server",
                 lessons: []
             },
             {
                 id: "fcc-quality-assurance",
                 title: "Quality Assurance",
                 description: "5 projetos para garantir a qualidade do seu código.",
                 load: "40h",
                 iconName: "TestTube",
                 lessons: []
             },
             {
                 id: "fcc-capstone",
                 title: "Capstone Project",
                 description: "Projeto final integrador para demonstrar todas as suas habilidades.",
                 load: "80h",
                 iconName: "GraduationCap",
                 lessons: []
             }
        ]
    }
];
