
import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "rs-mq2",
    title: "Quiz: Ownership",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "O que acontece quando uma variável sai do escopo em Rust?",
        options: ["O GC limpa depois", "A memória é libertada imediatamente (Drop)", "Dá erro de compilação", "O computador trava"],
        correctAnswer: 1
      }
    ]
  }
];
