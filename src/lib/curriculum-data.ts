export type KnowledgeArea = {
  id: string;
  title: string;
  description: string;
  iconName: string;
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
        title: "Nível 1: Introdução à Programação",
        description: "Comece sua jornada aprendendo os conceitos fundamentais da programação de uma forma simples e divertida.",
        knowledgeAreas: [
            { id: "intro-logic", title: "Lógica de Programação", description: "O pilar de toda a programação.", iconName: "BrainCircuit" },
            { id: "intro-python", title: "Primeiros Passos com Python", description: "Aprenda uma linguagem amigável para iniciantes.", iconName: "Code" },
            { id: "intro-git", title: "Introdução ao Git", description: "Controle de versão para seus projetos.", iconName: "GitCommit" },
        ]
    },
    {
        id: 2,
        title: "Nível 2: Estruturas de Dados",
        description: "Organize e armazene dados de forma eficiente para resolver problemas complexos.",
        knowledgeAreas: [
            { id: "data-arrays", title: "Arrays e Listas", description: "Coleções de dados fundamentais.", iconName: "Database" },
            { id: "data-stacks-queues", title: "Pilhas e Filas", description: "Estruturas de dados lineares.", iconName: "Server" },
            { id: "data-trees", title: "Árvores e Grafos", description: "Estruturas de dados não lineares.", iconName: "GitBranch" },
        ]
    },
    {
        id: 3,
        title: "Nível 3: Algoritmos Avançados",
        description: "Domine técnicas algorítmicas para criar soluções otimizadas e eficientes.",
        knowledgeAreas: [
            { id: "algo-sorting", title: "Ordenação e Busca", description: "Algoritmos clássicos e essenciais.", iconName: "Code" },
            { id: "algo-dynamic", title: "Programação Dinâmica", description: "Resolva problemas complexos dividindo-os.", iconName: "BrainCircuit" },
            { id: "algo-complexity", title: "Análise de Complexidade", description: "Entenda a eficiência de seus algoritmos.", iconName: "Rocket" },
        ]
    },
     {
        id: 4,
        title: "Nível 4: Desenvolvimento Web",
        description: "Construa aplicações web interativas e modernas, do frontend ao backend.",
        knowledgeAreas: [
            { id: "web-html-css", title: "HTML & CSS", description: "A base da web.", iconName: "Palette" },
            { id: "web-js", title: "JavaScript & React", description: "Interatividade no lado do cliente.", iconName: "Code" },
            { id: "web-backend", title: "Backend com Node.js", description: "Crie servidores e APIs.", iconName: "Server" },
        ]
    },
    {
        id: 5,
        title: "Nível 5: Banco de Dados",
        description: "Aprenda a modelar, consultar e gerenciar bancos de dados relacionais e não-relacionais.",
        knowledgeAreas: [
            { id: "db-sql", title: "SQL e Bancos Relacionais", description: "A linguagem padrão para bancos de dados.", iconName: "Database" },
            { id: "db-nosql", title: "NoSQL e Modelagem", description: "Flexibilidade para dados modernos.", iconName: "Code" },
        ]
    },
    {
        id: 6,
        title: "Nível 6: Tópicos Especiais",
        description: "Explore áreas especializadas e prepare-se para o mercado de trabalho.",
        knowledgeAreas: [
            { id: "special-security", title: "Segurança da Informação", description: "Proteja suas aplicações.", iconName: "ShieldCheck" },
            { id: "special-english", title: "Inglês Técnico", description: "Comunicação no mundo da tecnologia.", iconName: "Languages" },
        ]
    },
    {
        id: 7,
        title: "Nível 7: Projeto Final",
        description: "Aplique todo o seu conhecimento para construir um projeto completo e impressionante.",
        knowledgeAreas: [
             { id: "final-project", title: "Desenvolvimento do Projeto", description: "Planeje e execute seu projeto.", iconName: "Rocket" },
             { id: "final-deploy", title: "Publicação e Manutenção", description: "Coloque seu projeto no ar.", iconName: "Server" },
        ]
    }
];
