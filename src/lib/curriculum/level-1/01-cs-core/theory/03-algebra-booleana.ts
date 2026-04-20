import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "cs-t3",
  title: "Álgebra Booleana e Circuitos",
  youtubeVideoId: "95v88Oit0H8",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          ⚡ Da Matemática ao Hardware
        </h2>
        <p class="text-lg leading-relaxed">
          A Álgebra Booleana é a matemática que simplifica circuitos complexos em expressões lógicas simples.
        </p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Propriedades Essenciais</h3>
        <ul>
          <li><strong>Identidade:</strong> A AND 1 = A</li>
          <li><strong>Nulo:</strong> A AND 0 = 0</li>
          <li><strong>Inversão:</strong> NOT (NOT A) = A</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "cs-t3-quiz"
};