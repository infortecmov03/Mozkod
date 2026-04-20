import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t9",
  title: "Recursão: Funções que se chamam",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🔄 O Conceito de Auto-chamada</h2>
        <p>A recursão é uma técnica onde uma função resolve um problema chamando uma versão menor de si mesma.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Caso Base e Caso Recursivo</h3>
        <p>Toda a função recursiva precisa de um <strong>Caso Base</strong> para parar, caso contrário entrará num loop infinito.</p>
      </div>
    </div>
  `,
  quizId: "pf-t9-quiz"
};
