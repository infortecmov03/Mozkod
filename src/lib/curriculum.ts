
export type LessonType = 'theory' | 'exercise';

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type TheoryLesson = {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  quiz: QuizQuestion[];
};

export type PracticeObjective = {
  id: string;
  description: string;
  hint: string;
  validationRegex: string;
};

export type PracticeExercise = {
  id: string;
  title: string;
  description: string;
  objectives: PracticeObjective[];
  starterCode: Record<string, string>;
};

export type KnowledgeArea = {
  id: string;
  title: string;
  description: string;
  theoryLessons: TheoryLesson[];
  practiceExercises: PracticeExercise[];
  supportedLanguages: string[];
};

export type Module = {
  id: string;
  title: string;
  level: string;
  description: string;
  image: string;
  knowledgeAreas: KnowledgeArea[];
};

export const modules: Module[] = [
  {
    id: '1',
    title: 'Nível 1: Fundamentos (Core Foundations)',
    level: 'Beginner',
    description: 'A base essencial de CS e Programação.',
    image: 'cs-core',
    knowledgeAreas: [
      {
        id: 'ka-programming',
        title: 'Programming Fundamentals',
        description: 'Lógica, variáveis e estruturas básicas.',
        supportedLanguages: ['javascript', 'python', 'java', 'cpp'],
        theoryLessons: [
          {
            id: 'pf-t1',
            title: 'Variáveis e Tipos de Dados',
            content: 'Variáveis são espaços na memória para guardar informação...',
            quiz: [{ id: 'q1', question: 'O que é uma variável?', options: ['Um motor', 'Espaço na memória', 'Um erro'], correctAnswer: 1 }]
          },
          { id: 'pf-t2', title: 'Operadores Aritméticos', content: 'Cálculos básicos...', quiz: [] }
        ],
        practiceExercises: [
          {
            id: 'pf-p1',
            title: 'Prática 1: Variáveis',
            description: 'Declare as suas primeiras variáveis.',
            objectives: [
              { id: 'obj1', description: 'Declare "nome" como "João"', hint: 'let nome = "João";', validationRegex: 'nome.*=.*"João"' }
            ],
            starterCode: {
              javascript: 'let nome = "";',
              python: 'nome = ""'
            }
          }
        ]
      },
      { id: 'ka-cs', title: 'CS Core', description: 'Ciência da Computação.', supportedLanguages: [], theoryLessons: [{ id: 'cs-t1', title: 'Sistemas Numéricos', content: 'Binário, Hex...', quiz: [] }], practiceExercises: [] },
      { id: 'ka-web', title: 'Web Core (HTML/CSS)', description: 'Estrutura e Estilo.', supportedLanguages: ['html', 'css'], theoryLessons: [{ id: 'web-t1', title: 'Estrutura HTML5', content: 'Tags semânticas...', quiz: [] }], practiceExercises: [] },
      { id: 'ka-tech-english', title: 'Tech English', description: 'Inglês Técnico.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-git', title: 'Git & VC', description: 'Controlo de Versão.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-hci', title: 'HCI', description: 'Interação Humano-Computador.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-dev-tools', title: 'Dev Tools', description: 'Ferramentas de Desenvolvimento.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] }
    ]
  },
  {
    id: '2',
    title: 'Nível 2: Algoritmos e Estruturas de Dados',
    level: 'Intermediate',
    description: 'Organização de dados e lógica complexa.',
    image: 'web-dev',
    knowledgeAreas: [
      { id: 'ka-algorithms', title: 'Algorithms', description: 'Busca e ordenação.', supportedLanguages: ['javascript', 'python', 'java', 'cpp'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-data-structures', title: 'Data Structures', description: 'Arrays, Listas, Pilhas.', supportedLanguages: ['javascript', 'python', 'java', 'cpp'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-discrete-math', title: 'Discrete Math', description: 'Lógica Proposicional.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-mathematics', title: 'Mathematics', description: 'Álgebra e Cálculo.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-pl-advanced', title: 'PL Advanced', description: 'Paradigmas Avançados.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] }
    ]
  },
  {
    id: '3',
    title: 'Nível 3: Sistemas e Infraestrutura',
    level: 'Intermediate',
    description: 'Funcionamento interno de sistemas.',
    image: 'cs-core',
    knowledgeAreas: [
      { id: 'ka-os', title: 'Operating Systems', description: 'Processos e Memória.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-networking', title: 'Networking', description: 'Protocolos e Redes.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-databases', title: 'Databases', description: 'SQL e NoSQL.', supportedLanguages: ['sql'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-security', title: 'Security', description: 'Criptografia e Defesa.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] }
    ]
  },
  {
    id: '4',
    title: 'Nível 4: Engenharia de Software',
    level: 'Advanced',
    description: 'Arquitetura e qualidade.',
    image: 'hero-bg',
    knowledgeAreas: [
      { id: 'ka-se', title: 'Software Engineering', description: 'Ciclo de vida.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-design', title: 'Software Design', description: 'SOLID e Padrões.', supportedLanguages: ['javascript', 'python', 'java'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-qa', title: 'Quality Assurance', description: 'Testes automatizados.', supportedLanguages: ['javascript', 'python', 'java'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-requirements', title: 'Requirements', description: 'Elicitação e Análise.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] }
    ]
  },
  {
    id: '5',
    title: 'Nível 5: Especializações',
    level: 'Professional',
    description: 'Trilhas verticais de tecnologia.',
    image: 'ai-ml',
    knowledgeAreas: [
      { id: 'ka-web-advanced', title: 'Web Advanced', description: 'React, Next.js.', supportedLanguages: ['javascript', 'typescript'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-mobile', title: 'Mobile', description: 'Flutter, Native.', supportedLanguages: ['dart', 'swift', 'kotlin'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-ai-ml', title: 'AI & ML', description: 'TensorFlow, PyTorch.', supportedLanguages: ['python'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-cloud', title: 'Cloud Computing', description: 'AWS, Terraform.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-cybersecurity', title: 'Cybersecurity', description: 'Pentest.', supportedLanguages: ['python', 'bash'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-data-science', title: 'Data Science', description: 'Pandas, R.', supportedLanguages: ['python', 'r'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-blockchain', title: 'Blockchain', description: 'Solidity, Web3.', supportedLanguages: ['solidity', 'javascript'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-game-dev', title: 'Game Development', description: 'Unity, Unreal.', supportedLanguages: ['csharp', 'cpp'], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-iot', title: 'IoT', description: 'Arduino, ESP32.', supportedLanguages: ['cpp', 'python'], theoryLessons: [], practiceExercises: [] }
    ]
  },
  {
    id: '6',
    title: 'Nível 6: Desenvolvimento Profissional',
    level: 'Expert',
    description: 'Carreira e Empreendedorismo.',
    image: 'certificate-badge',
    knowledgeAreas: [
      { id: 'ka-career', title: 'Career', description: 'CV e LinkedIn.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-soft-skills', title: 'Soft Skills', description: 'Comunicação.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-ethics', title: 'Ethics', description: 'Responsabilidade.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-entrepreneurship', title: 'Entrepreneurship', description: 'MVP.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
      { id: 'ka-advanced-git', title: 'Advanced Git', description: 'Workflow.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] }
    ]
  },
  {
    id: '7',
    title: 'Nível 7: Certificações (freeCodeCamp)',
    level: 'Certified',
    description: 'Projetos finais do freeCodeCamp.',
    image: 'certificate-badge',
    knowledgeAreas: [
      { id: 'fcc-responsive-web', title: 'Responsive Web Design', description: 'HTML/CSS.', supportedLanguages: ['html', 'css'], theoryLessons: [], practiceExercises: [] },
      { id: 'fcc-js-algorithms', title: 'JavaScript Algorithms', description: 'Lógica.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
      { id: 'fcc-frontend-libraries', title: 'Frontend Libraries', description: 'React.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
      { id: 'fcc-data-visualization', title: 'Data Visualization', description: 'D3.js.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
      { id: 'fcc-relational-db', title: 'Relational Databases', description: 'SQL.', supportedLanguages: ['sql'], theoryLessons: [], practiceExercises: [] },
      { id: 'fcc-backend-apis', title: 'Backend APIs', description: 'Node.js.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
      { id: 'fcc-quality-assurance', title: 'Quality Assurance', description: 'Testes.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
      { id: 'fcc-capstone', title: 'Capstone', description: 'Full Stack.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] }
    ]
  },
  {
    id: '8',
    title: 'Nível 8: Linguagens de Programação',
    level: 'Master',
    description: 'Domínio de sintaxes específicas.',
    image: 'web-dev',
    knowledgeAreas: [
      { id: 'lang-html', title: 'HTML', description: 'Web.', supportedLanguages: ['html'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-css', title: 'CSS', description: 'Estilo.', supportedLanguages: ['css'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-javascript', title: 'JavaScript', description: 'Scripts.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-typescript', title: 'TypeScript', description: 'Tipagem.', supportedLanguages: ['typescript'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-python', title: 'Python', description: 'Geral.', supportedLanguages: ['python'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-sql', title: 'SQL', description: 'Dados.', supportedLanguages: ['sql'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-php', title: 'PHP', description: 'Web Backend.', supportedLanguages: ['php'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-nodejs', title: 'Node.js', description: 'Backend.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-dart-flutter', title: 'Dart/Flutter', description: 'Mobile.', supportedLanguages: ['dart'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-react-native', title: 'React Native', description: 'Mobile JS.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-swift', title: 'Swift', description: 'iOS.', supportedLanguages: ['swift'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-kotlin', title: 'Kotlin', description: 'Android.', supportedLanguages: ['kotlin'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-r', title: 'R', description: 'Estatística.', supportedLanguages: ['r'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-julia', title: 'Julia', description: 'Científica.', supportedLanguages: ['julia'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-bash', title: 'Bash', description: 'Terminal.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-yaml', title: 'YAML', description: 'Config.', supportedLanguages: ['yaml'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-docker', title: 'Docker', description: 'Containers.', supportedLanguages: ['docker'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-terraform', title: 'Terraform', description: 'IaC.', supportedLanguages: ['hcl'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-markdown', title: 'Markdown', description: 'Docs.', supportedLanguages: ['markdown'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-json', title: 'JSON', description: 'Dados.', supportedLanguages: ['json'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-xml', title: 'XML', description: 'Markup.', supportedLanguages: ['xml'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-graphql', title: 'GraphQL', description: 'Query.', supportedLanguages: ['graphql'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-solidity', title: 'Solidity', description: 'Crypto.', supportedLanguages: ['solidity'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-rust', title: 'Rust', description: 'Systems.', supportedLanguages: ['rust'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-go', title: 'Go', description: 'Cloud Native.', supportedLanguages: ['go'], theoryLessons: [], practiceExercises: [] },
      { id: 'lang-lua', title: 'Lua', description: 'Scripting.', supportedLanguages: ['lua'], theoryLessons: [], practiceExercises: [] }
    ]
  }
];

export function findKnowledgeAreaByLessonId(id: string) {
  for (const m of modules) {
    for (const ka of m.knowledgeAreas) {
      if (ka.theoryLessons.some(l => l.id === id) || ka.practiceExercises.some(p => p.id === id)) {
        return { ka, module: m };
      }
    }
  }
  return null;
}

export function findTheoryLesson(id: string) {
  for (const m of modules) {
    for (const ka of m.knowledgeAreas) {
      const l = ka.theoryLessons.find(l => l.id === id);
      if (l) return l;
    }
  }
  return null;
}

export function findPracticeExercise(id: string) {
  for (const m of modules) {
    for (const ka of m.knowledgeAreas) {
      const p = ka.practiceExercises.find(p => p.id === id);
      if (p) return p;
    }
  }
  return null;
}
