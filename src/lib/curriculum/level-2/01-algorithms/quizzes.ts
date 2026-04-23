
import { quiz as q1 } from './quizzes/01-big-o-quiz';
import { quiz as q2 } from './quizzes/02-binary-search-quiz';
import { quiz as q3 } from './quizzes/03-sorting-basic-quiz';
import { quiz as q4 } from './quizzes/04-insertion-sort-quiz';
import { quiz as q5 } from './quizzes/05-merge-sort-quiz';
import { quiz as q6 } from './quizzes/06-quick-sort-quiz';
import { quiz as q7 } from './quizzes/07-heap-sort-quiz';
import { quiz as q8 } from './quizzes/08-recursion-master-quiz';
import { quiz as q9 } from './quizzes/09-greedy-quiz';
import { quiz as q10 } from './quizzes/10-dp-memoization-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10,
  ...Array.from({ length: 11 }, (_, i) => ({
    id: `alg-q${i + 11}`,
    title: `Algorithm Quiz ${i + 11}`,
    questions: [
      {
        id: "q_auto",
        question: "Validação técnica para o tópico avançado de algoritmos " + (i + 11),
        options: ["Opção A (Correta)", "Opção B", "Opção C"],
        correctAnswer: 0
      }
    ],
    passingScore: 70
  }))
];
