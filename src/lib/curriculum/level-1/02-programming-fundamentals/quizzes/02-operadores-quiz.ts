import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t2-quiz",
  title: "Quiz: Operadores",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual operador é usado para verificar a igualdade de valor e tipo em JavaScript?",
      options: ["==", "===", "=", "!="],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual o resultado de 10 % 3?",
      options: ["3", "1", "0", "3.33"],
      correctAnswer: 1
    }
  ]
};
