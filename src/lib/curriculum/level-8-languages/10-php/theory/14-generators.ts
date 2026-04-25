import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m14",
  title: "Fase 3: Generators: Iteração Massiva com Memória Constante",
  enableInteractive: true,
  quizId: "php-mq14",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">♻️ Otimizando Grandes Coleções</h2>
        <p class="text-lg leading-relaxed opacity-90">Generators permitem processar milhões de linhas de um ficheiro mantendo o consumo de RAM em nível constante (O(1)).</p>
      </div>
    </div>
  `
};
