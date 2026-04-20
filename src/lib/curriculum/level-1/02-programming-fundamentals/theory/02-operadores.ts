import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t2",
  title: "Operadores: A Matemática do Código",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">➕ Aritméticos e Lógicos</h2>
        <p>Operadores permitem realizar cálculos (+, -, *, /) e comparações (==, >, <).</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Precedência</h3>
        <p>Tal como na matemática, a multiplicação e divisão ocorrem antes da soma.</p>
      </div>
    </div>
  `,
  quizId: "pf-t2-quiz"
};
