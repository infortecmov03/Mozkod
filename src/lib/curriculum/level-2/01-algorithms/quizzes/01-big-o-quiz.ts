import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "alg-q1",
  title: "Quiz: Notação Big O",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual complexidade representa um algoritmo que divide o problema ao meio a cada passo?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "Se um algoritmo tem dois loops aninhados que percorrem a lista N, qual o Big O?",
      options: ["O(n)", "O(2n)", "O(n²)", "O(log n)"],
      correctAnswer: 2
    }
  ]
};
