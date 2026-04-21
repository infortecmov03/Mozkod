
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m16",
  title: "Fetch Priority e Gestão de LCP",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">⚡ Priorizando o que Importa</h2>
      <p>O atributo <code>fetchpriority="high"</code> em imagens hero garante que o browser as descarregue antes de scripts secundários, melhorando drasticamente o Largest Contentful Paint.</p>
      <p>Aprender a diferença entre <strong>Preload</strong> (carregamento obrigatório) e <strong>Prefetch</strong> (carregamento antecipado) é vital para a UX moderna.</p>
    </div>
  `,
  quizId: "html-mq16"
};
