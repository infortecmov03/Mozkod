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
          As <strong>Cascade Layers (@layer)</strong> permitem-te definir a ordem de prioridade de blocos inteiros de código. Agora, podes garantir que o teu estilo personalizado sempre ganha de uma biblioteca externa, mesmo que o seletor da biblioteca seja mais forte. É a solução definitiva para gerir a especificidade em grandes sistemas de design.
        </p>
      </div>

      <!-- 1. ORDEM DE DEFINIÇÃO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Definindo a Precedência</h3>
        <p class="text-sm">A ordem em que declaras as camadas no topo do ficheiro define quem ganha. A última camada da lista tem a prioridade máxima.</p>
        
        <div class="space-y-4">
           <pre><code class="language-css">
/* 1. Declaração da hierarquia: 'components' ganha de 'base' */
@layer base, components;

@layer components {
  /* Camada de alta prioridade */
  .button {
    background: #3b82f6;
    color: white;
  }
}

@layer base {
  /* Mesmo que o seletor seja mais específico, ele perde pois está numa camada anterior */
  #main-nav .button {
    background: red;
  }
}
           </code></pre>
        </div>
      </section>

      <!-- 2. ESTILOS FORA DE CAMADAS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Unlayered Styles: O Vencedor Padrão</h3>
        <p class="text-sm leading-relaxed">
          Uma regra crucial do motor de renderização: estilos escritos fora de qualquer <code>@layer</code> são considerados mais importantes do que estilos dentro de camadas. Isto permite-te adicionar correções rápidas de emergência que sobrepõem todo o sistema de camadas.
        </p>
      </section>

      <!-- 3. ORGANIZAÇÃO ARQUITETURAL -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Estrutura Recomendada para Design Systems</h3>
        <p class="text-sm">Um Engenheiro Master organiza o seu CSS em 4 camadas fundamentais:</p>
        
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">reset:</p>
              <p class="text-xs text-muted-foreground">Normalização de browsers (ex: margens 0, box-sizing).</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">base:</p>
              <p class="text-xs text-muted-foreground">Tipografia global, variáveis de cores e cores de fundo.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">components:</p>
              <p class="text-xs text-muted-foreground">Onde vivem os botões, cards, inputs e widgets.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">utilities:</p>
              <p class="text-xs text-muted-foreground">Classes de ajudante (ex: .mt-10, .text-center).</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão da Manutenibilidade</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "@layer permite que tu 'domes' bibliotecas externas. Ao colocar o Bootstrap ou Tailwind dentro de uma @layer inicial, garantes que as tuas customizações nunca precisarão de !important para vencer a especificidade da biblioteca."
        </p>
      </section>
    </div>
  `,
};