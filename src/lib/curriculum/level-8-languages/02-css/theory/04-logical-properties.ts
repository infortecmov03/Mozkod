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
          🌍 Design Agnóstico a Direção
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Como Engenheiro Master, deves projetar para o mundo. O <strong>CSS Logical Properties</strong> substitui as coordenadas físicas (left, right, top, bottom) por coordenadas lógicas (start, end, block, inline). Isto garante que o seu layout se adapte automaticamente a qualquer modo de escrita (LTR, RTL ou Vertical) sem reescrever o CSS.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Mapeamento de Eixos</h3>
        <p class="text-sm">Em vez de pensares no ecrã, pensa no fluxo do texto:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-muted/20 border border-white/5 rounded-xl">
             <h4 class="font-bold text-primary text-xs mb-2">Eixo Inline (Horizontal)</h4>
             <p class="text-[10px] opacity-70">A direção em que o texto corre (esquerda-direita no PT). <br>Físico: <code>left/right</code> -> Lógico: <code>inline-start/inline-end</code>.</p>
          </div>
          <div class="p-4 bg-muted/20 border border-white/5 rounded-xl">
             <h4 class="font-bold text-primary text-xs mb-2">Eixo Block (Vertical)</h4>
             <p class="text-[10px] opacity-70">A direção das quebras de parágrafo. <br>Físico: <code>top/bottom</code> -> Lógico: <code>block-start/block-end</code>.</p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Dimensionamento e Margens Lógicas</h3>
        <p class="text-sm leading-relaxed">Observe como as propriedades lógicas removem a ambiguidade visual:</p>

        <div class="space-y-4">
           <pre><code class="language-css">
.card {
  /* Largura e Altura lógicas */
  inline-size: 300px;
  block-size: auto;

  /* Margem apenas à esquerda em PT, mas à direita em Árabe */
  margin-inline-start: 2rem;

  /* Padding superior e inferior */
  padding-block: 1.5rem;

  /* Borda na cor certa independente da direção */
  border-inline-start: 5px solid var(--primary);
}
           </code></pre>
        </div>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Porquê é o Padrão de Elite?
        </h4>
        <p class="text-sm leading-relaxed">
          Ao usar propriedades lógicas, eliminas a necessidade de hacks como <code>[dir="rtl"] .margin-left { margin-left: 0; margin-right: 20px; }</code>. O browser faz todo o cálculo geométrico por ti, reduzindo o tamanho do seu bundle de CSS em até 30% em sites multi-idioma.
        </p>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto Global</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Pense em 'start' e 'end', nunca em 'esquerda' e 'direita'. O software de elite é inclusivo e respeita a diversidade cultural do utilizador através da arquitetura de estilos inteligente."
        </p>
      </section>
    </div>
  `,
};