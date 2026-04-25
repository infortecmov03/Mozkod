import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m20",
  title: "Fase 4: gRPC e Microserviços de Alta Disponibilidade",
  enableInteractive: true,
  quizId: "php-mq20",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">📡 Comunicação Binária Eficiente</h2>
        <p class="text-lg leading-relaxed opacity-90">Abandone o JSON para comunicação interna. Use Protocol Buffers para atingir latência ultra-baixa entre microserviços.</p>
      </div>
    </div>
  `
};
