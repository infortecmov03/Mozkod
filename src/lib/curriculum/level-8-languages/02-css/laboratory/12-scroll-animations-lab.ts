import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p12",
  language: "html",
  title: "Projeto Master: Scroll-driven Animations",
  description: "Animações sincronizadas com a rolagem da página.",
  statement: "Utilize 'animation-timeline: scroll()' para fazer uma barra de progresso no topo da página.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>📜 Rolo do Tempo</h3>
    <p>Esta é uma funcionalidade de elite que elimina a necessidade de listeners de scroll em JavaScript, permitindo animações suaves processadas diretamente pelo motor de renderização.</p>
  `,
  objectives: [
    {
      id: "scroll_timeline",
      description: "Adicione 'animation-timeline: scroll()' ao elemento da barra.",
      test: "animation-timeline: scroll"
    }
  ]
};
