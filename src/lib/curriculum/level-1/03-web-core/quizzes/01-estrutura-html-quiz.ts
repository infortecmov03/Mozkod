
import type { Quiz } from '../../types';

export const quiz1: Quiz = {
  id: "web-t1-quiz",
  title: "Quiz: Estrutura HTML5",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que significa a sigla HTML?",
      options: [
        "HyperText Markup Language",
        "High Tech Modern Language",
        "Hyper Tool Maker Line",
        "Home Tool Markup Link"
      ],
      correctAnswer: 0
    },
    {
      id: "q2",
      question: "Qual tag é usada para definir o título principal de uma página?",
      options: ["<p>", "<div>", "<h1>", "<span>"],
      correctAnswer: 2
    }
  ]
};
