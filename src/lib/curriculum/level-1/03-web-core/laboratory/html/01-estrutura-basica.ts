
import type { PracticeExercise } from '../../../types';

export const exerciseHTML1: PracticeExercise = {
  id: "web-p1-html",
  language: "html",
  title: "Laboratório: A Tua Primeira Página",
  description: "Cria a estrutura básica de um documento HTML.",
  statement: "Cria um documento HTML que contenha um título (h1) e um parágrafo (p) com o teu nome.",
  template: `<!-- Escreve o teu código HTML abaixo -->
<h1>Meu Site</h1>
<p></p>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-orange-500">🌐 Guia HTML</h3>
      <p>Para este exercício, precisas de usar duas tags fundamentais:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><code>&lt;h1&gt;</code>: O título de maior importância.</li>
        <li><code>&lt;p&gt;</code>: Define um parágrafo de texto comum.</li>
      </ul>
      <p class="text-sm text-muted-foreground italic">Dica: Não te esqueças de fechar as tags com a barra <code>/</code>!</p>
    </div>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Cria um título h1 com o texto 'Codeworks'",
      hint: "<h1>Codeworks</h1>",
      test: "<h1>Codeworks</h1>"
    },
    {
      id: "obj2",
      description: "Cria um parágrafo p com o texto 'Aprendizagem'",
      hint: "<p>Aprendizagem</p>",
      test: "<p>Aprendizagem</p>"
    }
  ]
};
