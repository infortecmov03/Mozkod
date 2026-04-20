
export type LessonType = 'theory' | 'lab' | 'quiz';

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

export type Module = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessons: Lesson[];
  progress?: number;
};

export const modules: Module[] = [
  {
    id: 'cs-basics',
    title: 'Fundamentos de Algoritmos',
    category: 'CS Core',
    description: 'Domine a lógica por trás de cada linha de código.',
    image: 'cs-core',
    level: 'Beginner',
    lessons: [
      {
        id: 'alg-intro',
        title: 'O que é um Algoritmo?',
        type: 'theory',
        content: 'Um algoritmo é uma sequência finita de passos bem definidos que visam resolver um problema específico. Pense nele como uma receita de bolo: você tem os ingredientes (entrada) e os passos a seguir para obter o resultado (saída).'
      },
      {
        id: 'alg-quiz-1',
        title: 'Verificação de Conceitos',
        type: 'quiz',
        content: 'Vamos testar o que você aprendeu sobre a definição básica de algoritmos.',
        quiz: [
          {
            id: 'q1',
            question: 'Qual das alternativas melhor define um algoritmo?',
            options: [
              'Um tipo de hardware de computador',
              'Uma sequência finita de passos para resolver um problema',
              'Uma linguagem de programação específica',
              'Um erro de software'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'alg-lab-1',
        title: 'Operações Básicas',
        type: 'lab',
        language: 'javascript',
        code: 'function somar(a, b) {\n  // Escreva seu código aqui\n  \n}',
        solution: 'return a + b',
        content: 'Complete a função para que ela retorne a soma de dois números passados como argumentos.'
      }
    ]
  },
  {
    id: 'web-foundations',
    title: 'Web Core: HTML5 & CSS3',
    category: 'Web Development',
    description: 'Construa a estrutura e o estilo da web moderna.',
    image: 'web-dev',
    level: 'Beginner',
    lessons: [
      {
        id: 'html-intro',
        title: 'Estrutura do HTML',
        type: 'theory',
        content: 'O HTML é a espinha dorsal de qualquer site. Ele define o conteúdo e a estrutura usando tags.'
      }
    ]
  }
];
