import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t7",
  title: "Arrays e Listas: Coleções de Dados",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">📚 Organizando Dados</h2>
        <p>Um Array é uma lista ordenada de elementos. Cada elemento tem uma posição chamada <strong>índice</strong>, que começa sempre em 0.</p>
      </div>
      <div class="bg-card p-4 rounded-xl border font-code">
        let frutas = ["Maçã", "Banana", "Laranja"];<br/>
        frutas[0]; // "Maçã"
      </div>
    </div>
  `,
  quizId: "pf-t7-quiz"
};