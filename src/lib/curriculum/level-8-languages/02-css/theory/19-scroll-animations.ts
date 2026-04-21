import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m19",
  title: "Scroll-driven Animations: Adeus Event Listeners",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📜 Animações ao Ritmo do Utilizador</h2>
        <p class="text-lg leading-relaxed">Pela primeira vez, podemos ligar uma animação à posição da barra de rolagem usando apenas CSS, eliminando o JavaScript pesado que causava travamentos em mobile.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Animation-timeline: scroll()</h3>
        <p>O <code>scroll()</code> cria uma linha do tempo onde o "0%" é o topo da página e o "100%" é o fim. A animação progride conforme o utilizador move o rato.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-accent">
          .progress-bar { <br/>
          &nbsp;&nbsp;<span class="text-primary">animation-name</span>: grow; <br/>
          &nbsp;&nbsp;<span class="text-primary">animation-timeline</span>: <span class="text-green-400">scroll()</span>; <br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline">View Timeline</h3>
        <p>A <code>view()</code> permite animar elementos conforme eles entram ou saem da área visível (viewport), ideal para efeitos de entrada suaves (reveal on scroll) com performance nativa.</p>
      </div>
    </div>
  `,
  quizId: "css-mq19"
};
