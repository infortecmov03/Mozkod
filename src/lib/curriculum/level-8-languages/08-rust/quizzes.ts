
import { quiz as q1 } from './quizzes/01-ownership-semantics-quiz';
import { quiz as q2 } from './quizzes/02-borrow-checker-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `rs-mq${i + 3}`,
    title: `Rust Master Quiz ${i + 3}`,
    questions: [],
    passingScore: 80
  }))
];
