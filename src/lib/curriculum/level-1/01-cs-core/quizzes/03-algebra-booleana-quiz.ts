import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t3-quiz",
  title: "Quiz: Álgebra Booleana",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o resultado de 'A OR 0'?",
      options: ["0", "1", "A", "Não se pode calcular"],
      correctAnswer: 2
    }
  ]
};