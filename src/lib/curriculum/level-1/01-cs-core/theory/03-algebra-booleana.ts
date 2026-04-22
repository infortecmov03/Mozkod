import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "cs-t3",
  title: "Álgebra Booleana: A Matemática dos Circuitos",
  youtubeVideoId: "95v88Oit0H8",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-accent">
          ⚡ A Base da Simplificação
        </h2>
        <p class="text-lg leading-relaxed">
          A Álgebra Booleana é o sistema matemático que permite simplificar expressões lógicas complexas. Para um engenheiro, menos portas lógicas significam circuitos mais rápidos, mais baratos e que consomem menos energia.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Leis Fundamentais</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-4 rounded-xl border border-white/5">
            <h4 class="font-bold text-primary mb-2">Identidade e Nulo</h4>
            <ul class="text-xs space-y-1 font-code">
              <li>A AND 1 = A</li>
              <li>A OR 0 = A</li>
              <li>A AND 0 = 0</li>
              <li>A OR 1 = 1</li>
            </ul>
          </div>
          <div class="bg-card p-4 rounded-xl border border-white/5">
            <h4 class="font-bold text-primary mb-2">Idempotência e Inversão</h4>
            <ul class="text-xs space-y-1 font-code">
              <li>A AND A = A</li>
              <li>A OR A = A</li>
              <li>NOT (NOT A) = A</li>
              <li>A AND (NOT A) = 0</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Leis de De Morgan</h3>
        <p class="text-sm text-muted-foreground italic">Estas são as leis mais importantes para simplificação de lógica digital.</p>
        <div class="bg-primary/5 p-5 rounded-xl border border-primary/20 space-y-4">
          <div class="flex flex-col md:flex-row gap-4 justify-between">
            <div class="flex-1">
              <p class="font-bold text-xs uppercase text-primary mb-1">Lei 1:</p>
              <code class="text-sm">NOT (A AND B) = (NOT A) OR (NOT B)</code>
            </div>
            <div class="flex-1 border-l border-white/10 pl-4">
              <p class="font-bold text-xs uppercase text-primary mb-1">Lei 2:</p>
              <code class="text-sm">NOT (A OR B) = (NOT A) AND (NOT B)</code>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Distributividade</h3>
        <p class="text-sm">Tal como na álgebra comum, podes "distribuir" os operadores:</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm text-center">
          A AND (B OR C) = (A AND B) OR (A AND C)
        </div>
      </div>

      <div class="bg-yellow-500/5 p-4 rounded-xl border border-yellow-500/20 mt-6">
        <p class="text-sm leading-relaxed">
          <strong>🚀 Nota de Engenharia:</strong> Ao programar um <code>if</code> complexo, usa De Morgan para tornar a condição mais legível. Um <code>if (!(a && b))</code> é o mesmo que <code>if (!a || !b)</code>.
        </p>
      </div>
    </div>
  `,
  quizId: "cs-t3-quiz"
};