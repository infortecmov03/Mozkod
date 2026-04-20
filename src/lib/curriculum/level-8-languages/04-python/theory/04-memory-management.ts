import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m4",
  title: "Gestão de Memória e Garbage Collection",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🧠 Como o Python gere a RAM</h2>
      <p>O Python utiliza dois mecanismos principais para gerir memória:</p>
      <ol class="list-decimal ml-6 space-y-4">
        <li><strong>Contagem de Referências (Reference Counting):</strong> Cada objeto guarda o número de referências que apontam para ele. Quando chega a zero, é apagado.</li>
        <li><strong>Garbage Collector (Generational GC):</strong> Identifica e limpa ciclos de referência que a contagem simples não consegue apanhar.</li>
      </ol>
      <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
        <h4 class="font-bold">Dica de Performance:</h4>
        <p class="text-sm">Evite criar ciclos de referência globais para permitir que o GC trabalhe de forma eficiente.</p>
      </div>
    </div>
  `,
  quizId: "py-mq4"
};
