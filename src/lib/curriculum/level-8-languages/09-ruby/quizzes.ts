import { quiz as q1 } from './quizzes/01-blocks-procs-lambdas-quiz';
import { quiz as q2 } from './quizzes/02-everything-is-object-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `rb-mq${i + 3}`,
    title: `Ruby Master Quiz ${i + 3}`,
    questions: [],
    passingScore: 80
  }))
];
