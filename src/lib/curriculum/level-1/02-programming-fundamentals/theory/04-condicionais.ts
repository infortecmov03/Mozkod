import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t4",
  title: "Estruturas Condicionais: Tomada de Decisão",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🚦 O Fluxo de Decisão</h2>
        <p class="text-lg leading-relaxed">
          As condicionais permitem que o teu programa escolha caminhos diferentes baseados em condições lógicas.
        </p>
      </div>

      <div class="prose prose-neutral dark:prose-invert max-w-none">
        <h3>A Estrutura IF / ELSE</h3>
        <p>Se a condição for verdadeira, o código dentro do <code>if</code> corre. Caso contrário, corre o <code>else</code>.</p>
        <div class="bg-muted p-4 rounded-xl font-code">
          if (saldo > preco) { <br/>
          &nbsp;&nbsp;comprar(); <br/>
          } else { <br/>
          &nbsp;&nbsp;poupar(); <br/>
          }
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t4-quiz"
};
