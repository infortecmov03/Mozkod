import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t16",
  title: "Pipelining: A Linha de Montagem da CPU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🏎️ Maximizando o Throughput
        </h2>
        <p class="text-lg leading-relaxed">
          Pipelining é uma técnica de arquitetura que permite a execução paralela de instruções dividindo-as em estágios menores. É como uma linha de montagem industrial: enquanto um operário coloca o motor, o anterior já está a colocar as rodas no próximo carro.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os Estágios Clássicos (RISC Pipeline)</h3>
        <p>Uma instrução típica passa por 5 estágios fundamentais dentro do processador:</p>
        
        <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
          <div class="p-3 bg-card border rounded-xl border-accent/20">
            <h4 class="font-bold text-accent text-xs">IF</h4>
            <p class="text-[9px] opacity-60 uppercase">Instruction Fetch</p>
            <p class="text-[10px] mt-1">Busca a instrução na Cache.</p>
          </div>
          <div class="p-3 bg-card border rounded-xl border-accent/20">
            <h4 class="font-bold text-accent text-xs">ID</h4>
            <p class="text-[9px] opacity-60 uppercase">Decode</p>
            <p class="text-[10px] mt-1">Descodifica e lê os registos.</p>
          </div>
          <div class="p-3 bg-card border rounded-xl border-accent/20">
            <h4 class="font-bold text-accent text-xs">EX</h4>
            <p class="text-[9px] opacity-60 uppercase">Execute</p>
            <p class="text-[10px] mt-1">A ALU faz o cálculo real.</p>
          </div>
          <div class="p-3 bg-card border rounded-xl border-accent/20">
            <h4 class="font-bold text-accent text-xs">MEM</h4>
            <p class="text-[9px] opacity-60 uppercase">Memory</p>
            <p class="text-[10px] mt-1">Acede à RAM (se necessário).</p>
          </div>
          <div class="p-3 bg-card border rounded-xl border-accent/20">
            <h4 class="font-bold text-accent text-xs">WB</h4>
            <p class="text-[9px] opacity-60 uppercase">Write-back</p>
            <p class="text-[10px] mt-1">Grava o resultado no registo.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Hazards: Quando a Pipeline Trava</h3>
        <p class="text-sm">Um <strong>Hazard</strong> é uma situação que impede a próxima instrução de ser executada no seu ciclo de relógio planeado. Existem três tipos:</p>
        
        <div class="space-y-4">
          <div class="p-4 bg-muted/20 border-l-4 border-red-500 rounded-r-xl">
            <strong class="text-red-400">Structural Hazards:</strong> Duas instruções precisam do mesmo hardware (ex: aceder à mesma cache) ao mesmo tempo.
          </div>
          <div class="p-4 bg-muted/20 border-l-4 border-orange-500 rounded-r-xl">
            <strong class="text-orange-400">Data Hazards:</strong> Uma instrução precisa do resultado de outra que ainda não terminou. Ex: <code>A = B + C</code> seguido de <code>D = A + 5</code>.
          </div>
          <div class="p-4 bg-muted/20 border-l-4 border-yellow-500 rounded-r-xl">
            <strong class="text-yellow-400">Control Hazards:</strong> Causados por desvios (<code>if</code>, <code>loops</code>). A CPU não sabe qual a próxima instrução até que o desvio seja calculado.
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🔮 Branch Prediction: O Vidente Eletrónico</h3>
          <p class="text-sm leading-relaxed mb-4">
            Para evitar parar a pipeline em cada <code>if</code>, as CPUs modernas tentam <strong>prever</strong> se o desvio será tomado ou não baseando-se no histórico. 
          </p>
          <div class="flex gap-4">
            <div class="flex-1 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-[10px]">
              <strong>Acerto:</strong> Performance máxima. A pipeline nunca para.
            </div>
            <div class="flex-1 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-[10px]">
              <strong>Erro:</strong> Pipeline Flush. A CPU descarta o trabalho errado e reinicia, perdendo dezenas de ciclos.
            </div>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Regra de Ouro: Vazão vs Latência
          </h4>
          <p class="text-sm leading-relaxed">
            O Pipelining <strong>não reduz o tempo</strong> que uma única instrução leva para terminar (Latência). Pelo contrário, pode até aumentá-lo ligeiramente. O seu poder está em aumentar o <strong>número de instruções terminadas por segundo</strong> (Throughput). No nível Master, entendemos que o objetivo é manter a linha sempre cheia.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t16-quiz"
};