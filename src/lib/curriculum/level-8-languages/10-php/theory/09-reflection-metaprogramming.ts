import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m9",
  title: "Fase 2: Reflection API: Introspecção de Classes e Atributos",
  enableInteractive: true,
  quizId: "php-mq9",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🔍 Olhando através do Código
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A Reflection API permite que o seu software se auto-analise em tempo de execução. É a tecnologia base para Injeção de Dependência e automação de metadados.
        </p>
      </div>
    </div>
  `
};
