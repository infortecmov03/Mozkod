import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t1-quiz",
  title: "Quiz: Variáveis e Tipos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual tipo de dado é usado para armazenar o nome de um utilizador?",
      options: ["Boolean", "String", "Number", "Array"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que acontece se mudarmos o valor de uma variável?",
      options: [
        "O computador desliga",
        "O valor antigo é substituído pelo novo",
        "Criamos uma nova variável automaticamente",
        "Dá erro de compilação sempre"
      ],
      correctAnswer: 1
    }
  ]
};
