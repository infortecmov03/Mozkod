import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t16",
  title: "Pipelining: A Linha de Montagem da CPU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏎️ Aumentando a Vazão do Processador</h2>
        <p class="text-lg leading-relaxed">
          Imagine uma fábrica de automóveis. Se esperássemos que um carro ficasse totalmente pronto para começar o próximo, a produção seria lentíssima. O <strong>Pipelining</strong> aplica a lógica da linha de montagem à CPU, permitindo que várias instruções sejam processadas simultaneamente em diferentes estágios.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os 4 Estágios Clássicos</h3>
        <p>Uma instrução não é executada num "clique" só. Ela passa por uma pipeline, tipicamente composta por:</p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="p-4 bg-card border rounded-xl border-accent/20">
            <h4 class="font-bold text-accent">FETCH</h4>
            <p class="text-[10px] text-muted-foreground uppercase">Busca</p>
            <p class="text-xs mt-1">Busca a instrução na memória RAM/Cache.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-accent/20">
            <h4 class="font-bold text-accent">DECODE</h4>
            <p class="text-[10px] text-muted-foreground uppercase">Descodifica</p>
            <p class="text-xs mt-1">A Unidade de Controlo decifra o que deve ser feito.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-accent/20">
            <h4 class="font-bold text-accent">EXECUTE</h4>
            <p class="text-[10px] text-muted-foreground uppercase">Executa</p>
            <p class="text-xs mt-1">A ALU realiza o cálculo matemático ou lógico.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-accent/20">
            <h4 class="font-bold text-accent">WRITEBACK</h4>
            <p class="text-[10px] text-muted-foreground uppercase">Escrita</p>
            <p class="text-xs mt-1">O resultado é gravado de volta nos registradores.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. O Paradoxo da Performance</h3>
        <p class="text-sm leading-relaxed">
          É crucial entender: o pipelining <strong>não diminui o tempo</strong> que uma única instrução leva para ser executada (latência). Na verdade, pode até aumentá-lo ligeiramente devido ao overhead de gestão. No entanto, ele <strong>aumenta drasticamente o número de instruções</strong> que terminam por segundo (throughput/vazão).
        </p>

        <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20">
          <h3 class="text-xl font-bold font-headline text-red-400 mb-4">⚠️ Hazards: Quando a Linha Pára</h3>
          <p class="text-sm mb-4">Às vezes, a pipeline sofre uma interrupção forçada (Stall). Existem três tipos de conflitos:</p>
          <ul class="space-y-4">
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0 font-bold">1</div>
              <div>
                <p class="font-bold">Structural Hazard:</p>
                <p class="text-xs text-muted-foreground">Duas instruções precisam do mesmo hardware ao mesmo tempo (ex: aceder à mesma memória).</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0 font-bold">2</div>
              <div>
                <p class="font-bold">Data Hazard:</p>
                <p class="text-xs text-muted-foreground">Uma instrução precisa do resultado da instrução anterior, mas ela ainda não terminou o estágio de Writeback.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0 font-bold">3</div>
              <div>
                <p class="font-bold">Control Hazard (Branching):</p>
                <p class="text-xs text-muted-foreground">A CPU encontra um <code>IF</code> ou <code>JUMP</code>. Ela não sabe qual a próxima instrução a buscar até que o <code>IF</code> seja executado.</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-2">🔮 Previsão de Desvios (Branch Prediction)</h3>
          <p class="text-sm leading-relaxed">
            Para evitar que a pipeline esvazie em cada <code>IF</code>, os processadores modernos usam "predição". Eles tentam adivinhar se o desvio será tomado ou não baseando-se no histórico. Se acertarem, a velocidade é máxima. Se errarem (Misprediction), a pipeline deve ser esvaziada (Flushed), causando uma perda severa de ciclos de CPU.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t16-quiz"
};
