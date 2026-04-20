import { quiz as q1 } from './quizzes/01-ownership-deep-dive-quiz';
export const quizzes = [
  q1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `rs-mq${i + 2}`,
    title: `Rust Quiz ${i + 2}`,
    questions: [],
    passingScore: 80
  }))
];