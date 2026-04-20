import { quiz as q1 } from './quizzes/01-sistemas-numericos-quiz';
import { quiz as q2 } from './quizzes/02-logica-booleana-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 13 }, (_, i) => ({
    id: `cs-q${i + 3}`,
    title: `CS Core Quiz ${i + 3}`,
    questions: [],
    passingScore: 70
  }))
];