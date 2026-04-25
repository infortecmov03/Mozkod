import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m19",
  title: "Fase 4: Scroll-driven Animations: Adeus Event Listeners",
  enableInteractive: true,
  quizId: "css-mq19",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📜 Animações ao Ritmo do Utilizador
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Pela primeira vez na história, podemos ligar o progresso de uma animação à posição da barra de rolagem usando <strong>apenas CSS</strong>. Isto elimina a necessidade de JavaScript pesado que causava lag e saltos visuais em dispositivos móveis.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. animation-timeline: scroll()</h3>
        <p class="text-sm">A função <code>scroll()</code> cria uma linha do tempo onde o "0%" é o topo da página e o "100%" é o fim. A animação avança conforme o utilizador faz o scroll.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-accent">
          .progress-bar { <br/>
          &nbsp;&nbsp;animation-name: grow; <br/>
          &nbsp;&nbsp;<span class="text-primary">animation-timeline</span>: <span class="text-green-400">scroll()</span>; <br/>
          }
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. View Timeline (Reveal on Scroll)</h3>
        <p class="text-sm">A <code>view()</code> permite animar elementos conforme eles entram ou saem da área visível (viewport). É a técnica de elite para criar efeitos de "aparição" suave em parágrafos e imagens sem uma única linha de JS.</p>
        <pre><code class="language-css">
.card {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 25% cover 50%;
}
        </code></pre>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4">🚀 Performance Nativa</h4>
        <p class="text-sm leading-relaxed">
          Como estas animações correm na thread de renderização do browser (Compositor Thread), elas permanecem fluidas mesmo que o JavaScript principal da aplicação esteja bloqueado por um cálculo pesado.
        </p>
      </section>
    </div>`
};