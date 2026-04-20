
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "go-mq10",
  title: "Quiz: Go Scheduler",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que representa o 'P' no modelo GMP?",
      options: ["Um processo do SO", "Um ponteiro de memória", "Um processador lógico (contexto)", "Uma porta de rede"],
      correctAnswer: 2
    }
  ]
};
