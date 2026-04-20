import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t11-quiz",
  title: "Quiz: Testes e Debugging",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que é um 'Breakpoint' no debugging?",
      options: ["Um erro fatal", "Um ponto onde o código pausa para inspeção", "Uma ferramenta de design"],
      correctAnswer: 1
    }
  ]
};
