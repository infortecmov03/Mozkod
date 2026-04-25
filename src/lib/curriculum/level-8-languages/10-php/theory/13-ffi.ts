import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m13",
  title: "Fase 3: FFI: Chamando Funções C Nativa do PHP",
  enableInteractive: true,
  quizId: "php-mq13",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🌉 A Ponte para o Silício</h2>
        <p class="text-lg leading-relaxed opacity-90">O FFI permite que o PHP invoque bibliotecas dinâmicas escritas em C/Rust sem a necessidade de escrever extensões complexas.</p>
      </div>
    </div>
  `
};
