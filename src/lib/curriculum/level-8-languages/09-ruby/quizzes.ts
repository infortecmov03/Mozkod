
import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "rb-mq2",
    title: "Quiz: Ruby Objects",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Em Ruby, o número 5 é um objeto?",
        options: ["Sim", "Não", "Apenas se for variável", "Depende da versão"],
        correctAnswer: 0
      }
    ]
  }
];
