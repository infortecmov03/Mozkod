import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p11",
  language: "html",
  title: "Projeto Master: Gráficos Vetoriais Acessíveis",
  description: "Integre SVGs complexos mantendo a semântica correta.",
  statement: "Adicione um ícone SVG ao seu cabeçalho e use o atributo 'role' para o browser identificá-lo como uma imagem.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>📐 Vetores Semânticos</h3>
    <p>Para o browser e leitores de ecrã, um SVG é apenas código XML. Devemos explicitamente declarar o seu papel (role) e fornecer um título interno para acessibilidade.</p>
  `,
  objectives: [
    {
      id: "svg_role",
      description: "Adicione role='img' à tag <svg>.",
      hint: "<svg role=\"img\"></svg>",
      test: "role=\"img\""
    },
    {
      id: "svg_title",
      description: "Inclua uma tag <title> dentro do SVG para descrever o ícone.",
      hint: "<svg><title>Logo</title>...</svg>",
      test: "<title>"
    }
  ]
};
