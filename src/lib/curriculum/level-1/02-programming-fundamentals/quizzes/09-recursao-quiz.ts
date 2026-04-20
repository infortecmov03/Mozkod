import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t9-quiz",
  title: "Quiz: Recursão",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que define uma função recursiva?",
      options: ["Uma função que nunca termina", "Uma função que chama a si mesma", "Uma função sem nome"],
      correctAnswer: 1
    }
  ]
};
