import { quiz1 as q1 } from './quizzes/01-estrutura-html-quiz';
import { quiz as q2 } from './quizzes/02-css-selectors-quiz';
import { quiz as q3 } from './quizzes/03-box-model-quiz';
import { quiz as q4 } from './quizzes/04-flexbox-quiz';
import { quiz as q5 } from './quizzes/05-grid-quiz';
import { quiz as q6 } from './quizzes/06-responsividade-quiz';
import { quiz as q7 } from './quizzes/07-forms-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7,
  ...Array.from({ length: 14 }, (_, i) => ({
    id: `web-q${i + 8}`,
    title: `Web Core Quiz ${i + 8}`,
    questions: [],
    passingScore: 70
  }))
];
