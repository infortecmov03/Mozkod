
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m4",
  title: "Web Components e Shadow DOM",
  content: `
    <div class="space-y-6">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20">
        <h2 class="text-2xl font-bold mb-4">📦 Componentização Nativa</h2>
        <p>Crie elementos HTML personalizados que funcionam em qualquer framework (React, Vue, Angular) ou até sem nenhum.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>A Tríade dos Web Components</h3>
        <ol>
          <li><strong>Custom Elements:</strong> Registrar novas tags (ex: &lt;cwm-player&gt;).</li>
          <li><strong>Shadow DOM:</strong> Encapsulamento total de estilo e marcação.</li>
          <li><strong>HTML Templates:</strong> O elemento &lt;template&gt; para definir estruturas reutilizáveis.</li>
        </ol>
      </div>
    </div>
  `,
  quizId: "html-mq4"
};
