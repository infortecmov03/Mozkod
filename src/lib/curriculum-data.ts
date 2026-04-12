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
              lessons: []
            },
            { 
              id: "ka-programming", 
              title: "Programming Fundamentals", 
              description: "Variáveis, tipos, estruturas de controle, funções, arrays.", 
              load: "80h",
              iconName: "Terminal",
              lessons: []
            },
            { 
              id: "ka-web", 
              title: "Web Core", 
              description: "HTML5 semântico, CSS3 (Flexbox/Grid), padrões web.", 
              load: "60h",
              iconName: "Globe",
              lessons: []
            },
            { 
              id: "ka-tech-english", 
              title: "Technical English", 
              description: "Vocabulário de programação, leitura de documentação, mensagens de erro.", 
              load: "30h",
              iconName: "Languages",
              lessons: []
            },
            { 
              id: "ka-git", 
              title: "Git & Version Control", 
              description: "Fundamentos de controle de versão, comandos básicos, GitHub.", 
              load: "30h",
              iconName: "GitBranch",
              lessons: []
            },
            { 
              id: "ka-hci", 
              title: "Human-Computer Interaction", 
              description: "Princípios de usabilidade, acessibilidade básica, design centrado no usuário.", 
              load: "20h",
              iconName: "MousePointerClick",
              lessons: []
            },
        ]
    },
    {
        id: 2,
        title: "Nível 2: Algoritmos e Estruturas de Dados",
        description: "Organize e manipule dados de forma eficiente para resolver problemas complexos.",
        knowledgeAreas: [
            { id: "ka-algorithms", title: "Algorithms", description: "Análise de algoritmos, ordenação, busca, recursão, paradigmas.", load: "70h", iconName: "BrainCircuit", lessons: [] },
            { id: "ka-data-structures", title: "Data Structures", description: "Arrays, listas ligadas, pilhas, filas, árvores, grafos, hash tables.", load: "70h", iconName: "Database", lessons: [] },
            { id: "ka-discrete-math", title: "Discrete Mathematics", description: "Conjuntos, relações, funções, lógica, combinatória, probabilidade.", load: "40h", iconName: "Sigma", lessons: [] },
            { id: "ka-pl-advanced", title: "Programming Languages Advanced", description: "Programação funcional, orientação a objetos, genéricos, exceções.", load: "40h", iconName: "Code2", lessons: [] },
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
                 lessons: []
             },
             {
                 id: "fcc-javascript-algorithms",
                 title: "JavaScript Algorithms and Data Structures",
                 description: "5 projetos para solidificar sua lógica com JavaScript.",
                 load: "50h",
                 iconName: "Code",
                 lessons: []
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
