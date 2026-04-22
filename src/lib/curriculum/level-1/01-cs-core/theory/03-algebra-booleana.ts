import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "cs-t3",
  title: "Álgebra Booleana: A Matemática da Lógica",
  youtubeVideoId: "95v88Oit0H8",
  quizId: "cs-t3-quiz",
  content: `
    <div class="space-y-8">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-accent">
          ⚡ O Que é a Álgebra Booleana?
        </h2>
        <p class="text-lg leading-relaxed">
          Na matemática comum, usamos números de 0 a infinito. Na <strong>Álgebra Booleana</strong>, o nosso universo tem apenas dois valores: <strong>0 (Falso)</strong> e <strong>1 (Verdadeiro)</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Lei da Identidade (Por que A AND 1 = A?)</h3>
        <p class="text-sm">Imagina que o <b>1</b> é uma porta sempre aberta. O resultado final depende apenas de ti (<b>A</b>):</p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/5 space-y-4">
          <p class="font-bold text-primary italic">Prova linha por linha:</p>
          <ul class="space-y-3 text-sm font-mono">
            <li class="flex gap-4 border-b border-white/5 pb-2">
              <span class="text-accent">Se A = 1:</span>
              <span>1 AND 1 = <b class="text-green-400">1</b> (O resultado foi igual ao valor de A)</span>
            </li>
            <li class="flex gap-4 pb-2">
              <span class="text-accent">Se A = 0:</span>
              <span>0 AND 1 = <b class="text-red-400">0</b> (O resultado foi igual ao valor de A)</span>
            </li>
          </ul>
          <p class="text-xs text-muted-foreground mt-4">
            <b>Conclusão:</b> Não importa o valor de A, o resultado da operação <code>A AND 1</code> será sempre o próprio <code>A</code>. Por isso, 1 é chamado de "Elemento Neutro" no AND.
          </p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. A Lei da Identidade no OR (A OR 0 = A)</h3>
        <p class="text-sm">No OR (OU), o <b>0</b> é o elemento neutro. Se tens uma opção que é sempre falsa, o sucesso depende apenas da outra opção (A).</p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/5 space-y-4">
           <ul class="space-y-3 text-sm font-mono">
            <li class="flex gap-4 border-b border-white/5 pb-2">
              <span class="text-accent">Se A = 1:</span>
              <span>1 OR 0 = <b class="text-green-400">1</b></span>
            </li>
            <li class="flex gap-4">
              <span class="text-accent">Se A = 0:</span>
              <span>0 OR 0 = <b class="text-red-400">0</b></span>
            </li>
          </ul>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-red-400">3. A Lei do Nulo (O "Buraco Negro")</h3>
        <p class="text-sm">Existem valores que "engolem" a variável:</p>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <h4 class="font-bold text-primary mb-1">A AND 0 = 0</h4>
            <p class="text-xs opacity-70">Não importa o que A seja, se um dos lados é 0 num AND, o resultado é sempre 0.</p>
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <h4 class="font-bold text-primary mb-1">A OR 1 = 1</h4>
            <p class="text-xs opacity-70">No OR, se já tens o 1, o resultado é garantidamente 1.</p>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">4. As Leis de De Morgan</h3>
        <p class="text-sm">Negar uma conjunção é o mesmo que a disjunção das negações:</p>
        <div class="bg-primary/5 p-5 rounded-xl border border-primary/20 space-y-4">
          <div class="bg-black/60 p-4 rounded-lg font-code text-xs text-accent text-center">
            NOT (A AND B) = (NOT A) OR (NOT B)
          </div>
        </div>
      </div>

      <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20">
        <h4 class="font-bold text-yellow-500 mb-2">🚀 Por que aprender isto?</h4>
        <p class="text-sm leading-relaxed">
          Saber álgebra booleana permite-te escrever código mais limpo, como <code>if (!a || !b)</code> em vez de <code>if (!(a && b))</code>, tornando o sistema mais rápido e legível.
        </p>
      </div>
    </div>
  `
};