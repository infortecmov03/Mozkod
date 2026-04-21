import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p6",
  language: "html",
  title: "Laboratório Master: Renderização Programática",
  description: "Configure uma superfície de desenho Canvas.",
  statement: "Crie um elemento <canvas> com o id 'game-viewport' e defina explicitamente a sua largura para 800 e altura para 600.",
  template: `<!-- Defina a área do canvas aqui -->
`,
  detailedExplanation: `
    <h3>🎮 Contexto de Desenho</h3>
    <p>Diferente de outros elementos, a largura e altura do canvas devem ser definidas nos atributos da tag para evitar distorções de escala que acontecem se usares apenas CSS.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Usar tag canvas",
      test: "<canvas"
    },
    {
      id: "obj2",
      description: "Definir id game-viewport",
      test: "id=\"game-viewport\""
    },
    {
      id: "obj3",
      description: "Definir dimensões 800x600",
      test: "width=\"800\" height=\"600\""
    }
  ]
};
