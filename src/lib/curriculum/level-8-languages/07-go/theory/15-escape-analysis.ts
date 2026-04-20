
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m15",
  title: "Escape Analysis e Gestão de Memória",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🧠 Stack vs Heap</h2>
      <p>O compilador do Go decide automaticamente se um objeto vive na Stack (rápido) ou no Heap (overhead do GC) através da <i>Escape Analysis</i>.</p>
    </div>
  `,
  quizId: "go-mq15"
};
