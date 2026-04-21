
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq14",
  title: "Quiz: Canvas Engineering",
  passingScore: 80,
  questions: [
    {
      id: "q14_1",
      question: "Qual é o principal benefício do uso da API OffscreenCanvas?",
      options: [
        "Desenhar formas geométricas mais perfeitas",
        "Executar o pipeline de renderização numa Web Worker, fora da thread principal",
        "Pode ser impresso mais facilmente",
        "Funciona em browsers sem suporte a JS"
      ],
      correctAnswer: 1
    }
  ]
};
