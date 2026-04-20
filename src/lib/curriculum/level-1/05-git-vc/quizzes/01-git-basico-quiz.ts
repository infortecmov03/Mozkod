
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "git-t1-quiz",
  title: "Quiz: Fundamentos de Git",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que é o Git?",
      options: [
        "Uma linguagem de programação",
        "Um sistema de controlo de versão",
        "Um editor de texto",
        "Um navegador web"
      ],
      correctAnswer: 1
    }
  ]
};
