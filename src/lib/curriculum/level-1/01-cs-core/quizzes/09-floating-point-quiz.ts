import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t9-quiz",
  title: "Quiz: Precisão Numérica",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o nome da norma internacional que define a aritmética de ponto flutuante?",
      options: ["ISO 9001", "ASCII", "IEEE 754", "UTF-8"],
      correctAnswer: 2,
      explanation: "IEEE 754 é o padrão técnico usado por Intel, AMD, ARM e Apple Silicon."
    },
    {
      id: "q2",
      question: "Por que alguns decimais simples têm erros em binário?",
      options: [
        "Porque o computador é lento",
        "Porque certas frações decimais resultam em dízimas infinitas em base 2",
        "Porque a memória RAM está suja",
        "Porque o Windows não suporta números quebrados"
      ],
      correctAnswer: 1,
      explanation: "Tal como 1/3 é 0.333... em base 10, o 0.1 decimal não tem representação finita em binário."
    }
  ]
};