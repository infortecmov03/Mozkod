import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: 'quiz-pf-1',
    title: 'Quiz de Fundamentos 1',
    questions: [
      {
        id: 'q1',
        question: 'Qual tipo de dado é usado para texto?',
        options: ['Integer', 'Boolean', 'String', 'Float'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'quiz-pf-2',
    title: 'Quiz de Fundamentos 2',
    questions: [
      {
        id: 'q1',
        question: 'Qual loop é melhor para iterar sobre os itens de uma lista?',
        options: ['while', 'for', 'do-while', 'if'],
        correctAnswer: 1
      }
    ]
  }
];
