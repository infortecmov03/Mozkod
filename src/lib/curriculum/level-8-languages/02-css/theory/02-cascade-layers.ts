import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m2",
  title: "Cascade Layers (@layer): Resolvendo o Inferno da Especificidade",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
          🧱 Organização em Camadas
        </h2>
        <p class="text-lg leading-relaxed">
          As <strong>Cascade Layers</strong> são a maior mudança na cascata do CSS em décadas. Elas permitem que o engenheiro defina a ordem de prioridade de blocos inteiros de código, independentemente da especificidade dos seletores internos.
        </p>
      </div>

      <div class="grid gap-6">
        <div class="prose prose-invert max-w-none">
          <h3>Porquê usar @layer?</h3>
          <p>Imagine que usa um framework (como Bootstrap ou Tailwind) e quer sobrescrever um estilo dele. Normalmente, teria de usar <code>!important</code> ou seletores gigantes. Com camadas, basta colocar o framework numa camada inferior.</p>
          
          <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
            @layer framework, custom;<br/><br/>
            @layer custom {<br/>
            &nbsp;&nbsp;button { background: blue; } /* Ganha SEMPRE */<br/>
            }<br/><br/>
            @layer framework {<br/>
            &nbsp;&nbsp;#id-muito-forte button { background: red; } /* Perde */<br/>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  quizId: "css-mq2"
};
