import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m3",
  title: "Custom Properties e Dynamic Scoping",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-accent">
          🎨 Variáveis Vivas
        </h2>
        <p class="text-lg leading-relaxed">
          Diferente das variáveis de SASS ou LESS, as <strong>CSS Custom Properties</strong> são dinâmicas: elas podem ser alteradas em tempo de execução via JavaScript ou em diferentes escopos do DOM.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Escopo e Herança</h3>
        <p>Ao definir uma variável no <code>:root</code>, ela é global. Mas se a redefinir dentro de uma classe, apenas os filhos desse elemento verão o novo valor.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          :root { --color: red; }<br/>
          .dark-mode { --color: black; }<br/><br/>
          p { color: var(--color); } /* Muda conforme o pai */
        </div>
      </div>
    </div>
  `,
  quizId: "css-mq3"
};
