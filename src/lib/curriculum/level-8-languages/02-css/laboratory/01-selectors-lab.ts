
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p1",
  language: "html",
  title: "Projeto Master: Estilização Base e Variáveis",
  description: "Dê vida ao esqueleto HTML herdado usando técnicas de elite.",
  statement: "Adicione um bloco <style> no seu HTML e configure as variáveis globais e o reset semântico.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-accent">🎨 Pintando o Projeto</h3>
      <p>O CSS Master começa com a definição do <strong>Design System</strong>. Vamos usar Custom Properties para garantir que cores e espaçamentos sejam fáceis de mudar globalmente.</p>
    </div>
  `,
  objectives: [
    {
      id: "style_tag",
      description: "No <head>, adicione uma tag <style>.",
      hint: "<style></style>",
      test: "<style>"
    },
    {
      id: "variables",
      description: "Dentro do :root, defina --primary-color: #3b82f6.",
      hint: ":root { --primary-color: #3b82f6; }",
      test: "--primary-color"
    },
    {
      id: "apply_var",
      description: "Aplique a variável ao background do body.",
      hint: "body { background: var(--primary-color); }",
      test: "var(--primary-color)"
    }
  ]
};
