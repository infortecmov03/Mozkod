
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m10",
  title: "O Escalonador GMP Internals",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">⚙️ Como o Go escala Goroutines</h2>
      <p>O modelo M:N do Go utiliza três entidades:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>G (Goroutine):</strong> A tarefa a ser executada.</li>
        <li><strong>M (Machine):</strong> A thread real do SO.</li>
        <li><strong>P (Processor):</strong> O contexto que liga G a M e gere as filas de execução.</li>
      </ul>
    </div>
  `,
  quizId: "go-mq10"
};
