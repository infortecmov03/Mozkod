
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "rs-m1",
  title: "Semântica de Ownership e Movimentação",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🛡️ O Coração do Rust</h2>
        <p class="text-lg">O Ownership é o sistema que permite ao Rust garantir segurança de memória sem um Garbage Collector. Baseia-se em três regras:</p>
        <ul class="list-decimal ml-6 mt-4 space-y-2">
          <li>Cada valor tem uma variável chamada seu <i>owner</i>.</li>
          <li>Pode haver apenas um owner por vez.</li>
          <li>Quando o owner sai do escopo, o valor é libertado (dropped).</li>
        </ul>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Movimentação (Move)</h3>
        <p>Ao atribuir uma variável a outra, o Rust move o valor em vez de o copiar, invalidando a variável original para evitar double-free.</p>
      </div>
    </div>
  `,
  quizId: "rs-mq1"
};
