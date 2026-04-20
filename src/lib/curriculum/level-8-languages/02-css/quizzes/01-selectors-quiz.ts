
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq1",
  title: "Quiz: Seletores e Performance",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual seletor tem maior especificidade?",
      options: [
        ".minha-classe",
        "#meu-id",
        "div",
        ":where(#meu-id)"
      ],
      correctAnswer: 1
    }
  ]
};
