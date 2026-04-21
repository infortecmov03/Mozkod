import { quiz as q1 } from './quizzes/01-jvm-architecture-quiz';

export const quizzes = [
  q1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `jv-mq${i + 2}`,
    title: `Java Master Quiz ${i + 2}`,
    questions: [],
    passingScore: 80
  }))
];