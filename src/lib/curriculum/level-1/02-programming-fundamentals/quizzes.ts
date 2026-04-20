import { quiz as q1 } from './quizzes/01-variaveis-tipos-quiz';
import { quiz as q2 } from './quizzes/02-operadores-quiz';
import { quiz as q3 } from './quizzes/03-strings-quiz';
import { quiz as q4 } from './quizzes/04-condicionais-quiz';
import { quiz as q5 } from './quizzes/05-loops-quiz';
import { quiz as q6 } from './quizzes/06-funcoes-quiz';
import { quiz as q7 } from './quizzes/07-arrays-quiz';
import { quiz as q8 } from './quizzes/08-objetos-quiz';
import { quiz as q9 } from './quizzes/09-recursao-quiz';
import { quiz as q10 } from './quizzes/10-poo-quiz';
import { quiz as q11 } from './quizzes/11-testes-quiz';
import { quiz as q12 } from './quizzes/12-exception-handling-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12,
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `pf-q${i + 13}`,
    title: `Programming Fundamentals Quiz ${i + 13}`,
    questions: [
      {
        id: "q_auto",
        question: "Pergunta de validação técnica para o tópico " + (i + 13),
        options: ["Opção A (Correta)", "Opção B", "Opção C"],
        correctAnswer: 0
      }
    ],
    passingScore: 70
  }))
];