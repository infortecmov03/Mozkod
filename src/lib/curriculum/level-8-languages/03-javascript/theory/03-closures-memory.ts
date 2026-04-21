
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m3",
  title: "Closures e Memória: O Escopo Léxico Profundo",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📦 Captura de Contexto</h2>
        <p class="text-lg leading-relaxed">
          Uma <strong>Closure</strong> acontece quando uma função "lembra" do ambiente em que foi criada, mesmo depois de esse ambiente ter terminado a execução. No nível Master, entendemos o impacto disto na <strong>Gestão de Memória</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Como o Motor V8 gere Closures</h3>
        <p>Quando crias uma closure, o motor JavaScript impede que as variáveis do escopo pai sejam limpas pelo Garbage Collector, pois a função filha ainda pode precisar delas.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-xl space-y-1">
          <p>function <span class="text-primary">criarContador</span>() {</p>
          <p>&nbsp;&nbsp;let <span class="text-accent">count</span> = 0; <span class="text-muted-foreground">// Esta variável vive no Heap via Closure</span></p>
          <p>&nbsp;&nbsp;return () => ++count;</p>
          <p>}</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-red-400">⚠️ Perigo: Memory Leaks</h3>
        <p>Se criares milhares de closures que referenciam grandes objetos (como buffers de imagem ou arrays gigantes) e nunca as destruires, vais esgotar a RAM do utilizador. Sempre limpa listeners e timers no fecho dos componentes.</p>
      </div>
    </div>
  `,
  quizId: "js-mq3"
};
