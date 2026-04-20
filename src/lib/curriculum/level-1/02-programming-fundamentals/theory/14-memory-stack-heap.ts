import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "pf-t14",
  title: "Memória: Stack vs Heap",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🧠 Onde vivem os teus dados?</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-primary/5 border rounded-xl">
          <h4 class="font-bold">Stack (Pilha)</h4>
          <p class="text-xs">Dados locais, rápida, organizada automaticamente pelo compilador.</p>
        </div>
        <div class="p-4 bg-accent/5 border rounded-xl">
          <h4 class="font-bold">Heap (Monte)</h4>
          <p class="text-xs">Objetos grandes, alocação dinâmica, exige limpeza (GC ou manual).</p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-q14"
};
