
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
            quiz: [
              { id: 'q1', question: 'O que é uma variável?', options: ['Um motor', 'Um espaço na memória', 'Um erro'], correctAnswer: 1 }
            ]
          },
          { id: 'pf-t2', title: 'Operadores Aritméticos', content: 'Cálculos básicos...', quiz: [] }
        ],
        practiceExercises: [
          {
            id: 'pf-p1',
            title: 'Prática 1: Variáveis',
            description: 'Vamos declarar as suas primeiras variáveis.',
            objectives: [
              { id: 'obj1', description: 'Declare "nome" como "João"', hint: 'let nome = "João";', validationRegex: 'nome.*=.*"João"' },
              { id: 'obj2', description: 'Declare "idade" como 25', hint: 'let idade = 25;', validationRegex: 'idade.*=.*25' }
            ],
            starterCode: {
              javascript: '// Escreva seu código JS aqui\nlet nome = "";\nlet idade = 0;',
              python: '# Escreva seu código Python aqui\nnome = ""\nidade = 0',
              java: 'public class Main {\n  public static void main(String[] args) {\n    // Código Java\n  }\n}',
              cpp: '#include <iostream>\nint main() {\n  // Código C++\n  return 0;\n}'
            }
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Nível 2: Algoritmos e ED',
    level: 'Intermediate',
    description: 'Organização de dados e lógica complexa.',
    image: 'web-dev',
    knowledgeAreas: [
      {
        id: 'ka-algorithms',
        title: 'Algorithms',
        description: 'Busca e ordenação.',
        supportedLanguages: ['javascript', 'python'],
        theoryLessons: [
          { id: 'alg-t1', title: 'Busca Binária', content: 'Algoritmo de busca eficiente...', quiz: [] }
        ],
        practiceExercises: []
      }
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
