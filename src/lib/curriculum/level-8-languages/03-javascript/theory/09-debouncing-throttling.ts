
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m9",
  title: "Performance: Debouncing e Throttling Master",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/10">
        <h2 class="text-2xl font-bold mb-4 font-headline text-green-400">⚡ Otimização de Eventos</h2>
        <p class="text-lg leading-relaxed">Eventos como <i>scroll</i>, <i>resize</i> ou <i>keypress</i> podem disparar centenas de vezes por segundo. Sem controlo, isto destrói a performance da aplicação.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-3">Debouncing</h4>
          <p class="text-xs leading-relaxed">Aguarda o utilizador parar de agir por X milissegundos antes de executar. Ideal para campos de busca.</p>
          <div class="bg-black/20 p-3 mt-4 rounded font-code text-[10px]">Executa apenas no FIM da rajada.</div>
        </div>
        <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-3">Throttling</h4>
          <p class="text-xs leading-relaxed">Garante que a função executa no máximo uma vez a cada X milissegundos. Ideal para tracking de scroll ou redimensionamento.</p>
          <div class="bg-black/20 p-3 mt-4 rounded font-code text-[10px]">Executa em intervalos REGULARES.</div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline">Implementação de Elite</h3>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          <p><span class="text-primary">function</span> debounce(fn, delay) {</p>
          <p>&nbsp;&nbsp;let timer;</p>
          <p>&nbsp;&nbsp;<span class="text-primary">return</span> (...args) => {</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;clearTimeout(timer);</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;timer = setTimeout(() => fn(...args), delay);</p>
          <p>&nbsp;&nbsp;};</p>
          <p>}</p>
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq9"
};
