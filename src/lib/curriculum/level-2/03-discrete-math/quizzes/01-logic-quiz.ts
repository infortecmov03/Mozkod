import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "math-q1",
  title: "Quiz: Lógica Proposicional",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o valor de verdade de (V ∨ F) ∧ ¬F?",
      options: ["Verdadeiro", "Falso", "Indeterminado", "Erro"],
      correctAnswer: 0
    },
    {
      id: "q2",
      question: "A frase 'Se 1+1=3, então o céu é verde' é logicamente:",
      options: ["Verdadeira", "Falsa", "Um paradoxo", "Inválida"],
      correctAnswer: 0
    }
  ]
};
