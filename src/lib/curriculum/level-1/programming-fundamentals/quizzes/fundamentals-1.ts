import type { Quiz } from '../../../types';

export const quiz: Quiz = {
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
};
