
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "web-t4-quiz",
  title: "Quiz: CSS Flexbox",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual comando ativa o modelo Flexbox num container?",
      options: ["display: flex", "position: flex", "float: left", "layout: grid"],
      correctAnswer: 0
    },
    {
      id: "q2",
      question: "Qual propriedade alinha os itens no eixo principal (horizontal por padrão)?",
      options: ["align-items", "justify-content", "flex-direction", "gap"],
      correctAnswer: 1
    }
  ]
};
