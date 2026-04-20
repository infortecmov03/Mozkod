import { quiz as q1 } from './quizzes/01-null-safety-internals-quiz';
export const quizzes = [
  q1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `kt-mq${i + 2}`,
    title: `Kotlin Quiz ${i + 2}`,
    questions: [],
    passingScore: 80
  }))
];