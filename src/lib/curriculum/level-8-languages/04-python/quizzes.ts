
import { quiz as q1 } from './quizzes/01-gil-internals-quiz';
import { quiz as q2 } from './quizzes/02-metaprogramming-quiz';
import { quiz as q3 } from './quizzes/03-asyncio-quiz';
import { quiz as q4 } from './quizzes/04-memory-management-quiz';
import { quiz as q5 } from './quizzes/05-fastapi-scaling-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5,
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `py-mq${i + 6}`,
    title: `Python Master Quiz ${i + 6}`,
    questions: [],
    passingScore: 80
  }))
];
