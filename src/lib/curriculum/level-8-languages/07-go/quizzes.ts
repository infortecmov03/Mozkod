
import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "go-mq4",
    title: "Quiz: Concorrência em Go",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual o tamanho inicial aproximado de uma Goroutine?",
        options: ["2KB", "2MB", "1MB", "512KB"],
        correctAnswer: 0
      }
    ]
  }
];
