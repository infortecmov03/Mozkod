import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p8",
  language: "html",
  title: "Projeto Master: Variable Fonts Axes",
  description: "Controle o peso e a inclinação da fonte de forma granular.",
  statement: "Utilize a propriedade 'font-variation-settings' para ajustar o peso (wght) da sua fonte para 650.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🖋️ Tipografia de Próxima Geração</h3>
    <p>Fontes Variáveis permitem carregar um único ficheiro e ter acesso a milhares de pesos e larguras, melhorando drasticamente a performance e o controlo criativo.</p>
  `,
  objectives: [
    {
      id: "variation",
      description: "Use 'font-variation-settings: \"wght\" 650' no seu texto principal.",
      test: "font-variation-settings"
    }
  ]
};
