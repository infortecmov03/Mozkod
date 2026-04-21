import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p14",
  language: "html",
  title: "Projeto Master: Anchor Positioning",
  description: "Ligue elementos flutuantes a âncoras no documento.",
  statement: "Utilize 'anchor-name' e 'position-anchor' para ligar um tooltip a um botão do seu projeto.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>⚓ Posicionamento Inteligente</h3>
    <p>O Anchor Positioning elimina bibliotecas pesadas como o Popper.js, permitindo que o browser faça o cálculo de posição de popovers e tooltips nativamente.</p>
  `,
  objectives: [
    {
      id: "anchor_name",
      description: "Defina '--my-anchor' no botão usando anchor-name.",
      test: "anchor-name"
    },
    {
      id: "pos_anchor",
      description: "Use 'position-anchor: --my-anchor' no elemento flutuante.",
      test: "position-anchor"
    }
  ]
};
