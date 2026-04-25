import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m20",
  title: "Fase 4: Anchor Positioning Future: Popovers Nativos",
  enableInteractive: true,
  quizId: "css-mq20",
  content: `<div class="space-y-12">
      <div class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-3">
          ⚓ Posicionamento Relacional Inteligente
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Anchor Positioning</strong> (2024+) permite "ancorar" um elemento flutuante (como um menu dropdown ou tooltip) a outro elemento na página sem precisar de calcular coordenadas via JavaScript. O browser encarrega-se de manter os elementos juntos, mesmo após o redimensionamento da janela.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-indigo-500/20 pb-2 text-accent">1. Definindo a Âncora</h3>
        <p class="text-sm">Primeiro, damos um nome global à âncora no elemento base.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent">
          .anchor-btn { <span class="text-primary">anchor-name</span>: --my-btn; }
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-indigo-500/20 pb-2 text-accent">2. Ligando o Elemento Flutuante</h3>
        <pre><code class="language-css">
.tooltip {
  position: absolute;
  position-anchor: --my-btn;
  /* Posiciona o fundo do tooltip no topo do botão */
  bottom: anchor(top);
  left: anchor(center);
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Adeus Bibliotecas de Terceiros</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Esta API elimina o uso de bibliotecas como Popper.js ou Floating UI para a maioria dos casos de uso, reduzindo o bundle de JS e garantindo um comportamento visual nativo e infalível."
        </p>
      </section>
    </div>`
};