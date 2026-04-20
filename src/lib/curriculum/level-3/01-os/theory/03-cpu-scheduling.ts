import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t3",
  title: "Escalonamento de CPU (Scheduling)",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-primary">⏱️ Decidindo Quem Corre</h2>
      <p>O escalonador decide qual processo no estado 'Ready' deve ocupar o processador a seguir.</p>
      
      <div class="space-y-4">
        <div class="p-3 border-l-4 border-primary bg-primary/5">
          <strong>FCFS (First-Come, First-Served):</strong> Simples mas pode causar o efeito comboio.
        </div>
        <div class="p-3 border-l-4 border-accent bg-accent/5">
          <strong>Round Robin:</strong> Cada processo tem um tempo fixo (Quantum). Essencial para interatividade.
        </div>
        <div class="p-3 border-l-4 border-yellow-500 bg-yellow-500/5">
          <strong>SJF (Shortest Job First):</strong> Minimiza o tempo médio de espera.
        </div>
      </div>
    </div>
  `,
  quizId: "os-q3"
};