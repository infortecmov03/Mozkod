import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p9",
  language: "html",
  title: "Projeto Master: High-Performance Animations",
  description: "Crie animações que não travam o browser.",
  statement: "Crie um keyframe de 'fade-in' usando apenas transform e opacity para garantir 60 FPS.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🏎️ Animação de Silício</h3>
    <p>Animar <code>width</code> ou <code>top</code> causa 'Reflow', o que é lento. Animar <code>transform</code> e <code>opacity</code> usa apenas o chip gráfico (GPU), mantendo a fluidez total.</p>
  `,
  objectives: [
    {
      id: "transform",
      description: "Use 'transform: translateY(...)' no seu keyframe.",
      test: "transform"
    },
    {
      id: "will_change",
      description: "Adicione 'will-change: transform' para otimização prévia do browser.",
      test: "will-change"
    }
  ]
};
