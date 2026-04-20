
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq2",
  title: "Quiz: Metaprogramação",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual método dunder é chamado para criar uma nova instância de uma classe (antes do __init__)?",
      options: ["__init__", "__create__", "__new__", "__build__"],
      correctAnswer: 2
    }
  ]
};
