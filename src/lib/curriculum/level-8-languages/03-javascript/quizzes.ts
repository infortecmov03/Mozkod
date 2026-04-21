import { quiz as q1 } from './quizzes/01-prototypal-inheritance-quiz';
import { quiz as q2 } from './quizzes/02-event-loop-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `js-mq${i + 3}`,
    title: `JS Master Quiz ${i + 3}`,
    questions: [
      {
        id: "q_auto",
        question: "Validação técnica para o tópico avançado de JavaScript.",
        options: ["Opção Correta", "Incorreta", "Errada"],
        correctAnswer: 0
      }
    ],
    passingScore: 80
  }))
];
