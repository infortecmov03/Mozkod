import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: 'quiz-web-core-final',
    title: 'Quiz Final: Web Core',
    questions: [
      {
        id: 'q1',
        question: 'Qual tag é usada para o conteúdo principal de uma página?',
        options: ['<main>', '<body>', '<content>', '<article>'],
        correctAnswer: 0
      },
      {
        id: 'q2',
        question: 'Qual propriedade CSS controla o espaçamento fora da borda de um elemento?',
        options: ['padding', 'margin', 'border', 'spacing'],
        correctAnswer: 1
      }
    ]
  }
];
