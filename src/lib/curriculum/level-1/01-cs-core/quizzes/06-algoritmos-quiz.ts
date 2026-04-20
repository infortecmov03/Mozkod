import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t6-quiz",
  title: "Quiz: Algoritmos Fundamentais",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Um algoritmo pode ser infinito?",
      options: ["Sim", "Não, deve ter um fim", "Depende do computador", "Apenas em IA"],
      correctAnswer: 1
    }
  ]
};