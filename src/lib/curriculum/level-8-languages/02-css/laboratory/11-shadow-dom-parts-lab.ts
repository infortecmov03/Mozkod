import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p11",
  language: "html",
  title: "Projeto Master: Estilizando Shadow DOM com ::part",
  description: "Fure a barreira do encapsulamento de forma segura.",
  statement: "No seu CSS global, estilize o componente de perfil usando o pseudo-elemento ::part(action-button).",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🌑 Atravessando a Sombra</h3>
    <p>O <code>::part</code> permite que o autor de um Web Component exponha partes específicas para serem estilizadas por quem usa o componente, mantendo o resto isolado.</p>
  `,
  objectives: [
    {
      id: "part_selector",
      description: "Use o seletor 'cwm-profile::part(action-button)' no seu style global.",
      test: "::part"
    }
  ]
};
