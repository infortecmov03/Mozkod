
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq15",
  title: "Quiz: JVM ClassLoaders",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o ClassLoader no topo da hierarquia (root)?",
      options: ["System ClassLoader", "Platform ClassLoader", "Bootstrap ClassLoader", "Application ClassLoader"],
      correctAnswer: 2
    }
  ]
};
