import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m3",
  title: "Fase 1: Custom Properties e Design Tokens",
  enableInteractive: true,
  quizId: "css-mq3",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🎨 Variáveis Dinâmicas
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          As <strong>Custom Properties</strong> (--variável) transformaram o CSS numa linguagem de programação viva. Diferente de variáveis de SASS, estas respeitam o DOM e podem ser alteradas em tempo real.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Herança e Escopo</h3>
        <p class="text-sm">Variáveis no <code>:root</code> são globais. Mas podes redefinir variáveis dentro de um contentor específico para criar sub-temas.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;style&gt;
  :root { --bg-card: #f1f5f9; --text-card: #1e293b; }
  .dark-theme { --bg-card: #1e293b; --text-card: #f8fafc; }

  .card {
    background: var(--bg-card);
    color: var(--text-card);
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 10px;
  }
&lt;/style&gt;

&lt;div class="card"&gt;Card Tema Padrão&lt;/div&gt;

&lt;div class="dark-theme"&gt;
  &lt;div class="card"&gt;Card Tema Escuro (Variáveis Herdadas)&lt;/div&gt;
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Valores Fallback</h3>
        <p class="text-sm">Garante que o design não quebra se a variável falhar.</p>
        <pre><code class="language-html">
&lt;style&gt;
  .btn {
    /* Se --brand-color não existir, usa blue */
    background: var(--brand-color, blue);
    color: white;
    padding: 10px;
  }
&lt;/style&gt;
&lt;button class="btn"&gt;Botão Seguro&lt;/button&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Dica Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Utilize variáveis para números puros e faça cálculos com calc(). Ex: --scale: 1.2; width: calc(100px * var(--scale))."
        </p>
      </section>
    </div>
  `
};
