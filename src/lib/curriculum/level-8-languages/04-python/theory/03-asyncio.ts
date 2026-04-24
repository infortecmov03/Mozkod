
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m3",
  title: "Fase 1: AsyncIO: Concorrência e o Event Loop",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">⚡ Escalando sem Threads</h2>
        <p class="text-lg leading-relaxed">O <strong>AsyncIO</strong> permite que um único processo Python lide com milhares de conexões simultâneas. Diferente das threads, o escalonamento é cooperativo: a função "cede" o controle voluntariamente.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Corrotinas e o Event Loop</h3>
        <p class="text-sm">Ao usar <code>await</code>, o interpretador pausa a execução daquela função e corre outras tarefas pendentes enquanto espera pela rede ou disco.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent">
          async def fetch_metrics():<br/>
          &nbsp;&nbsp;data = await network_call()<br/>
          &nbsp;&nbsp;return data
        </div>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-yellow-500 mb-2">🚀 Regra de Ouro:</h4>
          <p class="text-sm">Nunca use <code>time.sleep()</code> dentro de uma função async. Isso trava o Event Loop inteiro. Use <code>await asyncio.sleep()</code>.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "py-mq3"
};
