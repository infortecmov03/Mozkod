
import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "jv-mq1",
    title: "Quiz: JVM Internals",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual área da memória JVM é usada para armazenar variáveis locais?",
        options: ["Heap", "Method Area", "Stack", "Native Stack"],
        correctAnswer: 2
      }
    ]
  }
];
