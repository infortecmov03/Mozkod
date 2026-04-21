import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m17",
  title: "CSS Houdini Paint API: Desenhando no Motor do Browser",
  content: `
    <div class="space-y-8">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-purple-400">🎩 Mágica de Baixo Nível</h2>
        <p class="text-lg leading-relaxed">Houdini é um conjunto de APIs que expõe as entranhas do motor de renderização do browser (Blink, WebKit). Com a <strong>Paint API</strong>, podes escrever código JS que corre no processo de desenho (painting) do CSS.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Paint Worklets</h3>
        <p>Um Worklet é como um Worker: corre numa thread separada. Podes criar padrões geométricos complexos que são renderizados como se fossem uma imagem nativa, sem o peso de um Canvas no DOM.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent space-y-2">
          <p>.custom-bg {</p>
          <p>&nbsp;&nbsp;<span class="text-primary">background-image</span>: <span class="text-green-400">paint(my-geometric-pattern)</span>;</p>
          <p>}</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Typed OM</h3>
        <p>Manipular estilos via string <code>"20px"</code> é lento. O Typed OM permite manipular valores como objetos numéricos reais: <code>CSS.px(20)</code>, eliminando o custo de parsing no JavaScript.</p>
      </div>
    </div>
  `,
  quizId: "css-mq17"
};
