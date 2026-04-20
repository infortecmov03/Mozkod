
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t1-quiz",
  title: "Quiz: Sistemas Numéricos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual é a base do sistema binário?",
      options: ["Base 10", "Base 2", "Base 16", "Base 8"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que o número 1 representa num circuito eletrónico?",
      options: ["Desligado", "Erro", "Ligado", "Memória"],
      correctAnswer: 2
    }
  ]
};
