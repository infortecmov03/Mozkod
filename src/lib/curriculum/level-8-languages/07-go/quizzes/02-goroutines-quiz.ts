import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "go-mq2",
  title: "Quiz: Goroutines & Scheduler",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Qual o tamanho inicial aproximado da stack de uma Goroutine?",
      options: ["2 MB", "2 KB", "64 KB", "512 bytes"],
      correctAnswer: 1,
      explanation: "A stack pequena (2KB) permite a criação massiva de goroutines, crescendo dinamicamente conforme necessário."
    }
  ]
};