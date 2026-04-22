import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t16-quiz",
  title: "Quiz: CPU Pipelining",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o principal objetivo do Pipelining?",
      options: [
        "Aumentar o tamanho do disco",
        "Permitir que a CPU execute partes de várias instruções ao mesmo tempo",
        "Mudar a cor do sistema operativo",
        "Reduzir o aquecimento da bateria"
      ],
      correctAnswer: 1,
      explanation: "O pipeline aumenta a vazão (throughput) de instruções por segundo."
    },
    {
      id: "q2",
      question: "O que acontece num 'Branch Misprediction'?",
      options: [
        "A CPU acelera",
        "O pipeline tem de ser esvaziado e reiniciado, perdendo tempo",
        "O ecrã pisca",
        "O dado é guardado no Google Drive"
      ],
      correctAnswer: 1,
      explanation: "Se a CPU 'adivinha' mal o caminho do código, o trabalho em progresso no pipeline é desperdiçado."
    }
  ]
};