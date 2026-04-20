import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq1",
  title: "Quiz: Arquitetura JVM",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual componente da JVM compila bytecode em código nativo em runtime?",
      options: ["ClassLoader", "Garbage Collector", "JIT Compiler", "Interpreter"],
      correctAnswer: 2
    }
  ]
};