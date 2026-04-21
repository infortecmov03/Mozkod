import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "kt-mq2",
  title: "Quiz: Extensions & Delegates",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "As Extension Functions do Kotlin podem aceder a membros privados da classe que estendem?",
      options: [
        "Sim, têm acesso total",
        "Não, são resolvidas estaticamente e respeitam a visibilidade pública",
        "Apenas se estiverem no mesmo ficheiro",
        "Sim, mas apenas em classes 'open'"
      ],
      correctAnswer: 1
    }
  ]
};