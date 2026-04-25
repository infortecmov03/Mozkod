import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m14",
  title: "Fase 4: Architectures: BEM, Utility-first e Manutenibilidade",
  enableInteractive: true,
  quizId: "css-mq14",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏗️ Engenharia de Manutenibilidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Num projeto Master com dezenas de milhares de linhas de código, o maior desafio não é escrever CSS, mas garantir que o sistema não se torne uma "Big Ball of Mud". Escolher a arquitetura correta define a velocidade com que a equipa consegue evoluir o produto.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. BEM (Block, Element, Modifier)</h3>
        <p class="text-sm">Foca no encapsulamento lógico e na especificidade baixa. Garante que cada componente seja independente.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs text-accent">
          .card { } /* Block */<br/>
          .card__title { } /* Element */<br/>
          .card--highlighted { } /* Modifier */
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Utility-First (Tailwind Mindset)</h3>
        <p class="text-sm">Foca na composição de classes atómicas. Evita o "CSS Append-only" (onde nunca apagas CSS com medo de quebrar algo), pois o estilo vive colado ao HTML.</p>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 O Problema do Escopo
        </h4>
        <p class="text-sm leading-relaxed">
          Na arquitetura de elite, utilizamos <strong>CSS Modules</strong> ou <strong>CSS-in-JS</strong> para garantir que os nomes das classes sejam hasheados em build-time, eliminando 100% dos conflitos globais de nomes.
        </p>
      </section>
    </div>`
};