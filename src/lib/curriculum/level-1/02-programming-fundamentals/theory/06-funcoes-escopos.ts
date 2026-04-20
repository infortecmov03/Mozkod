import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t6",
  title: "Funções e Escopos: Blocos Reutilizáveis",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🛠️ Modularização de Código</h2>
        <p>Funções permitem encapsular lógica para ser reutilizada. O escopo define onde as variáveis são visíveis.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Declaração vs Invocação</h3>
        <p>Declarar é criar a receita; Invocar é cozinhar o prato.</p>
      </div>
    </div>
  `,
  quizId: "pf-t6-quiz"
};
