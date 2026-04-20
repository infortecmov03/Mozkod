import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t3-quiz",
  title: "Quiz: Strings e I/O",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que é interpolação de strings?",
      options: ["Dividir uma string", "Inserir variáveis dentro de uma string", "Apagar uma string", "Converter para número"],
      correctAnswer: 1
    }
  ]
};
