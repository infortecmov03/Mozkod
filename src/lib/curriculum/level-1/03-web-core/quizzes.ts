import { quiz1 as q1 } from './quizzes/01-estrutura-html-quiz';
import { quiz as q2 } from './theory/quizzes/02-css-seletores-quiz';
import { quiz as q3 } from './quizzes/03-box-model-quiz';
import { quiz as q4 } from './quizzes/04-flexbox-quiz';

export const quizzes = [
  q1, q2, q3, q4,
  ...Array.from({ length: 17 }, (_, i) => ({
    id: `web-q${i + 5}`,
    title: `Web Quiz ${i + 5}`,
    questions: [],
    passingScore: 70
  }))
];