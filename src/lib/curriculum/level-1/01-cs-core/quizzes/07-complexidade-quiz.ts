import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t7-quiz",
  title: "Quiz: Complexidade",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual complexidade representa um tempo que não muda, independentemente do número de dados?",
      options: ["O(n)", "O(n²)", "O(1)", "O(log n)"],
      correctAnswer: 2
    }
  ]
};