import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t2",
  title: "CSS: Seletores e Estilo",
  content: `
    <div class="space-y-6">
      <div class="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-900">
        <h2 class="text-2xl font-bold mb-4">🎨 Dando Cor à Web</h2>
        <p>O CSS (Cascading Style Sheets) controla a aparência. Os seletores dizem ao navegador qual elemento deve ser estilizado.</p>
      </div>
      <div class="bg-card p-4 rounded-lg border font-code">
        p { color: blue; font-size: 16px; }
      </div>
    </div>
  `,
  quizId: "web-t2-quiz"
};