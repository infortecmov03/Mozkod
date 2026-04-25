import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m11",
  title: "Fase 3: RoadRunner: PHP em Alta Escala com Workers de Go",
  enableInteractive: true,
  quizId: "php-mq11",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏃 O Atleta da Infraestrutura</h2>
        <p class="text-lg leading-relaxed opacity-90">RoadRunner é um servidor de aplicação escrito em Go que escala processos PHP de forma resiliente, eliminando o overhead do FastCGI clássico.</p>
      </div>
    </div>
  `
};
