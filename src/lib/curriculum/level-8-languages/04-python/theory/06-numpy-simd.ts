import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m6",
  title: "NumPy: Vectorização e SIMD Internals",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚡ O Fim dos Loops de Python</h2>
        <p class="text-lg">NumPy não é apenas uma biblioteca de arrays; é um motor que executa operações em C e utiliza instruções <strong>SIMD (Single Instruction, Multiple Data)</strong> do seu processador para processar múltiplos números num único ciclo de relógio.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Vectorização: Performance Nativa</h3>
        <p>Ao realizar uma operação num array NumPy, a iteração acontece em C. Isto elimina o overhead do interpretador Python em cada passo.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-accent">
          import numpy as np<br/>
          a = np.array([1, 2, 3])<br/>
          b = np.array([4, 5, 6])<br/>
          <span class="text-muted-foreground">// Operação vectorizada (rápida)</span><br/>
          c = a + b 
        </div>

        <h3 class="text-xl font-bold font-headline">Broadcasting e Layout de Memória</h3>
        <p>NumPy utiliza <strong>Strides</strong> para percorrer a memória de forma eficiente (Row-major vs Column-major). O broadcasting permite operar entre arrays de diferentes formas sem copiar dados, economizando Gigabytes de RAM.</p>
      </div>
    </div>
  `,
  quizId: "py-mq6"
};
