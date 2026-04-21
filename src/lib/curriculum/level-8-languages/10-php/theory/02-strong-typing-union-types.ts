import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m2",
  title: "Union Types e Tipagem Forte no PHP 8",
  content: `
    <div class="space-y-6">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20">
        <h2 class="text-2xl font-bold mb-4 text-indigo-400">💪 O Fim da Ambiguidade</h2>
        <p class="text-lg leading-relaxed">
          O PHP 8 transformou a linguagem, trazendo uma tipagem que rivaliza com Java ou TypeScript. <strong>Union Types</strong> permitem declarar múltiplos tipos possíveis para um argumento ou retorno.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Sintaxe de União</h3>
        <p>Agora podes ser explícito sobre o que a tua função aceita, eliminando milhares de <code>is_string()</code> ou <code>is_array()</code> manuais.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          function process(string|int $data): void { ... }
        </div>
      </div>
    </div>
  `,
  quizId: "php-mq2"
};