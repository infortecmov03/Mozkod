import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t10",
  title: "Hierarquia de Cache: A Velocidade do Silício",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏎️ Combatendo a Latência</h2>
        <p class="text-lg leading-relaxed">
          A memória RAM é muito lenta para acompanhar a CPU. Para evitar que o processador fique parado à espera de dados, usamos a <strong>Hierarquia de Cache</strong>: pequenas memórias ultra-rápidas integradas no chip.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Os Níveis de Cache (L1, L2, L3)</h3>
        <div class="space-y-4">
          <div class="p-4 bg-card border rounded-xl border-accent/30">
            <h4 class="font-bold text-accent">L1 Cache (Nível 1)</h4>
            <p class="text-xs">Integrada no núcleo. Velocidade de nanosegundos. Tamanho minúsculo (KB).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-accent/20">
            <h4 class="font-bold text-accent">L2 Cache (Nível 2)</h4>
            <p class="text-xs">Intermédia. Maior que a L1, mas ligeiramente mais lenta.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-accent/10">
            <h4 class="font-bold text-accent">L3 Cache (Nível 3)</h4>
            <p class="text-xs">Partilhada entre todos os núcleos da CPU. Tamanho maior (MB), mais lenta que as outras.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Hit vs Miss</h3>
        <p class="text-sm">Quando a CPU encontra o dado na cache, chamamos de <strong>Cache Hit</strong>. Se não encontrar e tiver de ir à RAM, temos um <strong>Cache Miss</strong>, o que causa um atraso massivo na execução.</p>
      </div>
    </div>
  `,
  quizId: "cs-t10-quiz"
};