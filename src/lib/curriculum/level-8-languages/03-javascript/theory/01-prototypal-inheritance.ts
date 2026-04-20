
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m1",
  title: "Prototypal Inheritance & Prototype Chain",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🧬 A Alma do JavaScript</h2>
        <p class="text-lg">Diferente de Java ou C++, o JS não usa herança baseada em classes reais (mesmo com a keyword class). Ele usa <strong>Protótipos</strong>.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>O que é o Prototype Chain?</h3>
        <p>Quando acedes a uma propriedade de um objeto, o motor JS procura no próprio objeto. Se não encontrar, sobe para o seu protótipo (__proto__), e assim sucessivamente até chegar ao <code>null</code>.</p>
        <div class="bg-card p-4 rounded-xl border font-code text-primary">
          obj -> MyClass.prototype -> Object.prototype -> null
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq1"
};
