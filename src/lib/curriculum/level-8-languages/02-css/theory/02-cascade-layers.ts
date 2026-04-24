import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m2",
  title: "Fase 1: Cascade Layers (@layer) e a Nova Ordem",
  enableInteractive: true,
  quizId: "css-mq2",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧱 Resolvendo o Inferno da Cascata
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          As <strong>Cascade Layers (@layer)</strong> permitem-te definir a ordem de prioridade de blocos inteiros de código. Agora, podes garantir que o teu estilo personalizado sempre ganha de uma biblioteca externa, mesmo que o seletor da biblioteca seja mais forte.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Definindo a Ordem de Precedência</h3>
        <p class="text-sm">A ordem em que declaras as camadas no topo do ficheiro define a vitória. A última camada da lista tem a prioridade máxima.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;style&gt;
  /* Definimos que 'app' ganha de 'base' */
  @layer base, app;

  @layer app {
    .caixa { 
      background: #3b82f6; 
      padding: 20px; 
      color: white;
    }
  }

  @layer base {
    /* Mesmo com ID e !important (evite), esta camada perde para 'app' */
    div.caixa { 
      background: red; 
    }
  }
&lt;/style&gt;

&lt;div class="caixa"&gt;
  Esta caixa é AZUL porque a camada 'app' tem prioridade sobre 'base'.
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Organização Profissional</h3>
        <p class="text-sm">Um projeto de elite costuma organizar as camadas assim:</p>
        <ul class="space-y-3 text-sm">
          <li><strong>reset:</strong> Limpeza básica de browsers.</li>
          <li><strong>base:</strong> Tipografia e variáveis globais.</li>
          <li><strong>components:</strong> Botões, cards, inputs.</li>
          <li><strong>utilities:</strong> Classes de utilitário (ex: margin, padding).</li>
        </ul>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🚀 Vantagem Técnica</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Com @layer, deixamos de lutar contra seletores gigantes como '#main .sidebar .btn-primary'. O foco passa a ser a intenção arquitetural da camada."
        </p>
      </section>
    </div>
  `
};
