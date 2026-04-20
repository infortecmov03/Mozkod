import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t5",
  title: "Memória e Armazenamento: Curto vs Longo Prazo",
  youtubeVideoId: "TQvD-Uq86oY",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">🧠 Hierarquia de Memória</h2>
        <p>Nem toda a memória é igual. Existe um equilíbrio entre velocidade e capacidade.</p>
        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-primary">RAM (Volátil)</h4>
            <p class="text-xs">Rápida, mas apaga-se quando o computador desliga.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent">SSD/HDD (Não-Volátil)</h4>
            <p class="text-xs">Lenta, mas guarda os ficheiros para sempre.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t5-quiz"
};