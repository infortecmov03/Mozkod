
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p9",
  language: "html",
  title: "Projeto Master: Prioridade e Lazy Loading",
  description: "Controle o pipeline de descarregamento de recursos.",
  statement: "Aplique fetchpriority='high' na sua imagem principal e loading='lazy' numa imagem secundária.",
  isProjectPart: true,
  youtubeVideoId: "v4cd1O4zkGw",
  template: ``,
  detailedExplanation: `
    <h3>⚡ Engenharia de Performance</h3>
    <p>O <code>fetchpriority</code> é a ferramenta master para garantir que o LCP aconteça o mais rápido possível no browser do utilizador.</p>
  `,
  objectives: [
    { id: "priority", description: "Usar fetchpriority='high'", test: "fetchpriority=\"high\"" },
    { id: "lazy", description: "Usar loading='lazy'", test: "loading=\"lazy\"" }
  ]
};
