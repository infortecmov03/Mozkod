
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m10",
  title: "O Escalonador GMP: Por dentro do Runtime",
  content: `
    <div class="space-y-6">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20">
        <h2 class="text-2xl font-bold mb-4">⚙️ Pilar 2: Concorrência - O Modelo GMP</h2>
        <p class="text-lg">O segredo da performance de Go está no seu scheduler M:N.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <ul>
          <li><strong>G (Goroutine):</strong> A unidade de execução.</li>
          <li><strong>M (Machine):</strong> A thread real do sistema operativo.</li>
          <li><strong>P (Processor):</strong> O recurso necessário para executar G em M.</li>
        </ul>
        <p>O scheduler usa <strong>Work Stealing</strong> para equilibrar a carga entre processadores.</p>
      </div>
    </div>
  `,
  quizId: "go-mq10"
};
