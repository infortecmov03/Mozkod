import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m16",
  title: "C-Extensions com Cython e Performance Máxima",
  content: `
    <div class="space-y-8">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-orange-400">🏎️ Python à Velocidade de C</h2>
        <p class="text-lg">Quando as otimizações de Python chegam ao limite, o <strong>Cython</strong> permite adicionar tipagem estática e compilar o seu código diretamente para C, atingindo 100x mais velocidade em loops matemáticos.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Compilação Ahead-of-Time</h3>
        <p>O Cython gera ficheiros <code>.c</code> que são compilados em bibliotecas partilhadas (<code>.so</code> ou <code>.pyd</code>). O Python importa-as como se fossem módulos normais, mas correm em código de máquina puro.</p>
        
        <h3 class="text-xl font-bold font-headline text-primary">Liberando o GIL</h3>
        <p>No Cython, podes declarar blocos <code>with nogil:</code>, permitindo paralelismo real em múltiplos cores para tarefas puramente numéricas.</p>
      </div>
    </div>
  `,
  quizId: "py-mq16"
};
