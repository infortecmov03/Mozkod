
import { quiz as q1 } from './quizzes/01-null-safety-engine-quiz';
import { quiz as q2 } from './quizzes/02-extensions-quiz';
import { quiz as q8 } from './quizzes/08-coroutines-suspension-quiz';
import { quiz as q15 } from './quizzes/15-compiler-plugins-ksp-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 5 }, (_, i) => ({ id: `kt-mq${i + 3}`, title: `Kotlin Quiz ${i + 3}`, questions: [], passingScore: 80 })),
  q8,
  ...Array.from({ length: 6 }, (_, i) => ({ id: `kt-mq${i + 9}`, title: `Kotlin Quiz ${i + 9}`, questions: [], passingScore: 80 })),
  q15,
  ...Array.from({ length: 6 }, (_, i) => ({ id: `kt-mq${i + 16}`, title: `Kotlin Quiz ${i + 16}`, questions: [], passingScore: 80 }))
];
