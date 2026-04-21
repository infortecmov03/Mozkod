import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p13",
  language: "html",
  title: "Projeto Master: Cores Modernas com OKLCH",
  description: "Design com cores mais vibrantes e perceptualmente uniformes.",
  statement: "Redefina a sua variável --primary-color usando o formato oklch().",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🌈 Além do RGB</h3>
    <p>O <code>oklch()</code> é o futuro das cores no CSS. Ele permite acesso a cores que monitores modernos conseguem exibir (P3 gamut) e garante que o contraste seja consistente.</p>
  `,
  objectives: [
    {
      id: "oklch",
      description: "Use a sintaxe oklch(luminosidade chroma matiz).",
      test: "oklch"
    }
  ]
};
