
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m14",
  title: "Canvas 2D: Rendering Pipeline e Buffers",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline">🖌️ Engenharia Gráfica no Browser</h2>
        <p class="text-lg leading-relaxed">
          O Canvas não é um elemento DOM comum; é uma janela direta para o motor gráfico. Entender o <strong>Rendering Pipeline</strong> é a diferença entre uma animação "travada" e uma fluidez de 60 ou 120 FPS.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary border-b border-white/5 pb-2">O Ciclo de Vida: RequestAnimationFrame</h3>
        <p>Para animações profissionais, nunca uses <code>setInterval</code>. O <code>requestAnimationFrame</code> sincroniza o teu código com a taxa de atualização física do ecrã (V-Sync), prevenindo <i>screen tearing</i> e poupando bateria no mobile.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] text-accent border border-white/10">
          <p>function <span class="text-primary">draw</span>() {</p>
          <p>&nbsp;&nbsp;ctx.clearRect(0, 0, w, h); <span class="text-muted-foreground">// Limpa o buffer anterior</span></p>
          <p>&nbsp;&nbsp;<span class="text-muted-foreground">// ... lógica de desenho aqui ...</span></p>
          <p>&nbsp;&nbsp;requestAnimationFrame(draw);</p>
          <p>}</p>
        </div>

        <h3 class="text-xl font-bold font-headline">OffscreenCanvas: Paralelismo Real</h3>
        <p>A funcionalidade definitiva de performance. Permite que movas toda a renderização para uma <strong>Web Worker</strong>. Se o processamento gráfico demorar, a interface do site (botões, menus) não congela.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Double Buffering (Conceitual)</h3>
        <p>O browser gere automaticamente dois buffers de imagem para que o utilizador nunca veja o frame a ser "desenhado" a meio, apenas o resultado final completo.</p>
      </div>
    </div>
  `,
  quizId: "html-mq14"
};
