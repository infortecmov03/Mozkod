import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t8-quiz",
  title: "Quiz: Paradigmas",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual paradigma foca em descrever 'O QUE' deve ser feito em vez de 'COMO'?",
      options: ["Imperativo", "Declarativo", "Procedural", "Nenhum"],
      correctAnswer: 1
    }
  ]
};