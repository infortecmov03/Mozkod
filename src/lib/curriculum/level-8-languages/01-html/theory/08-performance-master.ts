import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m8",
  title: "Performance: Resource Hints e o Caminho Crítico",
  content: `
    <div class="space-y-8">
      <div class="bg-green-500/10 p-6 rounded-2xl border border-green-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-headline">
          ⚡ Velocidade de Elite
        </h2>
        <p class="text-lg">O HTML Master controla como e quando o browser descarrega os recursos. Cada milissegundo poupado no parsing melhora as métricas de Core Web Vitals.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary">Preconnect e DNS-Prefetch</h3>
        <p>Instrua o browser a preparar a conexão antes mesmo do utilizador clicar. Útil para fontes do Google ou APIs de terceiros.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm">
          <span class="text-primary">&lt;link</span> <span class="text-accent">rel</span>=<span class="text-green-400">"preconnect"</span> <span class="text-accent">href</span>=<span class="text-green-400">"https://fonts.gstatic.com"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Preload vs Prefetch</h3>
        <ul class="space-y-4">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-accent">Preload:</strong> Recurso crítico necessário para a página ATUAL (ex: a imagem do banner).
            <br/><code class="text-[10px]">rel="preload" as="image"</code>
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-accent">Prefetch:</strong> Recurso que PODE ser necessário na PRÓXIMA página (baixa prioridade).
            <br/><code class="text-[10px]">rel="prefetch" as="script"</code>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-primary">Otimização de Imagens (Loading=lazy)</h3>
        <p>Nunca descarregue imagens que o utilizador ainda não viu (abaixo da "dobra").</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm">
          <span class="text-primary">&lt;img</span> <span class="text-accent">src</span>=<span class="text-green-400">"foto.jpg"</span> <span class="text-accent">loading</span>=<span class="text-green-400">"lazy"</span> <span class="text-accent">alt</span>=<span class="text-green-400">"..."</span><span class="text-primary">&gt;</span>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq8"
};
