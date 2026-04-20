
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-t3-quiz",
  title: "Quiz: CSS Box Model",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual propriedade adiciona espaço DENTRO da borda de um elemento?",
      options: ["Margin", "Padding", "Border", "Spacing"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "A margem (margin) é o espaço entre a borda e os elementos vizinhos?",
      options: ["Sim", "Não", "Apenas em imagens", "Depende do navegador"],
      correctAnswer: 0
    }
  ]
};
