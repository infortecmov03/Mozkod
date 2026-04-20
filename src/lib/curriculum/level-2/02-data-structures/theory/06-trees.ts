import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t6",
  title: "Árvores Binárias (Trees)",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🌳 Estruturas Hierárquicas</h2>
      <p>Uma árvore é composta por nós, onde cada nó tem no máximo dois filhos (Binary Tree).</p>
      <div class="p-4 bg-primary/5 border rounded-xl">
        <h4 class="font-bold">BST (Binary Search Tree):</h4>
        <p>Valores menores que o pai vão para a ESQUERDA. Valores maiores vão para a DIREITA. Isto permite buscas em <strong>O(log n)</strong>.</p>
      </div>
    </div>
  `,
  quizId: "ds-q6"
};
