import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "eng-t3",
  title: "Web Development Vocabulary",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">🌐 Frontend & Backend</h2>
        <p>Understanding the web means knowing these core terms:</p>
        <ul class="list-disc ml-6 space-y-2 mt-4">
          <li><strong>Browser:</strong> The software used to view websites (Chrome, Firefox).</li>
          <li><strong>Server:</strong> A computer that provides data to browsers.</li>
          <li><strong>Request:</strong> Asking the server for information.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "eng-t3-quiz"
};