import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t5",
  title: "Loops: A Magia da Repetição",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🔄 Ciclos de Execução
        </h2>
        <p class="text-lg leading-relaxed">
          Loops (Laços) servem para repetir a mesma tarefa várias vezes sem ter de escrever o mesmo código repetidamente.
        </p>
      </div>

      <div class="space-y-4">
        <div class="p-4 border rounded-xl bg-card">
          <h4 class="font-bold text-primary">Loop FOR (Para)</h4>
          <p class="text-sm">Usado quando sabemos exatamente quantas vezes queremos repetir.</p>
          <p class="text-xs text-muted-foreground mt-2 italic">Ex: Contar de 1 a 10.</p>
        </div>
        <div class="p-4 border rounded-xl bg-card">
          <h4 class="font-bold text-accent">Loop WHILE (Enquanto)</h4>
          <p class="text-sm">Repete enquanto uma condição for verdadeira. Útil quando não sabemos o fim exato.</p>
          <p class="text-xs text-muted-foreground mt-2 italic">Ex: Continuar a pedir a senha enquanto estiver errada.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t5-quiz"
};