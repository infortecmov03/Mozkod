import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t1",
  title: "Sistemas Numéricos: O Mundo Binário",
  youtubeVideoId: "rXc_A7G43m0",
  content: `
    <div class="space-y-6">
      <div class="bg-blue-50 dark:bg-blue-950 p-6 rounded-2xl border border-blue-200 dark:border-blue-900">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <span class="text-3xl">📖</span> O que é o Binário?
        </h2>
        <p class="text-lg leading-relaxed">
          Os computadores não entendem letras ou números como nós. Eles funcionam com eletricidade. 
          Um circuito pode estar <strong>ligado</strong> ou <strong>desligado</strong>.
        </p>
        <ul class="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
          <li><strong>1</strong> = Ligado (Passa corrente)</li>
          <li><strong>0</strong> = Desligado (Não passa corrente)</li>
        </ul>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Como contamos em Binário?</h3>
        <p>
          No nosso dia-a-dia, usamos o sistema <strong>Decimal</strong> (base 10).
          No sistema <strong>Binário</strong> (base 2), usamos apenas 0 e 1. Cada posição vale o dobro da anterior (1, 2, 4, 8...).
        </p>
        <div class="bg-card p-4 rounded-xl border font-code text-center text-blue-400 shadow-inner">
          Decimal 5 = (4 + 0 + 1) = Binário 0101
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t1-quiz"
};