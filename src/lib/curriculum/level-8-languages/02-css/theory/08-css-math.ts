
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m8",
  title: "CSS Math: clamp(), min(), max() e calc()",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧮 Lógica de Design Programática</h2>
        <p class="text-lg leading-relaxed">
          As funções matemáticas nativas do CSS eliminam a necessidade de JavaScript para cálculos de layout simples, permitindo interfaces fluidas que se adaptam a qualquer ecrã com performance de silício.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">clamp(): A Ferramenta Definitiva</h3>
        <p>O <code>clamp(min, ideal, max)</code> é o rei da tipografia responsiva. Ele garante que a fonte nunca fique demasiado pequena num telemóvel nem gigante num monitor 4K.</p>
        
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">font-size</span>: <span class="text-accent">clamp(1rem, 5vw, 4rem)</span>;
          <br/><span class="text-muted-foreground text-xs">// Mínimo: 16px | Ideal: 5% da largura | Máximo: 64px</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Rácios de Aspeto Dinâmicos</h3>
        <p>Usar <code>calc()</code> combinado com variáveis permite criar sistemas de grelha inteligentes onde o espaçamento é sempre um múltiplo de uma unidade base.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <span class="text-primary">margin-top</span>: <span class="text-accent">calc(var(--spacing-unit) * 1.5)</span>;
        </div>
      </div>
    </div>
  `,
  quizId: "css-mq8"
};
