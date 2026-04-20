import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t5-quiz",
  title: "Quiz: Memória e Armazenamento",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que acontece aos dados na RAM quando o computador é desligado?",
      options: ["São guardados no disco", "São perdidos", "Ficam na nuvem", "São comprimidos"],
      correctAnswer: 1
    }
  ]
};