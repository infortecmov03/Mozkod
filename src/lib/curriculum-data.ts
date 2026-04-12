export type Lesson = {
  id: string;
  title: string;
  content: string;
};

export type KnowledgeArea = {
  id: string;
  title: string;
  description: string;
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
        title: "Nível 1: Introdução à Programação",
        description: "Comece sua jornada aprendendo os conceitos fundamentais da programação de uma forma simples e divertida.",
        knowledgeAreas: [
            { 
              id: "intro-logic", 
              title: "Lógica de Programação", 
              description: "O pilar de toda a programação.", 
              iconName: "BrainCircuit",
              lessons: [
                { id: "logic-1", title: "O que é Programação?", content: "<h3>Bem-vindo ao mundo da programação!</h3><p>Programar é como dar instruções a um computador para que ele realize uma tarefa. Pense nisso como uma receita de bolo: você segue passos específicos para chegar a um resultado delicioso. Aqui, ensinamos o computador a 'cozinhar' soluções para problemas.</p>" },
                { id: "logic-2", title: "Variáveis e Tipos de Dados", content: "<h3>Guardando Informações</h3><p>Variáveis são como caixas onde guardamos informações. Cada caixa pode guardar um tipo diferente de coisa: números, texto, valores de verdadeiro/falso, etc. Entender isso é fundamental para manipular dados em seus programas.</p>" },
                { id: "logic-3", title: "Operadores e Expressões", content: "<h3>Fazendo Cálculos</h3><p>Operadores nos permitem realizar operações matemáticas (+, -, *, /) e lógicas (E, OU, NÃO). Combinando variáveis e operadores, criamos expressões que o computador avalia para nós.</p>" }
              ]
            },
            { 
              id: "intro-python", 
              title: "Primeiros Passos com Python", 
              description: "Aprenda uma linguagem amigável para iniciantes.", 
              iconName: "Code",
              lessons: [
                { id: "python-1", title: "Instalando o Ambiente", content: "<h3>Preparando o Terreno</h3><p>Para começar a programar em Python, você precisa instalá-lo no seu computador. Vamos mostrar o passo a passo para deixar tudo pronto para a sua jornada.</p>" },
                { id: "python-2", title: "Seu Primeiro 'Olá, Mundo!'", content: "<h3>O Ritual de Passagem</h3><p>Todo programador começa com um 'Olá, Mundo!'. É um programa simples que apenas imprime essa frase na tela. Vamos criar o seu e executá-lo.</p>" }
              ]
            },
            { 
              id: "intro-git", 
              title: "Introdução ao Git", 
              description: "Controle de versão para seus projetos.", 
              iconName: "GitCommit",
              lessons: [
                 { id: "git-1", title: "O que é Controle de Versão?", content: "<h3>Viajando no Tempo do Código</h3><p>Git é uma ferramenta que permite salvar 'fotos' (snapshots) do seu código em diferentes momentos. Se algo der errado, você pode facilmente voltar para uma versão anterior que estava funcionando. É como ter um super-poder!</p>" }
              ]
            },
        ]
    },
    {
        id: 2,
        title: "Nível 2: Estruturas de Dados",
        description: "Organize e armazene dados de forma eficiente para resolver problemas complexos.",
        knowledgeAreas: [
            { id: "data-arrays", title: "Arrays e Listas", description: "Coleções de dados fundamentais.", iconName: "Database", lessons: [] },
            { id: "data-stacks-queues", title: "Pilhas e Filas", description: "Estruturas de dados lineares.", iconName: "Server", lessons: [] },
            { id: "data-trees", title: "Árvores e Grafos", description: "Estruturas de dados não lineares.", iconName: "GitBranch", lessons: [] },
        ]
    },
    {
        id: 3,
        title: "Nível 3: Algoritmos Avançados",
        description: "Domine técnicas algorítmicas para criar soluções otimizadas e eficientes.",
        knowledgeAreas: [
            { id: "algo-sorting", title: "Ordenação e Busca", description: "Algoritmos clássicos e essenciais.", iconName: "Code", lessons: [] },
            { id: "algo-dynamic", title: "Programação Dinâmica", description: "Resolva problemas complexos dividindo-os.", iconName: "BrainCircuit", lessons: [] },
            { id: "algo-complexity", title: "Análise de Complexidade", description: "Entenda a eficiência de seus algoritmos.", iconName: "Rocket", lessons: [] },
        ]
    },
     {
        id: 4,
        title: "Nível 4: Desenvolvimento Web",
        description: "Construa aplicações web interativas e modernas, do frontend ao backend.",
        knowledgeAreas: [
            { id: "web-html-css", title: "HTML & CSS", description: "A base da web.", iconName: "Palette", lessons: [] },
            { id: "web-js", title: "JavaScript & React", description: "Interatividade no lado do cliente.", iconName: "Code", lessons: [] },
            { id: "web-backend", title: "Backend com Node.js", description: "Crie servidores e APIs.", iconName: "Server", lessons: [] },
        ]
    },
    {
        id: 5,
        title: "Nível 5: Banco de Dados",
        description: "Aprenda a modelar, consultar e gerenciar bancos de dados relacionais e não-relacionais.",
        knowledgeAreas: [
            { id: "db-sql", title: "SQL e Bancos Relacionais", description: "A linguagem padrão para bancos de dados.", iconName: "Database", lessons: [] },
            { id: "db-nosql", title: "NoSQL e Modelagem", description: "Flexibilidade para dados modernos.", iconName: "Code", lessons: [] },
        ]
    },
    {
        id: 6,
        title: "Nível 6: Tópicos Especiais",
        description: "Explore áreas especializadas e prepare-se para o mercado de trabalho.",
        knowledgeAreas: [
            { id: "special-security", title: "Segurança da Informação", description: "Proteja suas aplicações.", iconName: "ShieldCheck", lessons: [] },
            { id: "special-english", title: "Inglês Técnico", description: "Comunicação no mundo da tecnologia.", iconName: "Languages", lessons: [] },
        ]
    },
    {
        id: 7,
        title: "Nível 7: Projetos Guiados (freeCodeCamp)",
        description: "Aplique seu conhecimento com projetos práticos para construir um portfólio impressionante.",
        knowledgeAreas: [
             { 
                 id: "guided-projects-web", 
                 title: "Projetos Web", 
                 description: "Construa aplicações web do mundo real.", 
                 iconName: "LaptopCode", 
                 lessons: [
                    { 
                        id: "project-html-css", 
                        title: "Projeto 1: Página de Tributo", 
                        content: "<h3>Construa uma Página de Tributo</h3><p>Neste projeto, você construirá uma página da web simples para homenagear uma pessoa ou assunto de sua escolha. É um ótimo exercício para praticar suas habilidades fundamentais de HTML e CSS.</p><p>Este projeto é inspirado no currículo de 'Design Web Responsivo' do freeCodeCamp.</p><h4>O que você vai aprender:</h4><ul><li>Estruturar uma página com HTML5 semântico.</li><li>Estilizar elementos com CSS, incluindo seletores, cores e tipografia.</li><li>Tornar sua página responsiva para diferentes tamanhos de tela.</li></ul><p>Para um guia passo a passo, confira o <a href='https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page' target='_blank' rel='noopener noreferrer' class='text-primary underline'>projeto no freeCodeCamp</a>.</p>" 
                    },
                    { 
                        id: "project-javascript", 
                        title: "Projeto 2: Gerador de Citações Aleatórias", 
                        content: "<h3>Construa um Gerador de Citações</h3><p>Neste projeto, você criará um aplicativo que exibe uma nova citação toda vez que um botão é clicado. Você vai praticar a manipulação do DOM com JavaScript e trabalhar com arrays e objetos.</p><p>Este projeto é inspirado no currículo de 'Algoritmos e Estruturas de Dados em JavaScript' do freeCodeCamp.</p><h4>O que você vai aprender:</h4><ul><li>Manipular o DOM para atualizar o conteúdo da página.</li><li>Usar JavaScript para lidar com eventos de clique.</li><li>Trabalhar com arrays de objetos para armazenar os dados das citações.</li></ul><p>Para um guia passo a passo, confira o <a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/build-a-random-quote-machine' target='_blank' rel='noopener noreferrer' class='text-primary underline'>projeto no freeCodeCamp</a>.</p>" 
                    }
                 ] 
             },
             {
                 id: "guided-projects-python",
                 title: "Projetos Python",
                 description: "Resolva problemas com Python.",
                 iconName: "Code",
                 lessons: [
                    {
                        id: "project-python-budget",
                        title: "Projeto 3: App de Orçamento",
                        content: "<h3>Construa um App de Orçamento</h3><p>Neste projeto, você criará uma classe Python para gerenciar categorias de orçamento, como comida, roupas e entretenimento. Você poderá depositar, sacar e transferir fundos entre diferentes categorias.</p><p>Este projeto é inspirado no currículo de 'Computação Científica com Python' do freeCodeCamp.</p><h4>O que você vai aprender:</h4><ul><li>Criar e usar classes e objetos em Python.</li><li>Implementar métodos para realizar cálculos e manipular dados.</li><li>Escrever código Python claro e orientado a objetos.</li></ul><p>Para um guia passo a passo, confira o <a href='https://www.freecodecamp.org/learn/scientific-computing-with-python/scientific-computing-with-python-projects/build-a-budget-app' target='_blank' rel='noopener noreferrer' class='text-primary underline'>projeto no freeCodeCamp</a>.</p>"
                    }
                 ]
             }
        ]
    }
];
