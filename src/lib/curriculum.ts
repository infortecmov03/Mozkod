export type LessonType = 'theory' | 'exercise';

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type Lesson = {
  id: string;
  title: string;
  type: LessonType;
  content: string;
  code?: string;
  language?: string;
  solution?: string;
  quiz?: QuizQuestion[];
};

export type KnowledgeArea = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Module = {
  id: string; // levelId
  title: string;
  category: string;
  description: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  knowledgeAreas: KnowledgeArea[];
};

export const modules: Module[] = [
  {
    id: '1',
    title: 'Nível 1: Fundamentos de Programação',
    category: 'CS Core',
    description: 'Domine a lógica e os fundamentos essenciais para qualquer programador.',
    image: 'cs-core',
    level: 'Beginner',
    knowledgeAreas: [
      {
        id: 'ka-programming',
        title: 'Lógica e Programação',
        description: 'Variáveis, tipos, loops e funções.',
        lessons: [
          { id: 'pf-t1', title: 'Variáveis e Tipos de Dados', type: 'theory', content: 'Variáveis são recipientes para armazenar dados...' },
          { id: 'pf-t2', title: 'Operadores Aritméticos', type: 'theory', content: 'Operadores permitem realizar cálculos...' },
          { id: 'pf-t3', title: 'Strings e I/O', type: 'theory', content: 'Manipulação de texto e entrada de dados...' },
          { id: 'pf-t4', title: 'Estruturas Condicionais', type: 'theory', content: 'Tomada de decisão com if/else...' },
        ]
      },
      {
        id: 'ka-cs',
        title: 'Ciência da Computação',
        description: 'Binário, lógica booleana e arquitetura.',
        lessons: [
          { id: 'cs-t1', title: 'Sistemas Numéricos', type: 'theory', content: 'Binário, Hexadecimal e Decimal...' },
          { id: 'cs-t2', title: 'Lógica Booleana', type: 'theory', content: 'Portas lógicas e álgebra de Boole...' },
        ]
      },
      {
        id: 'ka-web',
        title: 'Web Fundamentals',
        description: 'HTML5, CSS3 e estrutura web.',
        lessons: [
          { id: 'web-t1', title: 'Estrutura HTML5', type: 'theory', content: 'Tags semânticas e estrutura de documentos...' },
          { id: 'web-t2', title: 'CSS Box Model', type: 'theory', content: 'Margens, bordas e preenchimento...' },
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Nível 2: Algoritmos e Estruturas',
    category: 'Algorithms',
    description: 'Aprenda a organizar dados e resolver problemas complexos.',
    image: 'ai-ml',
    level: 'Intermediate',
    knowledgeAreas: [
      {
        id: 'ka-algorithms',
        title: 'Algoritmos',
        description: 'Busca, ordenação e complexidade.',
        lessons: [
          { id: 'alg-t1', title: 'Introdução a Algoritmos', type: 'theory', content: 'Definição e análise de passos...' },
          { id: 'alg-t2', title: 'Busca Binária', type: 'theory', content: 'Eficiência em listas ordenadas...' },
        ]
      },
      {
        id: 'ka-data-structures',
        title: 'Estruturas de Dados',
        description: 'Arrays, Listas, Pilhas e Filas.',
        lessons: [
          { id: 'ds-t1', title: 'Arrays Dinâmicos', type: 'theory', content: 'Gestão de memória e redimensionamento...' },
          { id: 'ds-t2', title: 'Listas Ligadas', type: 'theory', content: 'Nós e ponteiros na memória...' },
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Nível 3: Sistemas e Infraestrutura',
    category: 'Systems',
    description: 'Redes, Bases de Dados e Sistemas Operativos.',
    image: 'web-dev',
    level: 'Intermediate',
    knowledgeAreas: [
      {
        id: 'ka-os',
        title: 'Sistemas Operativos',
        description: 'Processos, memória e threads.',
        lessons: [{ id: 'os-t1', title: 'Introdução a SOs', type: 'theory', content: 'O papel do kernel e hardware...' }]
      },
      {
        id: 'ka-networking',
        title: 'Redes',
        description: 'Modelo OSI, TCP/IP e Sockets.',
        lessons: [{ id: 'net-t1', title: 'Modelo OSI', type: 'theory', content: 'As 7 camadas da rede...' }]
      }
    ]
  },
  {
    id: '4',
    title: 'Nível 4: Engenharia de Software',
    category: 'Engineering',
    description: 'Design patterns, SOLID e metodologias.',
    image: 'cs-core',
    level: 'Advanced',
    knowledgeAreas: [
      {
        id: 'ka-se',
        title: 'Software Engineering',
        description: 'Ciclo de vida e Agile.',
        lessons: [{ id: 'se-t1', title: 'Metodologias Ágeis', type: 'theory', content: 'Scrum e Kanban na prática...' }]
      }
    ]
  },
  {
    id: '5',
    title: 'Nível 5: Especializações',
    category: 'Specialty',
    description: 'AI, Cloud, Blockchain e Mobile.',
    image: 'ai-ml',
    level: 'Advanced',
    knowledgeAreas: [
      {
        id: 'ka-ai-ml',
        title: 'Inteligência Artificial',
        description: 'Machine Learning e Redes Neurais.',
        lessons: [{ id: 'ai-t1', title: 'Fundamentos de ML', type: 'theory', content: 'Modelos preditivos e dados...' }]
      }
    ]
  },
  {
    id: '6',
    title: 'Nível 6: Carreira e Ética',
    category: 'Career',
    description: 'Soft skills, mercado e liderança.',
    image: 'hero-bg',
    level: 'Expert',
    knowledgeAreas: [
      {
        id: 'ka-career',
        title: 'Carreira Tech',
        description: 'Portfólio e entrevistas.',
        lessons: [{ id: 'car-t1', title: 'Personal Branding', type: 'theory', content: 'Como se destacar no mercado...' }]
      }
    ]
  },
  {
    id: '7',
    title: 'Nível 7: Certificações Externas',
    category: 'Certs',
    description: 'Projetos práticos para o seu currículo.',
    image: 'certificate-badge',
    level: 'Expert',
    knowledgeAreas: [
      {
        id: 'fcc-responsive-web',
        title: 'Responsive Web Design',
        description: 'Projetos práticos de HTML/CSS.',
        lessons: [{ id: 'fcc-rwd-1', title: 'Página de Tributo', type: 'theory', content: 'Criação de layout responsivo...' }]
      }
    ]
  },
  {
    id: '8',
    title: 'Nível 8: Domínio de Linguagens',
    category: 'Languages',
    description: 'Mais de 35 linguagens e tecnologias.',
    image: 'web-dev',
    level: 'Expert',
    knowledgeAreas: [
      {
        id: 'lang-javascript',
        title: 'JavaScript Deep Dive',
        description: 'Do básico ao avançado.',
        lessons: [
          { id: 'js-t1', title: 'ES6+ Syntax', type: 'theory', content: 'Modern JS features...' },
          { id: 'js-t2', title: 'Async JS', type: 'theory', content: 'Promises e Async/Await...' },
        ]
      },
      {
        id: 'lang-python',
        title: 'Python Masterclass',
        description: 'Automação e Ciência de Dados.',
        lessons: [{ id: 'py-t1', title: 'Pythonic Way', type: 'theory', content: 'Escrevendo código limpo em Python...' }]
      }
    ]
  }
];

export function findLessonById(lessonId: string) {
  for (const module of modules) {
    for (const ka of module.knowledgeAreas) {
      const lesson = ka.lessons.find(l => l.id === lessonId);
      if (lesson) return { lesson, ka, module };
    }
  }
  return null;
}

export function getNextLessonId(currentLessonId: string, completedLessonIds: string[]) {
  let allLessons: Lesson[] = [];
  modules.forEach(m => m.knowledgeAreas.forEach(ka => allLessons.push(...ka.lessons)));
  
  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex === -1) return null;

  if (currentIndex + 1 < allLessons.length) {
    return allLessons[currentIndex + 1].id;
  }
  return null;
}
