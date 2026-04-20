import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t5",
  title: "Tabelas Hash: Busca Instantânea",
  content: `
    <div class="space-y-6">
      <div class="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-xl border border-yellow-200 dark:border-yellow-900">
        <h2 class="text-2xl font-bold mb-4">🔑 Chave e Valor em O(1)</h2>
        <p>A Tabela Hash usa uma "Função Hash" para transformar uma chave num índice de memória, permitindo acesso imediato.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Colisões</h3>
        <p>O que acontece se duas chaves derem o mesmo índice? Usamos técnicas como <strong>Chaining</strong> (Lista ligada no índice) ou <strong>Open Addressing</strong>.</p>
      </div>
    </div>
  `,
  quizId: "ds-q5"
};
