import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "pf-t5-quiz",
  title: "Quiz: Repetições",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual loop é mais indicado quando sabemos o número de repetições?",
      options: ["While", "Do While", "For", "Infinity"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "O que acontece se a condição de um 'while' nunca for falsa?",
      options: [
        "O programa para imediatamente",
        "O computador explode",
        "Cria-se um loop infinito",
        "O programa ignora o loop"
      ],
      correctAnswer: 2
    }
  ]
};