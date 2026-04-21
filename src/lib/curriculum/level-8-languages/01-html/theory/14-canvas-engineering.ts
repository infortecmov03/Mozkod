import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m14",
  title: "Canvas 2D: Rendering Pipeline e Buffers",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 text-headline">🖌️ Engenharia Gráfica</h2>
        <p>Desenhar no Canvas exige entender o ciclo de atualização do ecrã. Um Engenheiro não usa <code>setInterval</code> para animações.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">RequestAnimationFrame (RAF)</h3>
        <p>Sincroniza o seu código de desenho com o V-Sync do monitor. Se o monitor for 120Hz, o RAF corre 120 vezes por segundo.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">function</span> <span class="text-accent">render</span>() {<br/>
          &nbsp;&nbsp;<span class="text-muted-foreground">// Desenha o frame</span><br/>
          &nbsp;&nbsp;<span class="text-primary">requestAnimationFrame</span>(render);<br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline">OffscreenCanvas</h3>
        <p>A funcionalidade definitiva para performance. Permite renderizar gráficos pesados numa <strong>Web Worker</strong>, deixando a thread principal livre para a interação do utilizador.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Manipulação de Pixels (ImageData)</h3>
        <p>Podes ler e escrever a cor de cada pixel individualmente, permitindo criar filtros de imagem (como o Instagram) manualmente.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <span class="text-primary">const</span> data = ctx.<span class="text-accent">getImageData</span>(0, 0, w, h);
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq14"
};
