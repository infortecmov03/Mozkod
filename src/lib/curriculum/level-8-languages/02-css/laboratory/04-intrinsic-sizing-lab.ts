import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p4",
  language: "html",
  title: "Projeto Master: Dimensionamento Intrínseco",
  description: "Deixe o conteúdo ditar o tamanho dos elementos.",
  statement: "Defina a largura de um card de perfil usando 'fit-content' com um limite máximo de 400px.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>📏 Conteúdo Inteligente</h3>
    <p>O <code>fit-content</code> é uma técnica de elite que permite que o elemento ocupe apenas o espaço necessário do texto, mas nunca ultrapasse um limite definido.</p>
  `,
  objectives: [
    {
      id: "fit_content",
      description: "Aplique 'width: fit-content' ao card.",
      test: "width: fit-content"
    },
    {
      id: "max_width",
      description: "Adicione 'max-width: 400px' para segurança de layout.",
      test: "max-width: 400px"
    }
  ]
};
