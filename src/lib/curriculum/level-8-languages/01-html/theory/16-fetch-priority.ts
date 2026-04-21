import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m16",
  title: "Fetch Priority e Gestão de LCP",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 text-headline">⚡ Priorizando o que Importa</h2>
        <p>O browser descarrega centenas de ficheiros. O Engenheiro Master diz ao browser quais são os mais importantes para que o utilizador veja o site "carregado" mais cedo.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Atributo 'fetchpriority'</h3>
        <p>Diga ao motor do browser para dar prioridade alta ao banner principal (LCP - Largest Contentful Paint).</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">&lt;img</span> <span class="text-accent">src</span>=<span class="text-green-400">"hero.jpg"</span> <span class="text-accent">fetchpriority</span>=<span class="text-green-400">"high"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Otimização de Fontes</h3>
        <p>Fontes costumam ser a maior causa de picos de layout (CLS). Use <code>swap</code> para mostrar uma fonte do sistema enquanto a principal descarrega.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          @font-face { <span class="text-accent">font-display</span>: swap; }
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Critical Path (Caminho Crítico)</h3>
        <p>Identifique o CSS mínimo necessário para renderizar o topo da página e coloque-o <strong>in-line</strong> numa tag <code>&lt;style&gt;</code> no <code>&lt;head&gt;</code>. O resto deve ser carregado de forma assíncrona.</p>
      </div>
    </div>
  `,
  quizId: "html-mq16"
};
