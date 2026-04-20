import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t4",
  title: "CSS Flexbox: Layout Flexível",
  content: `
    <div class="space-y-6">
      <div class="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-900">
        <h2 class="text-2xl font-bold mb-4">↕️ Alinhamento Moderno</h2>
        <p>O Flexbox é um modelo de layout unidimensional que torna fácil alinhar elementos em colunas ou linhas, mesmo com tamanhos desconhecidos.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Propriedades do Container</h3>
        <ul>
          <li><strong>flex-direction:</strong> Define a direção (row ou column).</li>
          <li><strong>justify-content:</strong> Alinhamento no eixo principal.</li>
          <li><strong>align-items:</strong> Alinhamento no eixo cruzado.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "web-t4-quiz"
};