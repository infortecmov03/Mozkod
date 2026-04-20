import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t7-quiz",
  title: "Quiz: Arrays e Listas",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual é o índice do primeiro elemento de um array?",
      options: ["1", "0", "-1", "Depende da linguagem"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Se um array tem 5 elementos, qual o índice do último elemento?",
      options: ["5", "6", "4", "0"],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "O que acontece se tentares aceder a um índice que não existe num array?",
      options: [
        "O programa cria o índice automaticamente",
        "Retorna 0",
        "Geralmente causa um erro de 'Index Out of Bounds'",
        "O programa apaga o array"
      ],
      correctAnswer: 2
    }
  ]
};