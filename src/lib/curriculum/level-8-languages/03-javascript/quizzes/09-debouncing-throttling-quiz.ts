import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq9",
  title: "Quiz: Debouncing e Throttling",
  passingScore: 80,
  questions: [
    {
      id: "q9_1",
      question: "Qual técnica é preferível para um campo de busca 'type-ahead'?",
      options: ["Throttling", "Debouncing", "Memoization", "Recursão"],
      correctAnswer: 1,
      explanation: "Debouncing aguarda o utilizador parar de digitar para disparar a busca, evitando pedidos excessivos à API."
    }
  ]
};
