
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m14",
  title: "Canvas 2D: Rendering Pipeline e Buffers",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🖌️ Engenharia Gráfica</h2>
      <p>Desenhar no Canvas exige entender o ciclo de atualização do ecrã. Usar <code>requestAnimationFrame</code> garante animações fluidas.</p>
      <h3>OffscreenCanvas</h3>
      <p>Permite renderizar gráficos numa Web Worker, libertando a thread principal para manter a interface interativa enquanto processas gráficos pesados ou frames de jogos.</p>
    </div>
  `,
  quizId: "html-mq14"
};
