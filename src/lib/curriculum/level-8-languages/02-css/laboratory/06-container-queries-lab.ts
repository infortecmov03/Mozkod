import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p6",
  language: "html",
  title: "Projeto Master: Container Queries",
  description: "Responsividade baseada no contexto do componente.",
  statement: "Transforme o card em um 'container' e mude a cor do título quando o card tiver mais de 350px de largura.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>📦 Adeus Media Queries</h3>
    <p>As <strong>Container Queries</strong> permitem que um componente mude de estilo baseando-se no espaço que ele tem disponível, não no tamanho da janela do browser.</p>
  `,
  objectives: [
    {
      id: "container_type",
      description: "Defina 'container-type: inline-size' no elemento pai.",
      test: "container-type: inline-size"
    },
    {
      id: "container_query",
      description: "Use a regra '@container (min-width: 350px)' para aplicar estilos.",
      test: "@container"
    }
  ]
};
