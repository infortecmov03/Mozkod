import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m10",
  title: "Fase 3: Fibers e Concorrência Cooperativa em PHP 8.1",
  enableInteractive: true,
  quizId: "php-mq10",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🧵 Concorrência Leve</h2>
        <p class="text-lg leading-relaxed opacity-90">Fibers são a infraestrutura do PHP para pausar e retomar a execução em qualquer ponto da stack, permitindo a criação de loops de eventos ultra-rápidos.</p>
      </div>
    </div>
  `
};
