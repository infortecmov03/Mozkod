import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "go-mq2",
  title: "Quiz: Goroutines & GMP Scheduler",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o benefício principal das Goroutines sobre as Threads do SO?",
      options: [
        "Consomem menos memória (cerca de 2KB inicial) e têm um stack dinâmico",
        "Correm apenas em CPUs da Intel",
        "Não podem ser pausadas pelo SO",
        "Substituem o uso de interfaces"
      ],
      correctAnswer: 0
    },
    {
      id: "q2",
      question: "No modelo GMP do Go, o que representa a letra 'P'?",
      options: [
        "O Processador físico real",
        "O Contexto de execução (Processor) que gere as filas de goroutines",
        "O Protocolo de rede",
        "O Ponteiro de memória"
      ],
      correctAnswer: 1
    }
  ]
};
