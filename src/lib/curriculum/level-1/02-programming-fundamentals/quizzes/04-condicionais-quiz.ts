import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "pf-t4-quiz",
  title: "Quiz: Tomada de Decisão",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual palavra-chave é usada para iniciar uma condição?",
      options: ["while", "if", "for", "switch"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O bloco 'else' é obrigatório num 'if'?",
      options: ["Sim", "Não", "Apenas em Python", "Apenas em Java"],
      correctAnswer: 1
    }
  ]
};