import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t4",
  title: "Filas (Queues): Lógica FIFO",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🚶 O Primeiro a Entrar é o Primeiro a Sair</h2>
      <p>Tal como numa fila de banco, quem chega primeiro é atendido primeiro.</p>
      <div class="bg-card p-4 rounded-xl border">
        <h4 class="font-bold text-accent">Operações:</h4>
        <ul class="list-disc ml-6 mt-2">
          <li><strong>Enqueue:</strong> Entrar na fila (fim).</li>
          <li><strong>Dequeue:</strong> Sair da fila (início).</li>
        </ul>
      </div>
      <p class="text-sm text-muted-foreground italic">Uso real: Impressoras, Gestão de processos na CPU.</p>
    </div>
  `,
  quizId: "ds-q4"
};
