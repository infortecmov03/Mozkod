import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m4",
  title: "SSR, SSG e a Hidratação do DOM: Estratégias de Renderização",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
          🚀 A Jornada do Documento
        </h2>
        <p class="text-lg leading-relaxed">
          Para um Engenheiro Master, escolher entre SSR e SSG não é uma questão de preferência, mas de <strong>arquitetura de sistemas</strong>. O objetivo é minimizar o tempo em que o utilizador vê uma página branca e maximizar a velocidade de resposta.
        </p>
      </div>

      <div class="grid gap-8">
        <section class="space-y-4">
          <h3 class="text-xl font-bold border-b border-white/10 pb-2">1. SSR (Server-Side Rendering)</h3>
          <p>O HTML é gerado dinamicamente no servidor para <strong>cada pedido</strong>. É ideal para páginas com dados que mudam constantemente (ex: feed de redes sociais ou painéis de stock).</p>
          <ul class="list-disc ml-6 space-y-1 text-sm">
            <li><span class="text-green-400 font-bold">Pró:</span> SEO excelente e dados sempre frescos.</li>
            <li><span class="text-red-400 font-bold">Contra:</span> Maior carga no servidor e TTFB (Time to First Byte) mais elevado.</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h3 class="text-xl font-bold border-b border-white/10 pb-2">2. SSG (Static Site Generation)</h3>
          <p>O HTML é gerado apenas uma vez no momento do <strong>build</strong>. Os ficheiros são guardados numa CDN e entregues instantaneamente.</p>
          <ul class="list-disc ml-6 space-y-1 text-sm">
            <li><span class="text-green-400 font-bold">Pró:</span> Performance extrema e custo de servidor quase zero.</li>
            <li><span class="text-red-400 font-bold">Contra:</span> Dados podem ficar desatualizados até ao próximo build (resolvido com ISR).</li>
          </ul>
        </section>

        <section class="space-y-4 bg-accent/5 p-6 rounded-2xl border border-accent/10">
          <h3 class="text-xl font-bold text-accent">💧 O Processo de Hidratação (Hydration)</h3>
          <p class="leading-relaxed">
            A hidratação é o processo "mágico" onde o JavaScript do cliente percorre o HTML estático enviado pelo servidor e anexa os <strong>Event Listeners</strong> para torná-lo interativo.
          </p>
          <div class="bg-black/40 p-4 rounded-xl font-code text-xs mt-4">
            // Exemplo conceitual:<br/>
            1. Servidor envia: &lt;button id="btn"&gt;Clique Aqui&lt;/button&gt;<br/>
            2. Browser desenha o botão (o utilizador vê, mas não funciona).<br/>
            3. JS carrega e faz: document.getElementById('btn').addEventListener(...)<br/>
            4. Hidratação completa: O botão agora é interativo.
          </div>
          <p class="text-sm text-yellow-500 font-bold mt-4 italic">
            ⚠️ Atenção: Hidratação excessiva causa um bloqueio da Main Thread, aumentando o TBT (Total Blocking Time).
          </p>
        </section>
      </div>
    </div>
  `,
  quizId: "html-mq4"
};
