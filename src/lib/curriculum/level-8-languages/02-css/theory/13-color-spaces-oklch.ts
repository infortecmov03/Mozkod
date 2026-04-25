import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m13",
  title: "Fase 4: OKLCH e o Futuro das Cores no CSS",
  enableInteractive: true,
  quizId: "css-mq21",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌈 Cores Perceptualmente Uniformes
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O RGB e o HSL foram desenhados para monitores antigos. O <strong>OKLCH</strong> foi feito para o olho humano. No nível Master, usamos OKLCH para garantir que o contraste seja consistente e para aceder ao gamut de cores <strong>P3</strong> de monitores modernos (cores ultra-vibrantes impossíveis no sRGB).
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Anatomia do OKLCH</h3>
        <p class="text-sm">A sintaxe divide-se em Luminosidade (L), Croma (C) e Matiz (H).</p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/5 font-mono text-xs text-center space-y-2">
          <p>oklch(<span class="text-primary">L</span> <span class="text-accent">C</span> <span class="text-green-400">H</span>)</p>
          <p class="text-[10px] opacity-60">// L: 0-100% | C: 0-0.4 | H: 0-360</p>
        </div>
        <p class="text-xs italic leading-relaxed">Diferente do HSL, no OKLCH 50% de luminosidade parece o mesmo brilho para o olho humano em qualquer matiz (azul, amarelo ou vermelho).</p>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. A Função color-mix()</h3>
        <p class="text-sm">Permite misturar cores nativamente, ideal para criar variações de tema sem definir centenas de novas variáveis.</p>
        <pre><code class="language-css">
.btn-hover {
  /* Mistura 20% de preto à cor primária no espaço oklab */
  background: color-mix(in oklab, var(--primary), black 20%);
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão da Acessibilidade</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Usar OKLCH permite gerar paletas de cores acessíveis programaticamente. Se mantiveres a Luminosidade (L) constante, podes mudar a cor da marca (H) e garantir que o rácio de contraste com o texto se mantém perfeito."
        </p>
      </section>
    </div>`
};