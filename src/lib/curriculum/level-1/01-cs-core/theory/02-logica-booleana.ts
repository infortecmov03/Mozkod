import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "cs-t2",
  title: "Lógica Booleana: O Pensamento Digital",
  youtubeVideoId: "gI-qXk7XojA",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🧠 Verdadeiro ou Falso?
        </h2>
        <p class="text-lg leading-relaxed">
          Na computação, as decisões são baseadas em dois estados: <strong>True</strong> (Verdadeiro) ou <strong>False</strong> (Falso). Esta é a base da inteligência das máquinas.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-card p-4 rounded-xl border">
          <h4 class="font-bold text-primary mb-2">Operador AND (E)</h4>
          <p class="text-sm">Só é verdade se AMBAS as condições forem verdadeiras.</p>
          <p class="text-[10px] mt-2 opacity-60">Ex: Tenho sol E tenho tempo livre = Vou à praia.</p>
        </div>
        <div class="bg-card p-4 rounded-xl border">
          <h4 class="font-bold text-accent mb-2">Operador OR (OU)</h4>
          <p class="text-sm">É verdade se PELO MENOS UMA condição for verdadeira.</p>
          <p class="text-[10px] mt-2 opacity-60">Ex: Tenho dinheiro OU tenho cartão = Posso comprar.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t2-quiz"
};