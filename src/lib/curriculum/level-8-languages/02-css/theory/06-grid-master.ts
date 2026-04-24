import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m6",
  title: "Fase 2: Grid Layout Master - Geometria 2D e Áreas",
  enableInteractive: true,
  quizId: "css-mq6",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏁 A Orquestração Bidimensional
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Enquanto o Flexbox brilha em uma única dimensão, o <strong>CSS Grid</strong> é o motor de layout bidimensional definitivo. Ele permite controlar linhas e colunas simultaneamente, permitindo designs que antes eram impossíveis sem hacks complexos.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Unidades Fracionárias (fr)</h3>
        <p class="text-sm">A unidade <code>fr</code> representa uma fração do espaço livre. É o segredo para layouts que "respiram" e se adaptam sem quebras.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;style&gt;
  .grid-system {
    display: grid;
    /* 1 coluna de 150px e o resto dividido em 2 frações e 1 fração */
    grid-template-columns: 150px 2fr 1fr;
    gap: 10px;
    background: #e2e8f0;
    padding: 10px;
    border-radius: 12px;
  }
  .box {
    background: #3b82f6;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
  }
&lt;/style&gt;

&lt;div class="grid-system"&gt;
  &lt;div class="box"&gt;Fixed 150px&lt;/div&gt;
  &lt;div class="box"&gt;Flexible 2fr&lt;/div&gt;
  &lt;div class="box"&gt;Flexible 1fr&lt;/div&gt;
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Grid Template Areas</h3>
        <p class="text-sm">Esta é a forma mais visual de desenhar um site. Tu dás nomes às áreas e o browser monta o quebra-cabeças.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;style&gt;
  .dashboard {
    display: grid;
    grid-template-areas: 
      "head head"
      "side main"
      "foot foot";
    grid-template-columns: 100px 1fr;
    gap: 10px;
  }
  .area { background: #8b5cf6; color: white; padding: 10px; border-radius: 6px; }
  .h { grid-area: head; background: #6d28d9; }
  .s { grid-area: side; }
  .m { grid-area: main; min-height: 100px; }
  .f { grid-area: foot; background: #4c1d95; }
&lt;/style&gt;

&lt;div class="dashboard"&gt;
  &lt;div class="area h"&gt;HEADER&lt;/div&gt;
  &lt;div class="area s"&gt;SIDE&lt;/div&gt;
  &lt;div class="area m"&gt;MAIN CONTENT&lt;/div&gt;
  &lt;div class="area f"&gt;FOOTER&lt;/div&gt;
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Dica de Performance</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O CSS Grid reduz a profundidade do DOM. Onde antes precisavas de dezenas de divs aninhadas para criar colunas, agora precisas apenas de um container e os seus itens diretos."
        </p>
      </section>
    </div>
  `
};
