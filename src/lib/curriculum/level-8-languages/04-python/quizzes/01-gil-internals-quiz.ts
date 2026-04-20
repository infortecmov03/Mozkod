
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq1",
  title: "Quiz: CPython e o GIL",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o principal objetivo do Global Interpreter Lock (GIL)?",
      options: [
        "Aumentar a velocidade em CPUs multicore",
        "Garantir a thread-safety da gestão de memória do Python",
        "Compilar o código para linguagem de máquina",
        "Impedir o uso de variáveis globais"
      ],
      correctAnswer: 1
    }
  ]
};
