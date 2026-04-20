import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "cs-t10",
  title: "Hierarquia de Cache: L1, L2 e L3",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🚀 A Velocidade do Silício</h2>
      <p>A RAM é lenta comparada com a CPU. Por isso, usamos caches extremamente rápidas e pequenas dentro do processador.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>L1:</strong> Ultrarrápida, integrada no core.</li>
        <li><strong>L2:</strong> Maior que a L1, latência média.</li>
        <li><strong>L3:</strong> Partilhada entre todos os cores.</li>
      </ul>
    </div>
  `,
  quizId: "cs-q10"
};
