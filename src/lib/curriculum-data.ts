export type TheoryLesson = {
  id: string;
  title: string;
  content: string;
};

export type PracticeExercise = {
  id: string;
  title: string;
  statement: string;
  template: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type Quiz = {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export type KnowledgeArea = {
  id: string;
  title: string;
  description: string;
  load: string;
  iconName: string;
  theory: TheoryLesson[];
  practice: {
    [key: string]: PracticeExercise[];
  };
  quizzes: Quiz[];
};

export type Level = {
  id: number;
  title: string;
  description: string;
  knowledgeAreas: KnowledgeArea[];
};

export const curriculumData: Level[] = [
  // NÍVEL 1
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
        theory: [
          {
            id: "cs-t1",
            title: "Sistemas Binários",
            content: "<h2>O que são Sistemas de Numeração?</h2><p>Um sistema de numeração é um conjunto de regras e símbolos que nos permite representar números. O sistema que usamos no dia-a-dia é o <strong>decimal (base 10)</strong>, que usa dez dígitos (0-9).</p><p>Os computadores, por outro lado, operam com o sistema <strong>binário (base 2)</strong>. Ele usa apenas dois dígitos: 0 e 1.</p>"
          },
          {
            id: "cs-t2",
            title: "Lógica Booleana",
            content: "<h2>O que é Lógica Booleana?</h2><p>A lógica booleana, desenvolvida por George Boole, é a base da computação digital. Ela lida com valores verdadeiros (True) e falsos (False), frequentemente representados por 1 e 0.</p>"
          }
        ],
        practice: {
          python: [
            { id: "cs-p1-py", title: "Conversor Binário", statement: "Escreva uma função que converte um número decimal para binário.", template: "def decimal_para_binario(n):\n  # Seu código aqui\n  pass" }
          ],
          javascript: [
            { id: "cs-p1-js", title: "Conversor Binário", statement: "Escreva uma função que converte um número decimal para binário.", template: "function decimalToBinary(n) {\n  // Seu código aqui\n}" }
          ]
        },
        quizzes: [
          { id: "cs-q1", title: "Quiz Final de CS Core", questions: [{id: "q1", question: "Quantos dígitos tem o sistema binário?", options: ["10", "2", "16", "8"], correctAnswer: 1}] }
        ]
      },
      {
        id: "ka-programming",
        title: "Programming Fundamentals",
        description: "Variáveis, tipos, estruturas de controle, funções, arrays.",
        load: "80h",
        iconName: "Terminal",
        theory: [
          {
            id: "pf-t1",
            title: "Variáveis e Tipos de Dados",
            content: "<h2>O que é uma Variável?</h2><p>Pense em uma variável como uma caixa com uma etiqueta. Você pode guardar informações dentro dessa caixa e usar a etiqueta para se referir a ela mais tarde.</p>"
          },
          {
            id: "pf-t2",
            title: "Estruturas de Controle",
            content: "<h2>Tomando Decisões no Código</h2><p>Estruturas de controle permitem que seu programa tome decisões e execute diferentes blocos de código com base em certas condições. A mais comum é a instrução <code>if/else</code>.</p>"
          }
        ],
        practice: {
          python: [
            { id: "pf-p1-py", title: "Exercício com Variáveis", statement: "Declare variáveis de diferentes tipos.", template: "# Seu código aqui" }
          ],
          javascript: [
            { id: "pf-p1-js", title: "Exercício com Variáveis", statement: "Declare variáveis de diferentes tipos.", template: "// Seu código aqui" }
          ]
        },
        quizzes: []
      },
      {
        id: "ka-web",
        title: "Web Core",
        description: "HTML5 semântico, CSS3 (Flexbox/Grid), padrões web.",
        load: "60h",
        iconName: "Globe",
        theory: [
            { id: "web-t1", title: "HTML: A Estrutura da Web", content: "<h2>O que é HTML?</h2><p>HTML (HyperText Markup Language) não é uma linguagem de programação, mas sim uma <strong>linguagem de marcação</strong>. Ela é usada para estruturar o conteúdo de uma página web.</p>" }
        ],
        practice: {
            javascript: [
                { id: "web-p1-js", title: "Crie uma página de portfólio", statement: "Use HTML semântico e CSS para criar uma página de portfólio pessoal.", template: "<!-- Seu HTML aqui -->" }
            ]
        },
        quizzes: []
      },
      {
        id: "ka-tech-english",
        title: "Technical English",
        description: "Vocabulário, leitura de documentação, mensagens de erro.",
        load: "30h",
        iconName: "Languages",
        theory: [{ id: 'teng-t1', title: 'Lendo Documentação Técnica', content: 'Aprenda a ler documentações.'}],
        practice: {},
        quizzes: []
      },
      {
        id: "ka-git",
        title: "Git & Version Control",
        description: "Comandos básicos, GitHub, controle de versão.",
        load: "30h",
        iconName: "GitBranch",
        theory: [{ id: 'git-t1', title: 'O que é Controle de Versão?', content: 'Entenda por que Git é essencial.'}],
        practice: {},
        quizzes: []
      },
      {
        id: "ka-hci",
        title: "Human-Computer Interaction",
        description: "Usabilidade, acessibilidade, design centrado no usuário.",
        load: "20h",
        iconName: "MousePointerClick",
        theory: [{ id: 'hci-t1', title: 'Princípios de Usabilidade', content: 'Aprenda os princípios de um bom design.'}],
        practice: {},
        quizzes: []
      }
    ]
  },
  // NÍVEL 2
  {
    id: 2,
    title: "Nível 2: Algoritmos e Estruturas de Dados",
    description: "Organize e manipule dados de forma eficiente para resolver problemas complexos.",
    knowledgeAreas: [
      { id: "ka-algorithms", title: "Algorithms", description: "Análise, ordenação, busca, recursão.", load: "70h", iconName: "BrainCircuit", theory: [], practice: {}, quizzes: [] },
      { id: "ka-data-structures", title: "Data Structures", description: "Listas, pilhas, filas, árvores, grafos.", load: "70h", iconName: "Database", theory: [], practice: {}, quizzes: [] },
      { id: "ka-discrete-math", title: "Discrete Mathematics", description: "Conjuntos, relações, funções, lógica.", load: "40h", iconName: "Sigma", theory: [], practice: {}, quizzes: [] },
      { id: "ka-pl-advanced", title: "Programming Languages Advanced", description: "POO, funcional, genéricos.", load: "40h", iconName: "Code2", theory: [], practice: {}, quizzes: [] }
    ]
  },
  // NÍVEL 3
  {
    id: 3,
    title: "Nível 3: Sistemas e Infraestrutura",
    description: "Entenda como os sistemas de software funcionam em um nível mais profundo.",
    knowledgeAreas: [
        { id: "ka-os", title: "Operating Systems", description: "Processos, threads, memória, arquivos.", load: "50h", iconName: "HardDrive", theory: [], practice: {}, quizzes: [] },
        { id: "ka-networking", title: "Networking & Communications", description: "TCP/IP, HTTP, DNS, roteamento.", load: "50h", iconName: "Network", theory: [], practice: {}, quizzes: [] },
        { id: "ka-databases", title: "Database Systems", description: "Modelo relacional, SQL, normalização.", load: "60h", iconName: "Database", theory: [], practice: {}, quizzes: [] },
        { id: "ka-security", title: "Information Assurance & Security", description: "Criptografia, segurança web.", load: "30h", iconName: "ShieldCheck", theory: [], practice: {}, quizzes: [] }
    ]
  },
  // NÍVEL 4
  {
    id: 4,
    title: "Nível 4: Engenharia de Software",
    description: "Aprenda a projetar, construir e manter software de alta qualidade em equipe.",
    knowledgeAreas: [
        { id: "ka-se", title: "Software Engineering", description: "Metodologias ágeis, Scrum, Kanban.", load: "40h", iconName: "Construction", theory: [], practice: {}, quizzes: [] },
        { id: "ka-design", title: "Software Design", description: "Padrões de design, SOLID, arquitetura.", load: "60h", iconName: "Architecture", theory: [], practice: {}, quizzes: [] },
        { id: "ka-testing", title: "Quality Assurance & Testing", description: "Testes unitários, integração, TDD, CI/CD.", load: "40h", iconName: "ClipboardCheck", theory: [], practice: {}, quizzes: [] },
        { id: "ka-requirements", title: "Requirements Engineering", description: "Histórias de usuário, casos de uso.", load: "20h", iconName: "ListChecks", theory: [], practice: {}, quizzes: [] }
    ]
  },
  // NÍVEL 5
  {
    id: 5,
    title: "Nível 5: Especializações",
    description: "Aprofunde-se em áreas de alta demanda no mercado de tecnologia.",
    knowledgeAreas: [
        { id: "ka-web-advanced", title: "Advanced Web Development", description: "React/Next.js, Node.js, APIs RESTful.", load: "80h", iconName: "Rocket", theory: [], practice: {}, quizzes: [] },
        { id: "ka-mobile", title: "Mobile Development", description: "React Native, Flutter, nativo.", load: "60h", iconName: "Smartphone", theory: [], practice: {}, quizzes: [] },
        { id: "ka-ai-ml", title: "Artificial Intelligence & ML", description: "Fundamentos de ML, redes neurais.", load: "60h", iconName: "Brain", theory: [], practice: {}, quizzes: [] },
        { id: "ka-cloud", title: "Cloud Computing", description: "AWS/GCP, Docker, Kubernetes.", load: "50h", iconName: "Cloud", theory: [], practice: {}, quizzes: [] },
        { id: "ka-cybersecurity", title: "Cybersecurity", description: "Segurança de redes, ethical hacking.", load: "50h", iconName: "ShieldAlert", theory: [], practice: {}, quizzes: [] },
        { id: "ka-data-science", title: "Data Science & Analytics", description: "Análise de dados, visualização, Big Data.", load: "40h", iconName: "BarChart", theory: [], practice: {}, quizzes: [] },
        { id: "ka-blockchain", title: "Blockchain & Web3", description: "Smart contracts, DeFi, dApps.", load: "40h", iconName: "Link", theory: [], practice: {}, quizzes: [] },
        { id: "ka-game-dev", title: "Game Development", description: "Unity, Unreal, design de jogos.", load: "40h", iconName: "Gamepad2", theory: [], practice: {}, quizzes: [] },
        { id: "ka-iot", title: "Internet of Things", description: "Sensores, microcontroladores, IoT.", load: "30h", iconName: "Router", theory: [], practice: {}, quizzes: [] }
    ]
  },
  // NÍVEL 6
  {
    id: 6,
    title: "Nível 6: Desenvolvimento Profissional",
    description: "Desenvolva as habilidades interpessoais e de carreira para se destacar.",
    knowledgeAreas: [
        { id: "ka-career", title: "Career Skills", description: "Currículo, portfólio, entrevistas.", load: "30h", iconName: "Briefcase", theory: [], practice: {}, quizzes: [] },
        { id: "ka-soft-skills", title: "Soft Skills", description: "Comunicação, trabalho em equipe.", load: "30h", iconName: "Users", theory: [], practice: {}, quizzes: [] },
        { id: "ka-ethics", title: "Ethics & Professionalism", description: "Ética, propriedade intelectual.", load: "20h", iconName: "Scale", theory: [], practice: {}, quizzes: [] },
        { id: "ka-entrepreneurship", title: "Entrepreneurship", description: "Modelos de negócio, startups, pitch.", load: "20h", iconName: "Lightbulb", theory: [], practice: {}, quizzes: [] },
        { id: "ka-advanced-git", title: "Advanced Git & Collaboration", description: "Code reviews, open source.", load: "20h", iconName: "GitMerge", theory: [], practice: {}, quizzes: [] }
    ]
  },
  // NÍVEL 7
  {
    id: 7,
    title: "Nível 7: Certificações Full Stack (freeCodeCamp)",
    description: "Valide suas habilidades com projetos práticos e certificações reconhecidas.",
    knowledgeAreas: [
        { id: "fcc-responsive-web", title: "Responsive Web Design", description: "5 projetos para dominar HTML e CSS.", load: "50h", iconName: "MonitorSmartphone", theory: [], practice: {}, quizzes: [] },
        { id: "fcc-javascript-algorithms", title: "JavaScript Algorithms", description: "5 projetos para solidificar sua lógica.", load: "50h", iconName: "Code", theory: [], practice: {}, quizzes: [] },
        { id: "fcc-frontend-libraries", title: "Front End Libraries", description: "5 projetos com React e Redux.", load: "50h", iconName: "Library", theory: [], practice: {}, quizzes: [] },
        { id: "fcc-data-viz", title: "Data Visualization", description: "5 projetos para visualizar dados com D3.js.", load: "40h", iconName: "AreaChart", theory: [], practice: {}, quizzes: [] },
        { id: "fcc-relational-db", title: "Relational Database", description: "5 projetos com SQL.", load: "40h", iconName: "Database", theory: [], practice: {}, quizzes: [] },
        { id: "fcc-backend-apis", title: "Back End Development and APIs", description: "5 projetos para construir APIs.", load: "50h", iconName: "Server", theory: [], practice: {}, quizzes: [] },
        { id: "fcc-quality-assurance", title: "Quality Assurance", description: "5 projetos para garantir a qualidade.", load: "40h", iconName: "TestTube", theory: [], practice: {}, quizzes: [] },
        { id: "fcc-capstone", title: "Capstone Project", description: "Projeto final integrador.", load: "80h", iconName: "GraduationCap", theory: [], practice: {}, quizzes: [] }
    ]
  }
];
