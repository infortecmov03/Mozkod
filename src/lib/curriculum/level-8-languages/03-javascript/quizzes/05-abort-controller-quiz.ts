import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq5",
  title: "Quiz: AbortController e Sinais",
  passingScore: 80,
  questions: [
    {
      id: "q5_1",
      question: "Como o AbortController comunica o cancelamento a um pedido Fetch?",
      options: [
        "Enviando um sinal de rede especial",
        "Através da propriedade 'signal' passada na configuração do fetch",
        "Fechando a aba do navegador",
        "Limpando o cache do sistema"
      ],
      correctAnswer: 1
    }
  ]
};
