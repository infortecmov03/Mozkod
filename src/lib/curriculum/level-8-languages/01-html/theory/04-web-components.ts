import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m5",
  title: "Web Components e Shadow DOM: Arquitetura de UI Nativa",
  content: `
    <div class="space-y-8">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-400 text-headline">
          📦 Componentização sem Frameworks
        </h2>
        <p class="text-lg leading-relaxed">
          Os Web Components são APIs nativas que permitem criar tags personalizadas que funcionam em qualquer lugar, do React ao PHP, sem dependências externas.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Custom Elements</h3>
        <p>O nome deve ter obrigatoriamente um hífen. O browser garante que nunca haverá conflito com tags nativas futuras.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-accent">customElements</span>.<span class="text-primary">define</span>(<span class="text-green-400">'cwm-card'</span>, MyCard);
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. HTML Templates</h3>
        <p>O elemento <code>&lt;template&gt;</code> é inerte. O browser faz o parse mas não renderiza até que o cliques via JS. É ideal para protótipos de alta performance.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">&lt;template</span> <span class="text-accent">id</span>=<span class="text-green-400">"row"</span><span class="text-primary">&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;tr&gt;&lt;td&gt;</span>Nome<span class="text-primary">&lt;/td&gt;&lt;/tr&gt;</span><br/>
          <span class="text-primary">&lt;/template&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Slots: Projeção de Conteúdo</h3>
        <p>Slots permitem que o utilizador do componente injete o seu próprio conteúdo em locais específicos da sombra (Shadow DOM).</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-muted-foreground">&lt;!-- Dentro do Shadow DOM --&gt;</span><br/>
          <span class="text-primary">&lt;slot</span> <span class="text-accent">name</span>=<span class="text-green-400">"icon"</span><span class="text-primary">&gt;&lt;/slot&gt;</span>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq5"
};
