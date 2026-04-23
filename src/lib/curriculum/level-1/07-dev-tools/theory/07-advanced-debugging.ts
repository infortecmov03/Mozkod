import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t7",
  title: "Debugging Avançado: Call Stack e Memory Leaks",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          🔍 Investigação de Runtime
        </h2>
        <p class="text-lg leading-relaxed">Debugar não é apenas colocar <code>console.log</code>. É entender o estado da memória e o fluxo de execução. Um engenheiro Master utiliza o **Debugger** para parar o tempo e inspecionar a realidade do sistema.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. O Mistério da Call Stack</h3>
        <p class="text-sm">A <strong>Call Stack</strong> (Pilha de Chamadas) mostra-te o caminho exato que o código percorreu até chegar ao erro. Se a Função C deu erro, a stack revela que ela foi chamada pela B, que veio da A.</p>
        
        <h3 class="text-xl font-bold font-headline">2. Memory Profiling</h3>
        <p class="text-sm">Utilizando o painel <strong>Memory</strong> do DevTools, podes tirar <i>Heap Snapshots</i>. Isto permite detetar **Memory Leaks**: objetos que deveriam ter sido limpos mas continuam a ocupar RAM, tornando o site lento com o tempo.</p>

        <div class="bg-black/40 p-6 rounded-xl border font-code text-xs text-accent shadow-inner">
          [DEBUGGER COMMANDS]<br/>
          - <b>Step Over:</b> Vai para a próxima linha.<br/>
          - <b>Step Into:</b> Entra dentro da função na linha atual.<br/>
          - <b>Step Out:</b> Sai da função atual e volta para quem a chamou.
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q7"
};