import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq6",
  title: "Quiz: ESM e Tree Shaking",
  passingScore: 80,
  questions: [
    {
      id: "q6_1",
      question: "Qual a condição técnica para o 'Tree Shaking' funcionar eficientemente?",
      options: [
        "O código deve estar em formato CommonJS",
        "Os módulos devem ser estáticos (ESM) para análise em tempo de build",
        "O servidor deve ser rápido",
        "O browser deve suportar Java"
      ],
      correctAnswer: 1
    }
  ]
};
