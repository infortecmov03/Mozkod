
import { quiz as q1 } from './quizzes/01-jvm-architecture-quiz';
import { quiz as q2 } from './quizzes/02-garbage-collection-quiz';
import { quiz as q3 } from './quizzes/03-virtual-threads-quiz';

export const quizzes = [
  q1, q2, q3,
  ...Array.from({ length: 18 }, (_, i) => ({
    id: `jv-mq${i + 4}`,
    title: `Java Master Quiz ${i + 4}`,
    questions: [],
    passingScore: 80
  }))
];
