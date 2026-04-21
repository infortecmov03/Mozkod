import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m11",
  title: "Compositing & Blending Modes",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎨 Photoshop no Browser</h2>
        <p class="text-lg leading-relaxed">
          Modos de mesclagem (Blending Modes) definem como as cores de um elemento interagem com o que está por baixo. É a base para efeitos visuais complexos sem precisar de imagens pré-editadas.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Mix-Blend-Mode vs Background-Blend-Mode</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">mix-blend-mode</h4>
            <p class="text-xs">Interação entre o elemento e o seu fundo (background do pai).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">background-blend-mode</h4>
            <p class="text-xs">Interação entre múltiplas imagens de fundo do próprio elemento.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Modos de Elite</h3>
        <ul class="space-y-2 text-sm">
          <li><strong>multiply:</strong> Multiplica as cores (escurece). Ótimo para remover fundos brancos de logotipos.</li>
          <li><strong>screen:</strong> Inverte, multiplica e inverte (clareia). Perfeito para efeitos de luz.</li>
          <li><strong>overlay:</strong> Mistura de multiply e screen, preservando o contraste médio.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "css-mq11"
};
