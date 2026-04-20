import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t8",
  title: "Grafos: Conexões Complexas",
  content: `
    <div class="space-y-6">
      <div class="bg-indigo-50 dark:bg-indigo-950 p-6 rounded-xl border border-indigo-200 dark:border-indigo-900">
        <h2 class="text-2xl font-bold mb-4">🕸️ Nós e Arestas</h2>
        <p>Grafos representam qualquer rede: estradas, amizades no Facebook, internet. São as estruturas mais flexíveis da computação.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Representação</h3>
        <ul>
          <li><strong>Matriz de Adjacência:</strong> Tabela 2D de 0s e 1s.</li>
          <li><strong>Lista de Adjacência:</strong> Lista de vizinhos para cada nó (mais eficiente em espaço).</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "ds-q8"
};
