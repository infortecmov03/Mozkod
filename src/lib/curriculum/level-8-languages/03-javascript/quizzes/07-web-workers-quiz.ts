import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq7",
  title: "Quiz: Web Workers e Paralelismo",
  passingScore: 80,
  questions: [
    {
      id: "q7_1",
      question: "Um Web Worker tem acesso direto ao objeto 'window' ou ao 'DOM'?",
      options: [
        "Sim, acesso total",
        "Não, corre num contexto isolado sem acesso ao DOM",
        "Apenas se for um SharedWorker",
        "Apenas em modo de leitura"
      ],
      correctAnswer: 1
    }
  ]
};
