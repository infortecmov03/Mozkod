import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq2",
  title: "Quiz: Garbage Collection",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual Garbage Collector é otimizado para latência ultra-baixa em heaps grandes?",
      options: ["Serial GC", "Parallel GC", "ZGC", "G1GC"],
      correctAnswer: 2
    }
  ]
};