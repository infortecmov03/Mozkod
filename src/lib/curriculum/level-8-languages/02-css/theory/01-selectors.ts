import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m1",
  title: "Fase 1: Seletores de Elite, Especificidade e :has()",
  enableInteractive: true,
  quizId: "css-mq1",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🎯 O Domínio da Seleção
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Um Engenheiro CSS não "chuta" seletores até funcionar. Ele desenha a <strong>especificidade</strong>. Entenda como o browser calcula o peso das regras e como usar os novos seletores relacionais.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Cálculo da Especificidade</h3>
        <p class="text-sm">O browser atribui pontos a cada seletor. Em caso de conflito, o peso maior ganha:</p>
        <div class="grid md:grid-cols-3 gap-4 text-center">
          <div class="p-4 bg-card border rounded-2xl border-white/5 shadow-lg">
             <span class="block text-2xl font-black text-accent">100</span>
             <span class="text-[10px] uppercase font-bold">IDs (#id)</span>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
             <span class="block text-2xl font-black text-primary">10</span>
             <span class="text-[10px] uppercase font-bold">Classes (.class)</span>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
             <span class="block text-2xl font-black text-muted-foreground">1</span>
             <span class="text-[10px] uppercase font-bold">Tags (h1, p)</span>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Seletores Modernos: :is(), :where() e :has()</h3>
        <p class="text-sm">Estes seletores permitem reduzir a repetição e criar lógicas relacionais que antes exigiam JavaScript.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: O Seletor de Parentesco (:has)</h4>
           <p class="text-xs text-muted-foreground">Estilize o card apenas se ele contiver uma imagem de destaque.</p>
           <pre><code class="language-html">
&lt;style&gt;
  .card { 
    padding: 20px; 
    border: 2px solid #ccc; 
    transition: 0.3s;
  }
  /* Seleciona o card APENAS se houver uma imagem dentro */
  .card:has(img) {
    border-color: #3b82f6;
    background: #eff6ff;
  }
&lt;/style&gt;

&lt;div class="card"&gt;
  &lt;p&gt;Este card não tem imagem (Borda Cinza).&lt;/p&gt;
&lt;/div&gt;

&lt;br&gt;

&lt;div class="card"&gt;
  &lt;img src="https://picsum.photos/seed/1/50/50" alt="Icon"&gt;
  &lt;p&gt;Este card tem imagem (Borda Azul)!&lt;/p&gt;
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Agrupamento com :is() e :where()</h3>
        <div class="space-y-4">
           <h4 class="font-bold text-sm">O Poder do :is()</h4>
           <p class="text-xs">Reduz seletores repetitivos. O peso de especificidade do :is() é o do seletor mais forte dentro dele.</p>
           <pre><code class="language-html">
&lt;style&gt;
  /* Em vez de h1, h2, h3 { ... } */
  :is(h1, h2, h3) {
    color: #3b82f6;
    text-transform: uppercase;
  }
&lt;/style&gt;
&lt;h1&gt;Título 1&lt;/h1&gt;
&lt;h2&gt;Título 2&lt;/h2&gt;
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Nunca use IDs para estilização em Design Systems. Use Classes para manter a especificidade baixa e uniforme, permitindo que as Cascade Layers gerenciem a prioridade de forma global."
        </p>
      </section>
    </div>
  `
};
