
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m16",
  title: "Fase 4: Auditoria de Performance e Profiling de CSS",
  enableInteractive: true,
  quizId: "css-mq16",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🔬 Diagnosticando a Lentidão</h2>
        <p class="text-lg leading-relaxed opacity-90">
          A performance de CSS é medida pelo tempo que o browser leva para calcular o layout e pintar os pixels. No nível Master, usamos o <strong>Profiler</strong> para detetar seletores lentos e reflows desnecessários.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. CSS Recalculation</h3>
        <p class="text-sm">Sempre que mudas uma classe via JS, o browser deve verificar todos os seletores para ver o que mudou. Seletores profundos como <code>div > ul > li > a</code> são muito mais caros que classes únicas.</p>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Will-change e Camadas da GPU</h3>
        <p class="text-sm">Usamos <code>will-change</code> para avisar o browser que um elemento vai mudar, permitindo que ele crie uma camada separada na GPU.</p>
        <pre><code class="language-css">
.box {
  will-change: transform;
}
        </code></pre>
      </section>
    </div>
  `
};
