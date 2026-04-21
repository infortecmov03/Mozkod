import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p5",
  language: "html",
  title: "Projeto Master: Alinhamento com Subgrid",
  description: "Sincronize grelhas internas com o layout pai.",
  statement: "No seu container de cards, use 'grid-template-rows: subgrid' para alinhar os títulos de todos os cards.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>📐 Perfeição Geométrica</h3>
    <p>O <code>subgrid</code> resolve o problema clássico de alinhar elementos dentro de cards diferentes (como títulos de tamanhos variados) sem hacks de altura fixa.</p>
  `,
  objectives: [
    {
      id: "subgrid",
      description: "Declare 'grid-template-rows: subgrid' no elemento filho do grid.",
      test: "grid-template-rows: subgrid"
    }
  ]
};
