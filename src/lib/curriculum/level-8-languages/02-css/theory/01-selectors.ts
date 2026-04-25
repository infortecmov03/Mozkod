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
          🎯 O Algoritmo da Seleção
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Dominar o CSS Master exige que pare de "tentar" seletores e passe a <strong>desenhar a especificidade</strong>. O browser não escolhe estilos aleatoriamente; ele segue um cálculo matemático rigoroso. Nesta lição, exploramos como manipular esse peso e como usar o seletor relacional <button>:has()</button> para criar lógicas que antes eram exclusivas do JavaScript.
        </p>
      </div>

      <!-- 1. CÁLCULO DE ESPECIFICIDADE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Sistema de Pontuação Industrial</h3>
        <p class="text-sm leading-relaxed">
          Sempre que há um conflito de estilos, o browser calcula a especificidade baseando-se em três categorias (A, B, C):
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
             <span class="block text-4xl font-black text-accent mb-2">100</span>
             <h4 class="font-bold text-xs uppercase tracking-widest text-primary mb-2">IDs (#id)</h4>
             <p class="text-[10px] opacity-60">Poder máximo. Difícil de sobrescrever.</p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
             <span class="block text-4xl font-black text-primary mb-2">10</span>
             <h4 class="font-bold text-xs uppercase tracking-widest text-primary mb-2">Classes, Atrib. e Pseudo</h4>
             <p class="text-[10px] opacity-60">O padrão de ouro: .class, [type="text"], :hover.</p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
             <span class="block text-4xl font-black text-muted-foreground mb-2">1</span>
             <h4 class="font-bold text-xs uppercase tracking-widest text-primary mb-2">Elementos (h1, p)</h4>
             <p class="text-[10px] opacity-60">A base fraca da hierarquia.</p>
          </div>
        </div>

        <div class="p-5 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
           <p class="text-sm font-bold text-indigo-400 mb-2">Exemplo de Cálculo:</p>
           <code class="text-xs">nav.menu ul li a:hover</code> 
           <span class="text-xs mx-2">→</span>
           <span class="text-xs font-bold text-green-400">Pontuação: 12 (1 Classe + 1 Pseudo-classe + 4 Elementos)</span>
        </div>
      </section>

      <!-- 2. O SELETOR :has() -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. :has() - O Seletor de Parentesco</h3>
        <p class="text-sm leading-relaxed">
          O <code>:has()</code> é a mudança mais radical no CSS em décadas. Ele permite selecionar um elemento <strong>baseado no que existe dentro dele</strong> ou no que vem depois dele. É o "Parent Selector" que a comunidade esperava há 20 anos.
        </p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Caso de Uso: Estilizando o Container</h4>
           <p class="text-xs text-muted-foreground">Mude o fundo do card apenas se ele contiver uma imagem de erro.</p>
           <pre><code class="language-css">
/* Seleciona o .card APENAS se houver um .error lá dentro */
.card:has(.error) {
  border-color: #ef4444;
  background-color: #fef2f2;
}

/* Seleciona o h1 APENAS se o próximo elemento for um parágrafo */
h1:has(+ p) {
  margin-bottom: 0;
}
           </code></pre>
        </div>
      </section>

      <!-- 3. :is() VS :where() -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. :is() vs. :where() - Agrupamento e Peso</h3>
        <p class="text-sm leading-relaxed">Ambos servem para agrupar seletores e reduzir a repetição de código, mas lidam com a <strong>Especificidade</strong> de formas opostas.</p>
        
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div>
              <p class="font-bold text-sm">:is(h1, .titulo, #header):</p>
              <p class="text-xs text-muted-foreground">Assume a especificidade do <strong>seletor mais forte</strong> dentro do grupo. No exemplo acima, todo o grupo teria o peso de um ID (100).</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <div>
              <p class="font-bold text-sm">:where(h1, .titulo, #header):</p>
              <p class="text-xs text-muted-foreground">Assume <strong>Especificidade ZERO</strong>. É ideal para resets ou frameworks onde queres permitir que o utilizador sobrescreva o estilo facilmente com qualquer classe simples.</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 O Mantra do Arquiteto CSS</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Escrever CSS Master é evitar a guerra de especificidade. Se você precisa usar <code>!important</code> para consertar um layout, você não entendeu a sua cascata. Use <code>:where()</code> para bases flexíveis e <code>:has()</code> para componentes inteligentes."
        </p>
      </section>
    </div>
  `,
};
