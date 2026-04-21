import { quiz as q1 } from './quizzes/01-interfaces-quiz';
import { quiz as q2 } from './quizzes/02-goroutines-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `go-mq${i + 3}`,
    title: `Go Master Quiz ${i + 3}`,
    questions: [],
    passingScore: 80
  }))
];