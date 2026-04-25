import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m15",
  title: "Fase 3: Arquitetura Hexagonal em Projetos PHP",
  enableInteractive: true,
  quizId: "php-mq15",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">⬢ Desacoplamento Total</h2>
        <p class="text-lg leading-relaxed opacity-90">Separe a sua regra de negócio (Core) da infraestrutura (DB, API) usando o padrão Ports and Adapters.</p>
      </div>
    </div>
  `
};
