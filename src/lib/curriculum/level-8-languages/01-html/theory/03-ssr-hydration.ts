
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m3",
  title: "SSR, SSG e a Hidratação do DOM",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">💧 Do Servidor ao Cliente</h2>
        <p>Entenda como o HTML gerado no servidor se torna interativo no browser.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Padrões de Renderização</h3>
        <ul>
          <li><strong>Server-Side Rendering (SSR):</strong> HTML gerado em cada request.</li>
          <li><strong>Static Site Generation (SSG):</strong> HTML gerado no build.</li>
          <li><strong>Hydration:</strong> O processo onde o JavaScript do cliente "acorda" o HTML estático.</li>
        </ul>
        <p class="text-yellow-500 font-bold">Nota de Engenharia:</p>
        <p>A hidratação excessiva pode causar o "TBT" (Total Blocking Time). O HTML Master busca o equilíbrio entre conteúdo rápido e interatividade.</p>
      </div>
    </div>
  `,
  quizId: "html-mq3"
};
