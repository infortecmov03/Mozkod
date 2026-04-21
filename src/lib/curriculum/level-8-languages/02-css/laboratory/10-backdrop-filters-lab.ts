import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p10",
  language: "html",
  title: "Projeto Master: Glassmorphism e Backdrop",
  description: "Crie interfaces modernas com transparência e desfoque.",
  statement: "Aplique um 'backdrop-filter: blur(10px)' ao seu cabeçalho fixo (sticky header).",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>💎 Efeito Vidro</h3>
    <p>O <code>backdrop-filter</code> aplica efeitos ao que está ATRÁS do elemento, criando a ilusão de profundidade e sofisticação típica de sistemas como o iOS e o macOS.</p>
  `,
  objectives: [
    {
      id: "blur",
      description: "Aplique o desfoque de fundo com backdrop-filter.",
      test: "backdrop-filter: blur"
    },
    {
      id: "transparency",
      description: "Certifique-se de que o background tem um canal alpha (ex: rgba ou hsla).",
      test: "rgba"
    }
  ]
};
