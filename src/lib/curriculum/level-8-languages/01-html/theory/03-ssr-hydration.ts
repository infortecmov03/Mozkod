import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m4",
  title: "SSR, SSG e a Hidratação do DOM: Estratégias de Renderização",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary text-headline text-headline">
          🚀 A Jornada do Documento
        </h2>
        <p class="text-lg leading-relaxed">
          Para um Engenheiro Master, escolher entre SSR e SSG não é uma questão de preferência, mas de <strong>arquitetura de sistemas</strong>. O objetivo é minimizar o tempo em que o utilizador vê uma página branca.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <div class="p-6 bg-card border rounded-2xl space-y-4">
          <h3 class="text-lg font-bold font-headline text-accent">SSR (Server-Side)</h3>
          <p class="text-sm text-muted-foreground">O HTML é gerado dinamicamente no servidor em cada request. Essencial para dados que mudam em tempo real (ex: preços de ações).</p>
          <div class="bg-black/20 p-2 rounded font-code text-[10px]">Request -> DB -> Render HTML -> Browser</div>
        </div>
        <div class="p-6 bg-card border rounded-2xl space-y-4">
          <h3 class="text-lg font-bold font-headline text-green-400">SSG (Static Generation)</h3>
          <p class="text-sm text-muted-foreground">HTML gerado no momento do build. Entregue via CDN com latência mínima. Padrão ouro para blogs e documentação.</p>
          <div class="bg-black/20 p-2 rounded font-code text-[10px]">Build -> CDN -> Cache -> Instant Response</div>
        </div>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary">O Processo de Hidratação (Hydration)</h3>
        <p>A hidratação é o processo onde o JavaScript do cliente "acorda" o HTML estático. Ele percorre o DOM e anexa os event listeners. Se o JS for muito pesado, o utilizador vê o botão mas não consegue clicar — o chamado <em>Rage Click</em>.</p>
        
        <div class="bg-red-500/5 p-4 rounded-xl border border-red-500/20">
          <h4 class="font-bold text-red-400 mb-2 italic">⚠️ Alerta de Performance:</h4>
          <p class="text-sm">Hidratação excessiva bloqueia a <strong>Main Thread</strong>. Estratégias modernas como <em>Islands Architecture</em> (Astro) ou <em>Resumability</em> (Qwik) tentam eliminar este custo.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq4"
};
