
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m4",
  title: "Box Model Internals e Propriedades Lógicas",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 font-headline">🌍 Layouts Agnosticos a Direção</h2>
        <p class="text-lg">Tradicionalmente, usamos <code>left</code>, <code>right</code>, <code>top</code> e <code>bottom</code>. No entanto, na web global, a direção do texto pode mudar (ex: Árabe, Hebraico). Propriedades Lógicas resolvem isto focando no fluxo do conteúdo.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Mapeamento Moderno</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-4 rounded-xl border border-white/5">
            <h4 class="font-bold text-accent mb-2">Físico (Antigo)</h4>
            <ul class="text-xs space-y-1 opacity-70">
              <li>margin-left</li>
              <li>padding-top</li>
              <li>width / height</li>
            </ul>
          </div>
          <div class="bg-card p-4 rounded-xl border border-white/5">
            <h4 class="font-bold text-green-400 mb-2">Lógico (Elite)</h4>
            <ul class="text-xs space-y-1">
              <li>margin-inline-start</li>
              <li>padding-block-start</li>
              <li>inline-size / block-size</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">Porquê usar inline-size?</h3>
        <p>Se o teu site for traduzido para uma língua vertical (como Japonês tradicional), <code>width</code> continuaria a ser a largura horizontal, quebrando o layout. <code>inline-size</code> adapta-se automaticamente à dimensão em que o texto flui.</p>
        
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/10">
          .card { <br/>
          &nbsp;&nbsp;<span class="text-accent">inline-size</span>: 100%; <span class="text-muted-foreground">// Largura lógica</span><br/>
          &nbsp;&nbsp;<span class="text-accent">margin-block</span>: 2rem; <span class="text-muted-foreground">// Margem Top e Bottom lógica</span><br/>
          }
        </div>
      </div>
    </div>
  `,
  quizId: "css-mq4"
};
