import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m19",
  title: "WebGPU: O Futuro do Gráfico no Browser",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 text-headline">🎮 Computação em GPU</h2>
        <p>A WebGPU é a evolução do WebGL. Ela dá acesso direto às funcionalidades modernas das placas gráficas (como Ray Tracing), permitindo gráficos 3D cinemáticos e aceleração de IA no browser.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Arquitetura de Pipelines</h3>
        <p>Diferente do WebGL que é imperativo, a WebGPU usa pipelines pré-compilados, reduzindo drasticamente o trabalho da CPU.</p>
        
        <h3 class="text-xl font-bold font-headline">WGSL: A Linguagem de Shaders</h3>
        <p>A WebGPU usa a <i>WebGPU Shading Language</i>. É uma linguagem de baixo nível similar ao Rust que corre diretamente nos núcleos da GPU.</p>

        <h3 class="text-xl font-bold font-headline text-accent">GPGPU: Além dos Jogos</h3>
        <p>Podes usar a GPU para cálculos matemáticos massivos que não têm nada a ver com imagem, como treinar uma rede neuronal ou processar Big Data diretamente no HTML do utilizador.</p>
      </div>
    </div>
  `,
  quizId: "html-mq19"
};
