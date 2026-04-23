
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t5",
  title: "Build Tools: Vite, Webpack e o Poder do Bundling",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚙️ Do Código à Produção</h2>
        <p class="text-lg leading-relaxed">Browsers não entendem centenas de ficheiros importados uns nos outros de forma eficiente. Build Tools pegam no seu código de desenvolvimento e transformam-no em pacotes (bundles) otimizados.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Vite: A Velocidade da Luz</h3>
        <p class="text-sm">O Vite utiliza <strong>ES Modules</strong> nativos durante o desenvolvimento, o que torna o arranque do servidor instantâneo, independentemente do tamanho do projeto.</p>
        
        <h3 class="text-xl font-bold font-headline">2. Webpack: O Veterano Robusto</h3>
        <p class="text-sm">Ainda é o padrão para configurações complexas de grandes empresas. O seu poder reside na capacidade de processar qualquer tipo de ativo (imagens, CSS, fontes) via loaders.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Tree Shaking</h4>
          <p class="text-sm">É a técnica de remover código que não está a ser usado. Se importas apenas uma função de uma biblioteca de 1MB, o build tool garante que os outros 99% são eliminados do ficheiro final.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q5"
};
