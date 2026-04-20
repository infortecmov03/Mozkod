
import { quiz as q1 } from './quizzes/01-semantics-quiz';
export const quizzes = [
  q1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `html-mq${i + 2}`,
    title: `HTML Master Quiz ${i + 2}`,
    questions: [],
    passingScore: 80
  }))
];
