
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m18",
  title: "Service Workers e App Shell Architecture",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">📶 Conectividade Resiliente</h2>
      <p>O Service Worker é um proxy entre o browser e a rede. Ele permite que o teu esqueleto HTML (App Shell) carregue instantaneamente do cache, mesmo quando a ligação à internet falha.</p>
      <p>Este módulo ensina a desenhar a arquitetura "Offline First", onde a interface é persistente e os dados são sincronizados de forma transparente em background.</p>
    </div>
  `,
  quizId: "html-mq18"
};
