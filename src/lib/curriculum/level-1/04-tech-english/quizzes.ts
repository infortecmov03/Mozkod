
import { quiz1 as q1 } from './quizzes/01-basic-vocab-quiz';

export const quizzes = [
  q1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `eng-q${i + 2}`,
    title: `Tech English Quiz ${i + 2}`,
    questions: [
      {
        id: "q_auto",
        question: "Qual o termo em Inglês para 'Pedido' (Browser -> Server)?",
        options: ["Response", "Request", "Connection", "Header"],
        correctAnswer: 1
      }
    ],
    passingScore: 70
  }))
];
