import { quiz as q1 } from './quizzes/01-sistemas-numericos-quiz';
import { quiz as q2 } from './quizzes/02-logica-booleana-quiz';
import { quiz as q3 } from './quizzes/03-algebra-booleana-quiz';
import { quiz as q4 } from './quizzes/04-arquitetura-quiz';
import { quiz as q5 } from './quizzes/05-memoria-quiz';
import { quiz as q6 } from './quizzes/06-algoritmos-quiz';
import { quiz as q7 } from './quizzes/07-complexidade-quiz';
import { quiz as q8 } from './quizzes/08-paradigmas-quiz';
import { quiz as q9 } from './quizzes/09-floating-point-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9,
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `cs-q${i + 10}`,
    title: `CS Core Quiz ${i + 10}`,
    questions: [
      {
        id: "q_auto",
        question: "Pergunta de validação técnica para o tópico " + (i + 10),
        options: ["Opção A (Correta)", "Opção B", "Opção C"],
        correctAnswer: 0
      }
    ],
    passingScore: 70
  }))
];