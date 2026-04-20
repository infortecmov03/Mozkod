import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "alg-t1",
  title: "Análise de Complexidade: Notação Big O",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">📈 O que é o Big O?</h2>
        <p class="text-lg leading-relaxed">
          A Notação Big O é a linguagem que usamos para descrever quanto tempo um algoritmo demora a executar (Complexidade de Tempo) ou quanta memória consome (Complexidade de Espaço) à medida que os dados de entrada crescem.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-green-500">O(1) - Constante</h4>
          <p class="text-xs">Sempre o mesmo tempo. Ex: Aceder a um índice de um array.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-blue-500">O(n) - Linear</h4>
          <p class="text-xs">O tempo cresce junto com os dados. Ex: Percorrer uma lista.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-yellow-500">O(log n) - Logarítmica</h4>
          <p class="text-xs">Divide o problema ao meio a cada passo. Ex: Busca Binária.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-red-500">O(n²) - Quadrática</h4>
          <p class="text-xs">Lento para muitos dados. Ex: Dois loops aninhados.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "alg-q1"
};
