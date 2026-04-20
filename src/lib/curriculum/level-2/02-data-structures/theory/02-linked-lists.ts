import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t2",
  title: "Listas Ligadas: Flexibilidade na Memória",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">🔗 O Poder dos Nós</h2>
        <p>Diferente dos arrays, as listas ligadas não precisam de um bloco contíguo de memória. Cada elemento (Nó) aponta para o próximo.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Vantagens</h3>
        <ul>
          <li><strong>Inserção/Remoção O(1):</strong> Muito rápidas se já tivermos o ponteiro.</li>
          <li><strong>Tamanho Dinâmico:</strong> Cresce conforme necessário sem realocação pesada.</li>
        </ul>
        <h3>Tipos</h3>
        <p>Singly Linked (Simples), Doubly Linked (Dupla) e Circular.</p>
      </div>
    </div>
  `,
  quizId: "ds-q2"
};
