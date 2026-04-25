import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m5",
  title: "Fase 2: Flexbox Mastery - Eixos, Gap e Intrinsic Sizing",
  enableInteractive: true,
  quizId: "css-mq5",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ↕️ Alinhamento de Fluxo Único
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Flexbox</strong> é a ferramenta definitiva para alinhar componentes numa única dimensão. O segredo da maestria não é apenas centralizar, mas controlar o crescimento (grow) e o encolhimento (shrink) dos itens de forma preditiva.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Main Axis e Cross Axis</h3>
        <p class="text-sm">A direção do fluxo (flex-direction) define qual eixo é o principal. As propriedades de alinhamento reagem a este eixo.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;style&gt;
  .container {
    display: flex;
    gap: 15px;
    background: #f1f5f9;
    padding: 20px;
    border-radius: 12px;
    /* Alinha no eixo principal (horizontal por padrão) */
    justify-content: space-around;
    /* Alinha no eixo cruzado (vertical por padrão) */
    align-items: center;
    height: 150px;
  }
  .item {
    background: #3b82f6;
    color: white;
    padding: 15px;
    border-radius: 8px;
    font-weight: bold;
  }
&lt;/style&gt;

&lt;div class="container"&gt;
  &lt;div class="item"&gt;Item 1&lt;/div&gt;
  &lt;div class="item"&gt;Item 2&lt;/div&gt;
  &lt;div class="item"&gt;Item 3&lt;/div&gt;
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Flex-Grow, Shrink e Basis</h3>
        <p class="text-sm">O atalho <code>flex: 1 1 auto;</code> é a fundação da responsividade de componentes.</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block mb-1">Flex-grow:</strong> Define se o item pode esticar para preencher o vazio.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block mb-1">Flex-shrink:</strong> Define se o item pode "esmagar" se não houver espaço.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block mb-1">Flex-basis:</strong> O tamanho inicial ideal antes do cálculo de crescimento. Use 'auto' para respeitar o conteúdo.
          </li>
        </ul>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Dica Master: Gap</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Nunca mais use margens manuais para separar itens flex. A propriedade <code>gap</code> lida com o espaçamento sem criar margens indesejadas nas bordas do container, mantendo a geometria perfeita."
        </p>
      </section>
    </div>`
};