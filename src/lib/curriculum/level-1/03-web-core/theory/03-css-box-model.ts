import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t3",
  title: "CSS Box Model: Margens e Bordas",
  content: `
    <div class="space-y-6">
      <div class="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-900">
        <h2 class="text-2xl font-bold mb-4">📦 Tudo é uma Caixa</h2>
        <p>No CSS, cada elemento é tratado como uma caixa retangular composta por: Content, Padding, Border e Margin.</p>
      </div>
    </div>
  `,
  quizId: "web-t3-quiz"
};
