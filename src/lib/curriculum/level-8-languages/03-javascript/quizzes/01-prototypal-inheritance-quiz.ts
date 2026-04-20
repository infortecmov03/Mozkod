
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq1",
  title: "Quiz: Prototypal Inheritance",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Onde o JavaScript procura uma propriedade se ela não estiver no objeto atual?",
      options: [
        "No ficheiro HTML",
        "Na base de dados",
        "Na cadeia de protótipos (__proto__)",
        "No servidor"
      ],
      correctAnswer: 2
    }
  ]
};
