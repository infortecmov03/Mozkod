import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m6",
  title: "Fase 2: Gestão de Memória: Reference Counting e GC Internals",
  enableInteractive: true,
  quizId: "php-mq6",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧠 Engenharia de Memória
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O PHP utiliza <strong>Reference Counting</strong> como motor principal de limpeza. No nível Master, controlamos como o Garbage Collector lida com referências circulares para evitar <i>Memory Leaks</i> em processos de longa duração.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Copy-on-Write (COW)</h3>
        <p class="text-sm">O PHP é extremamente eficiente ao lidar com arrays gigantes. Ele não duplica a memória ao passar um array para uma função, apenas o faz se o conteúdo for modificado.</p>
      </section>
    </div>
  `
};
