import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t4-quiz",
  title: "Quiz: Arquitetura de Computadores",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual componente é responsável por realizar cálculos matemáticos?",
      options: ["RAM", "Disco Rígido", "ALU (Unidade Lógica e Aritmética)", "Monitor"],
      correctAnswer: 2
    }
  ]
};