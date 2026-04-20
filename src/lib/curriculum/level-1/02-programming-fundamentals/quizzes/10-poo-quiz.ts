import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t10-quiz",
  title: "Quiz: Introdução à POO",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que é uma 'Classe' na POO?",
      options: ["Um objeto vivo", "Um molde ou planta para criar objetos", "Uma variável simples"],
      correctAnswer: 1
    }
  ]
};
