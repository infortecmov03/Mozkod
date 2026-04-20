
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t1-quiz",
  title: "Quiz: Sistemas Numéricos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual é a base fundamental do sistema que os computadores usam?",
      options: ["Base 10", "Base 2 (Binário)", "Base 16", "Base 8"],
      correctAnswer: 1,
      explanation: "Os computadores operam com circuitos eletrônicos que possuem dois estados (ligado/desligado), o que corresponde perfeitamente à Base 2 ou sistema binário."
    },
    {
      id: "q2",
      question: "O que representa o número 1 num circuito digital?",
      options: ["Desligado", "Ligado", "Erro", "Aguardando"],
      correctAnswer: 1,
      explanation: "Convencionalmente, o número 1 representa a presença de tensão elétrica (estado ligado), enquanto o 0 representa a ausência."
    },
    {
      id: "q3",
      question: "Quantos bits são necessários para representar o número 5?",
      options: ["1 bit", "2 bits", "3 bits", "4 bits"],
      correctAnswer: 2,
      explanation: "O número 5 em binário é 101. Como existem 3 dígitos, precisamos de pelo menos 3 bits."
    }
  ]
};
