import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m20",
  title: "Microdata, JSON-LD e SEO de Dados",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 text-primary text-headline">🏷️ Web Semântica de Dados</h2>
        <p>Dados estruturados permitem que o Google exiba "Rich Snippets" (estrelas, preços, stock) diretamente nos resultados de busca.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">JSON-LD: O Formato Recomendado</h3>
        <p>Em vez de poluir o HTML com atributos, colocamos um bloco de script com um objeto JSON seguindo o padrão da <strong>Schema.org</strong>.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs border border-white/5 space-y-1">
          <span class="text-primary">&lt;script</span> <span class="text-accent">type</span>=<span class="text-green-400">"application/ld+json"</span><span class="text-primary">&gt;</span><br/>
          {<br/>
          &nbsp;&nbsp;<span class="text-accent">"@context"</span>: <span class="text-green-400">"https://schema.org"</span>,<br/>
          &nbsp;&nbsp;<span class="text-accent">"@type"</span>: <span class="text-green-400">"Course"</span>,<br/>
          &nbsp;&nbsp;<span class="text-accent">"name"</span>: <span class="text-green-400">"HTML Master"</span>,<br/>
          &nbsp;&nbsp;<span class="text-accent">"provider"</span>: { <span class="text-accent">"name"</span>: <span class="text-green-400">"Codworks Moz"</span> }<br/>
          }<br/>
          <span class="text-primary">&lt;/script&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Breadcrumbs e Knowledge Graph</h3>
        <p>Implementar dados estruturados ajuda a construir a autoridade da sua marca no grafo de conhecimento do Google.</p>
      </div>
    </div>
  `,
  quizId: "html-mq20"
};
