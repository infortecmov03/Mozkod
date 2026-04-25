import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m16",
  title: "Fase 4: Auditoria de Performance e Profiling de CSS",
  enableInteractive: true,
  quizId: "css-mq16",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🔬 Diagnosticando a Lentidão de Renderização
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          A performance de CSS é medida pelo tempo que o browser leva para calcular o layout (Recalculate Style) e pintar os pixels (Paint). No nível Master, usamos o <strong>Profiler</strong> para detetar seletores lentos e reflows desnecessários que bloqueiam a thread principal.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Custo dos Seletores</h3>
        <p class="text-sm">Browsers leem seletores da direita para a esquerda. Seletores universais (<code>*</code>) ou muito profundos (<code>div > ul > li > a</code>) forçam o motor a processar milhares de elementos inutilmente.</p>
        <div class="p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
           <h4 class="font-bold text-red-400 text-xs mb-1">Amador ❌</h4>
           <code class="text-[10px]">.container .card .title span { ... }</code>
        </div>
        <div class="p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
           <h4 class="font-bold text-green-400 text-xs mb-1">Elite ✅</h4>
           <code class="text-[10px]">.card-title-highlight { ... }</code>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Content-Visibility: O Lazy Render</h3>
        <p class="text-sm leading-relaxed">
          A propriedade <code>content-visibility: auto</code> é a otimização de performance mais potente da atualidade. Ela diz ao browser para não renderizar elementos que estão fora do ecrã, poupando CPU e memória massivamente em páginas longas.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Auditoria com Lighthouse</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Utilize o painel Performance das DevTools para gravar um rasto de renderização. Procure por blocos roxos longos (Recalculate Styles). Se demorarem mais de 16ms, o seu site está a causar lag no utilizador."
        </p>
      </section>
    </div>`
};