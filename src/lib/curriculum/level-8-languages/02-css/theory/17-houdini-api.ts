import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m17",
  title: "Fase 4: CSS Houdini Paint API: Desenhando no Motor do Browser",
  enableInteractive: true,
  quizId: "css-mq17",
  content: `<div class="space-y-12">
      <div class="bg-purple-500/10 p-8 rounded-[2.5rem] border border-purple-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-purple-400 flex items-center gap-3">
          🎩 Mágica de Baixo Nível
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>CSS Houdini</strong> é um conjunto de APIs de baixo nível que expõe as entranhas do motor de renderização do browser (Blink, WebKit). Com a <strong>Paint API</strong>, podes escrever código JavaScript que corre diretamente no processo de desenho (painting) do CSS, criando backgrounds e formas impossíveis com CSS comum.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-purple-500/20 pb-2 text-accent">1. Paint Worklets</h3>
        <p class="text-sm leading-relaxed">
          Um Worklet corre numa thread separada da UI principal. Podes desenhar padrões geométricos complexos usando uma API similar ao Canvas 2D, mas que se comporta como uma imagem CSS nativa.
        </p>
        <pre><code class="language-javascript">
// No seu ficheiro de Worklet (paint.js)
registerPaint('checkboard', class {
  paint(ctx, geom, properties) {
    // Desenha o padrão de xadrez usando coordenadas geométricas
  }
});
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-purple-500/20 pb-2 text-accent">2. Typed OM: Geometria Tipada</h3>
        <p class="text-sm leading-relaxed">
          Manipular estilos via string <code>"20px"</code> é lento. O <strong>Typed OM</strong> permite manipular valores CSS como objetos numéricos reais: <code>CSS.px(20)</code>, eliminando o custo de parsing e facilitando cálculos matemáticos no JavaScript de elite.
        </p>
      </section>
    </div>`
};