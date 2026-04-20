import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t1",
  title: "Variáveis e Tipos: As Caixas da Memória",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">📦 O que é uma Variável?</h2>
        <p class="text-lg">Uma variável é um espaço na memória do computador com um nome (etiqueta) que guarda uma informação.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="p-4 border rounded-xl bg-card">
          <h4 class="font-bold text-primary">String</h4>
          <p class="text-xs">Texto (ex: "João").</p>
        </div>
        <div class="p-4 border rounded-xl bg-card">
          <h4 class="font-bold text-green-500">Number</h4>
          <p class="text-xs">Números (ex: 25).</p>
        </div>
        <div class="p-4 border rounded-xl bg-card">
          <h4 class="font-bold text-accent">Boolean</h4>
          <p class="text-xs">Lógica (true/false).</p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t1-quiz"
};
