
import { quiz as q1 } from './quizzes/01-selectors-quiz';
export const quizzes = [
  q1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `css-mq${i + 2}`,
    title: `CSS Master Quiz ${i + 2}`,
    questions: [],
    passingScore: 80
  }))
];
