import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p2",
  language: "html",
  title: "Projeto Master: Cascade Layers (@layer)",
  description: "Organize a prioridade de estilos de forma arquitetural.",
  statement: "Crie três camadas (@layer): 'reset', 'base' e 'components', e mova a variável --primary-color para a camada 'base'.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🧱 Blindagem da Cascata</h3>
    <p>O <code>@layer</code> permite que definas quem ganha a luta da especificidade antes mesmo de escreveres uma classe. É a ferramenta definitiva para grandes Design Systems.</p>
  `,
  objectives: [
    {
      id: "layer_def",
      description: "Defina a ordem das camadas no topo do seu style.",
      hint: "@layer reset, base, components;",
      test: "@layer reset, base, components"
    },
    {
      id: "layer_wrap",
      description: "Envolva as variáveis de root na camada 'base'.",
      hint: "@layer base { :root { ... } }",
      test: "@layer base"
    }
  ]
};
