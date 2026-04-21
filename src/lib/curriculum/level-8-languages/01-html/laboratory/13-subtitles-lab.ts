import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p13",
  language: "html",
  title: "Projeto Master: Legendagem Dinâmica",
  description: "Sincronize texto com os elementos multimédia do seu projeto.",
  statement: "Configure o atributo 'kind' no elemento track para fornecer legendas (captions).",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🎬 WebVTT e Sincronia</h3>
    <p>O atributo <code>kind="captions"</code> é vital para utilizadores com deficiência auditiva, enquanto <code>kind="subtitles"</code> é para tradução. No nível Master, fornecemos ambos sempre que possível.</p>
  `,
  objectives: [
    {
      id: "track_kind",
      description: "Defina o atributo kind como 'captions' no seu elemento track.",
      hint: "<track kind=\"captions\" ...>",
      test: "kind=\"captions\""
    }
  ]
};
