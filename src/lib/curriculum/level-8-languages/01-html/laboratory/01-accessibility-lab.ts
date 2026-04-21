
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p2", // Corrigido ID sequencial
  language: "html",
  title: "Laboratório Master: Componente Acessível",
  description: "Crie a estrutura de um modal totalmente acessível dentro do seu projeto.",
  statement: "Adicione ao seu código um diálogo modal utilizando role='dialog' e aria-labelledby.",
  isProjectPart: true, // Continuação do projeto
  template: ``,
  detailedExplanation: `
    <h3>♿ Checklist de Acessibilidade</h3>
    <p>Para um modal ser acessível, ele precisa de um <strong>role="dialog"</strong> e uma ligação via <strong>aria-labelledby</strong>.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Adicionar elemento com role='dialog'",
      test: "role=\"dialog\""
    }
  ]
};
