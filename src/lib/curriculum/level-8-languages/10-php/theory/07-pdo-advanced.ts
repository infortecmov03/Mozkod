import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m7",
  title: "Fase 2: PDO e Segurança: Prepared Statements e ACID",
  enableInteractive: true,
  quizId: "php-mq7",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💾 Persistência de Nível Industrial
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Dominar o <strong>PDO (PHP Data Objects)</strong> é essencial para criar camadas de dados seguras contra SQL Injection e garantir a integridade via transações ACID.
        </p>
      </div>
    </div>
  `
};
