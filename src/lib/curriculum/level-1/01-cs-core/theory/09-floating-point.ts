import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "cs-t9",
  title: "Aritmética de Ponto Flutuante (IEEE 754)",
  content: `
    <div class="space-y-6">
      <div class="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
        <h2 class="text-2xl font-bold">⚠️ O Perigo do 0.1 + 0.2</h2>
        <p>Em muitos sistemas, 0.1 + 0.2 não é exatamente 0.3. Isto acontece devido à forma como os bits representam frações.</p>
      </div>
      <p>Entender a mantissa e o expoente é fundamental para evitar bugs em sistemas críticos.</p>
    </div>
  `,
  quizId: "cs-q9"
};