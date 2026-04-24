import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m4",
  title: "Fase 1: Propriedades Lógicas e Layout Global",
  enableInteractive: true,
  quizId: "css-mq4",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌍 Layout Agnóstico a Direção
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Para criar interfaces internacionais, o Engenheiro Master substitui coordenadas físicas (left, right) por coordenadas lógicas (start, end). Isto garante que o layout se adapte automaticamente a línguas escritas da direita para a esquerda (RTL).
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Mapeamento Lógico</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-red-500/20">
            <h4 class="font-bold text-red-400 mb-2">❌ Físico (Antigo)</h4>
            <ul class="text-[10px] space-y-1 opacity-70">
              <li>width / height</li>
              <li>margin-left / margin-right</li>
              <li>padding-top / padding-bottom</li>
              <li>border-left</li>
            </ul>
          </div>
          <div class="p-4 bg-card border rounded-xl border-green-500/20">
            <h4 class="font-bold text-green-400 mb-2">✅ Lógico (Master)</h4>
            <ul class="text-[10px] space-y-1">
              <li>inline-size / block-size</li>
              <li>margin-inline-start / margin-inline-end</li>
              <li>padding-block-start / padding-block-end</li>
              <li>border-inline-start</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Exemplo: Adaptabilidade Automática</h3>
        <p class="text-sm">Veja como o <code>margin-inline-start</code> muda de lado ao alterarmos a direção do texto do pai.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;style&gt;
  .box {
    background: #3b82f6;
    color: white;
    padding: 10px;
    /* Margem no INÍCIO da linha (esquerda em PT, direita em Árabe) */
    margin-inline-start: 50px;
    width: 200px;
  }
&lt;/style&gt;

&lt;div dir="ltr"&gt;
  &lt;p&gt;Direção LTR (Padrão):&lt;/p&gt;
  &lt;div class="box"&gt;Margem à Esquerda&lt;/div&gt;
&lt;/div&gt;

&lt;hr&gt;

&lt;div dir="rtl"&gt;
  &lt;p&gt;Direção RTL (Árabe/Hebraico):&lt;/p&gt;
  &lt;div class="box"&gt;Margem à Direita Automática!&lt;/div&gt;
&lt;/div&gt;
           </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Visão Global</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Ao usar propriedades lógicas, você constrói uma interface que respeita a cultura do utilizador sem precisar de carregar ficheiros CSS de tradução separados."
        </p>
      </section>
    </div>
  `
};
