import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m18",
  title: "Fase 4: Pseudo-elementos de Sombra: ::slotted & ::part",
  enableInteractive: true,
  quizId: "css-mq18",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌑 Estilizando além da Fronteira
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Quando utilizamos <strong>Shadow DOM</strong> para criar Web Components, o estilo global do site não penetra no componente. Estes pseudo-elementos são os "portais" que permitem a customização segura e controlada de componentes encapsulados.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. ::part() - O Exportador de Estilo</h3>
        <p class="text-sm">Permite que um autor de componente exponha elementos específicos para estilização externa. É a forma Master de permitir que utilizadores mudem a cor de um botão dentro do seu componente sem quebrar o encapsulamento.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          /* No CSS Global */<br/>
          cwm-profile<span class="text-primary">::part</span>(action-button) { <br>
          &nbsp;&nbsp;background: #3b82f6; <br>
          }
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. ::slotted() - Estilizando o Injetado</h3>
        <p class="text-sm">Estiliza o conteúdo que foi passado via <code>&lt;slot&gt;</code> pelo utilizador do componente. Atenção: ele só pode selecionar elementos de primeiro nível que foram "teletransportados" para o slot.</p>
        <pre><code class="language-css">
/* Dentro do Shadow DOM */
::slotted(h2) {
  color: var(--primary-color);
  text-transform: uppercase;
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão da Componibilidade</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Ao utilizar ::part, você cria um contrato de design: você decide o que pode ser estilizado e o que deve permanecer privado, garantindo a integridade visual do seu Design System."
        </p>
      </section>
    </div>`
};