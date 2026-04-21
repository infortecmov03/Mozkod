import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m2",
  title: "Goroutines e o Escalonador GMP",
  content: `
    <div class="space-y-6">
      <div class="bg-cyan-500/10 p-6 rounded-2xl border border-cyan-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          ⚡ O Poder das Goroutines
        </h2>
        <p class="text-lg leading-relaxed">
          Uma Goroutine não é uma thread do Sistema Operativo. É uma "lightweight thread" gerida pelo runtime do Go. Podes subir 100.000 goroutines e consumir apenas alguns megabytes de RAM.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>O Modelo GMP</h3>
        <ul>
          <li><strong>G (Goroutine):</strong> O código a ser executado.</li>
          <li><strong>M (Machine):</strong> A thread real do SO.</li>
          <li><strong>P (Processor):</strong> O contexto de escalonamento.</li>
        </ul>
        <p>Go utiliza <strong>Work Stealing</strong>: se um processador terminar as suas tarefas, ele "rouba" goroutines de outros processadores para garantir que a CPU nunca esteja ociosa.</p>
      </div>
    </div>
  `,
  quizId: "go-mq2"
};