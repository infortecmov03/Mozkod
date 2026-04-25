import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m2",
  title: "Fase 1: Cascade Layers (@layer) e a Nova Ordem",
  enableInteractive: true,
  youtubeVideoId: "u044iM9xsTM",
  quizId: "css-mq2",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧱 Domando a Fera da Especificidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          As <strong>Cascade Layers (@layer)</strong> representam a maior mudança no algoritmo da cascata em 20 anos. Elas permitem que o Engenheiro Master organize o CSS em níveis de importância, garantindo que estilos de componentes específicos nunca sejam sobrescritos por estilos de base, independentemente da força do seletor.
        </p>
      </div>

      <!-- 1. ORDEM DE DEFINIÇÃO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Contrato de Precedência</h3>
        <p class="text-sm leading-relaxed">
          A prioridade das camadas é definida pela <strong>ordem em que aparecem no ficheiro</strong> pela primeira vez. A última camada declarada é a mais forte. No nível Master, declaramos a hierarquia no topo do ficheiro principal.
        </p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Declaração da Hierarquia</h4>
           <pre><code class="language-css">
/* 1. Definimos a ordem: 'utilities' ganha de 'components', que ganha de 'base' */
@layer reset, base, components, utilities;

@layer base {
  a { color: #3b82f6; text-decoration: none; }
}

@layer components {
  /* Este seletor é mais fraco que o do 'base', mas ganha por estar numa camada posterior */
  .card a { color: #ffffff; text-decoration: underline; }
}
           </code></pre>
        </div>
      </section>

      <!-- 2. UNLAYERED STYLES -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Estilos Fora de Camadas (Unlayered)</h3>
        <p class="text-sm leading-relaxed">
          Esta é a regra mais contra-intuitiva e importante: <strong>Estilos escritos fora de qualquer @layer sempre ganham de estilos dentro de camadas.</strong>
        </p>
        <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 shadow-inner">
          <h4 class="font-bold text-red-400 mb-2">Porquê?</h4>
          <p class="text-xs leading-relaxed opacity-80">
            Isto foi desenhado para garantir retrocompatibilidade. Se adicionares uma layer a um projeto antigo, o código antigo (sem layer) continuará a mandar no sistema. Na engenharia Master, usamos estilos unlayered apenas para <strong>Hotfixes</strong> ou overrides de emergência.
          </p>
        </div>
      </section>

      <!-- 3. INTEGRAÇÃO COM TERCEIROS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Domando Bibliotecas Externas</h3>
        <p class="text-sm leading-relaxed">
          O maior uso industrial do @layer é "embrulhar" frameworks como Bootstrap ou Tailwind. Isto permite que as tuas classes simples ganhem de seletores complexos da biblioteca sem usar <code>!important</code>.
        </p>
        
        <pre><code class="language-css">
/* Importamos a biblioteca para uma camada de baixa prioridade */
@import url('bootstrap.css') layer(framework);

@layer framework, custom;

@layer custom {
  /* Ganhamos do Bootstrap mesmo com um seletor simples */
  .btn { border-radius: 20px; }
}
        </code></pre>
      </section>

      <!-- 4. ANINHAMENTO DE CAMADAS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Namespacing e Sub-layers</h3>
        <p class="text-sm">Camadas podem ser aninhadas para criar arquiteturas complexas e evitar colisões entre diferentes partes do Design System.</p>
        
        <pre><code class="language-css">
@layer components {
  @layer buttons { .primary { ... } }
  @layer cards { .main { ... } }
}

/* Acedendo via ponto: */
@layer components.buttons {
  .secondary { ... }
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão da Manutenibilidade</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Arquitetura CSS é sobre controle de entropia. As @layer permitem que você crie um sistema onde o desenvolvedor sabe exatamente por que uma regra está a ser aplicada, eliminando as adivinhações e os conflitos que surgem em projetos de longa duração."
        </p>
      </section>
    </div>
  `
};