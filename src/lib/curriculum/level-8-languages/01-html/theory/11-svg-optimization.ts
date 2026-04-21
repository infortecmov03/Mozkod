
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m11",
  title: "SVG Acessível e Otimização de Performance",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">📐 Vetores como Código</h2>
      <p>SVGs não são imagens, são documentos XML. Tratá-los como tal permite animações, interatividade e acessibilidade superior.</p>
      <div class="bg-card p-4 rounded-xl border font-code text-sm">
        &lt;svg role="img" aria-labelledby="title-id"&gt;<br/>
        &nbsp;&nbsp;&lt;title id="title-id"&gt;Logo da Empresa&lt;/title&gt;<br/>
        &nbsp;&nbsp;...<br/>
        &lt;/svg&gt;
      </div>
      <p>Remover metadados inúteis de editores gráficos reduz o tamanho do HTML final e acelera drasticamente o parsing do DOM em dispositivos móveis.</p>
    </div>
  `,
  quizId: "html-mq11"
};
