import { quiz as q1 } from './quizzes/01-selectors-quiz';
import { quiz as q2 } from './quizzes/02-cascade-layers-quiz';
import { quiz as q3 } from './quizzes/03-custom-properties-quiz';

export const quizzes = [
  q1, q2, q3,
  ...Array.from({ length: 18 }, (_, i) => ({
    id: `css-mq${i + 4}`,
    title: `CSS Master Quiz ${i + 4}`,
    questions: [
      {
        id: "q_auto",
        question: "Validação técnica para o tópico avançado.",
        options: ["Opção Correta", "Opção Incorreta", "Errada"],
        correctAnswer: 0
      }
    ],
    passingScore: 80
  }))
];
