
import { quiz as q1 } from './quizzes/01-prototypal-inheritance-quiz';
import { quiz as q2 } from './quizzes/02-event-loop-quiz';
import { quiz as q8 } from './quizzes/08-event-loop-internals-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 5 }, (_, i) => ({ id: `js-mq${i + 3}`, title: `JS Master Quiz ${i + 3}`, questions: [], passingScore: 80 })),
  q8,
  ...Array.from({ length: 13 }, (_, i) => ({ id: `js-mq${i + 9}`, title: `JS Master Quiz ${i + 9}`, questions: [], passingScore: 80 }))
];
