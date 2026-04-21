import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p3",
  language: "html",
  title: "Projeto Master: Propriedades Lógicas",
  description: "Desenhe layouts que se adaptam a qualquer direção de escrita.",
  statement: "Substitua 'margin-left' e 'padding-right' por propriedades lógicas equivalentes.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🌍 Layout Global</h3>
    <p>Um Engenheiro Master não usa <code>left</code> ou <code>right</code>. Usa <code>inline-start</code> e <code>inline-end</code>. Isso garante que o site funcione perfeitamente tanto em Português como em Árabe sem mudar uma linha de CSS.</p>
  `,
  objectives: [
    {
      id: "margin_inline",
      description: "Use 'margin-inline-start' em vez de margin-left.",
      test: "margin-inline-start"
    },
    {
      id: "padding_inline",
      description: "Use 'padding-inline-end' em vez de padding-right.",
      test: "padding-inline-end"
    }
  ]
};
