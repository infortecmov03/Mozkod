import { quiz as q1 } from './quizzes/01-gil-internals-quiz';
import { quiz as q2 } from './quizzes/02-metaprogramming-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `py-mq${i + 3}`,
    title: `Python Master Quiz ${i + 3}`,
    questions: [],
    passingScore: 80
  }))
];