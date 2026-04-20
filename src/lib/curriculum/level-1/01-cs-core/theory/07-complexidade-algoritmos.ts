import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t7",
  title: "Complexidade de Algoritmos: Big O",
  youtubeVideoId: "v4cd1O4zkGw",
  content: `
    <div class="space-y-6">
      <div class="bg-red-50 dark:bg-red-950 p-6 rounded-2xl border border-red-200 dark:border-red-900">
        <h2 class="text-2xl font-bold mb-4">⚡ Rapidez vs Eficiência</h2>
        <p>Como sabemos se um algoritmo é bom? Medimos quantos passos ele dá conforme os dados crescem.</p>
        <ul class="list-disc ml-6 mt-4 space-y-2">
          <li><strong>O(1):</strong> Tempo constante (sempre rápido).</li>
          <li><strong>O(n):</strong> Tempo linear (cresce com a lista).</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "cs-t7-quiz"
};