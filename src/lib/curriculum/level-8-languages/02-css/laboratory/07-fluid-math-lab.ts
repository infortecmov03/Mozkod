import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p7",
  language: "html",
  title: "Projeto Master: Tipografia Fluida com clamp()",
  description: "Elimine a necessidade de múltiplas media queries para fontes.",
  statement: "Defina o tamanho da fonte do h1 usando clamp() com valores entre 1.5rem e 4rem.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🧮 Matemática Visual</h3>
    <p>O <code>clamp(min, ideal, max)</code> cria uma transição suave e automática de tamanho, garantindo que o seu título seja legível tanto num relógio inteligente como num ecrã 4K.</p>
  `,
  objectives: [
    {
      id: "clamp",
      description: "Aplique 'font-size: clamp(...)' ao título h1.",
      test: "font-size: clamp"
    }
  ]
};
