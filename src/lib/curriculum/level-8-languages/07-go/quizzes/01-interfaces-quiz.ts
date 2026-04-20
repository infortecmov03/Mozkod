
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "go-mq1",
  title: "Quiz: Go Interfaces",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Como um tipo em Go satisfaz uma interface?",
      options: [
        "Usando a keyword 'implements'",
        "Registando o tipo num ficheiro XML",
        "Implementando todos os métodos definidos na interface",
        "Apenas tipos primitivos podem satisfazer interfaces"
      ],
      correctAnswer: 2
    }
  ]
};
