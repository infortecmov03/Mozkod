
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m8",
  title: "Virtual Threads (Project Loom)",
  content: `
    <div class="space-y-6">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20">
        <h2 class="text-2xl font-bold mb-4">🧵 Pilar 2: Concorrência - Escala Massiva</h2>
        <p class="text-lg">Virtual Threads permitem que a JVM gira milhões de threads sem o overhead das threads do Sistema Operativo.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Mudança de Paradigma</h3>
        <p>Antes do Loom, o modelo era "thread-per-request" limitado pelo SO. Agora, podemos bloquear threads sem medo, pois a JVM faz o escalonamento eficiente sobre um pequeno pool de carrier threads.</p>
      </div>
    </div>
  `,
  quizId: "jv-mq8"
};
