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
  lessons: Lesson[];
};

export type Module = {
  id: string; // levelId
  title: string;
  category: string;
  description: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  knowledgeAreas: KnowledgeArea[];
};

export const modules: Module[] = [
  {
    id: '1',
    title: 'Nível 1: Fundamentos de Programação',
    category: 'CS Core',
    description: 'Domine a lógica por trás de cada linha de código e os fundamentos da computação.',
    image: 'cs-core',
    level: 'Beginner',
    knowledgeAreas: [
      {
        id: 'ka-programming',
        title: 'Introdução à Lógica',
        lessons: [
          {
            id: 'pf-t1',
            title: 'Variáveis e Tipos de Dados',
            type: 'theory',
            content: 'Variáveis são como gavetas onde guardamos informações. Em linguagens como JavaScript, podemos ter tipos como string (texto), number (números) e boolean (verdadeiro/falso).',
            quiz: [
              {
                id: 'q1',
                question: 'Qual o tipo de dado usado para armazenar texto?',
                options: ['Number', 'String', 'Boolean', 'Object'],
                correctAnswer: 1
              }
            ]
          },
          {
            id: 'pf-e1',
            title: 'Praticando Soma',
            type: 'exercise',
            language: 'javascript',
            code: 'function somar(a, b) {\n  // Retorne a soma de a e b\n  \n}',
            solution: 'return a + b',
            content: 'Complete a função para realizar a soma de dois valores.'
          }
        ]
      },
      {
        id: 'ka-cs',
        title: 'Ciência da Computação',
        lessons: [
          {
            id: 'cs-t1',
            title: 'Sistemas Numéricos (Binário)',
            type: 'theory',
            content: 'Computadores operam na base 2 (binário). Tudo o que vês no ecrã é, no fundo, uma sequência de 0s e 1s.',
            quiz: [
              {
                id: 'q-bin1',
                question: 'Quantos dígitos existem no sistema binário?',
                options: ['10', '8', '2', '16'],
                correctAnswer: 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Nível 2: Algoritmos e Estruturas',
    category: 'Algorithms',
    description: 'Aprenda a organizar dados e resolver problemas complexos com eficiência.',
    image: 'ai-ml',
    level: 'Intermediate',
    knowledgeAreas: [
      {
        id: 'ka-algorithms',
        title: 'Algoritmos Fundamentais',
        lessons: [
          {
            id: 'alg-t1',
            title: 'Introdução a Algoritmos',
            type: 'theory',
            content: 'Um algoritmo é uma sequência finita de instruções bem definidas para resolver um problema.',
            quiz: [
              {
                id: 'q-alg1',
                question: 'Qual a principal característica de um algoritmo?',
                options: ['Ser infinito', 'Ser aleatório', 'Ser uma sequência de passos finita', 'Funcionar apenas em Python'],
                correctAnswer: 2
              }
            ]
          }
        ]
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

  for (let i = currentIndex + 1; i < allLessons.length; i++) {
    const lesson = allLessons[i];
    // Retorna a próxima lição, mesmo que não concluída
    return lesson.id;
  }
  return null;
}
