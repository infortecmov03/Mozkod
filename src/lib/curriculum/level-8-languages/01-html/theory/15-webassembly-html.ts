
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m15",
  title: "WebAssembly: O Binário no seu HTML",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">⚙️ Velocidade Próxima do Nativo</h2>
      <p>WebAssembly (Wasm) permite correr código escrito em C++, Rust ou Go no browser. O HTML serve como o contentor que instancia o módulo binário e o liga ao ecossistema JavaScript.</p>
      <p>Ideal para editores de vídeo, processamento de imagem e cálculos matemáticos intensivos que o JS tradicional não consegue processar em tempo real.</p>
    </div>
  `,
  quizId: "html-mq15"
};
