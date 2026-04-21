import { quiz as q1 } from './quizzes/01-null-safety-engine-quiz';
import { quiz as q2 } from './quizzes/02-extensions-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `kt-mq${i + 3}`,
    title: `Kotlin Master Quiz ${i + 3}`,
    questions: [],
    passingScore: 80
  }))
];