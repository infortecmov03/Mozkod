import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m1",
  title: "Atributos do PHP 8 e Metadados Nativo",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🏷️ Metadados no Código</h2>
        <p class="text-lg">Atributos permitem adicionar metadados estruturados às declarações de classes, métodos e propriedades, substituindo as antigas DocBlock annotations.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Sintaxe e Uso</h3>
        <p>Utilizamos o prefixo <code>#[NomeDoAtributo]</code>. Ao contrário de comentários, os atributos são parte integrante do AST do PHP e podem ser lidos via Reflection.</p>
        <div class="bg-card p-4 rounded-xl border font-code text-primary">
          #[ExampleAttribute('val')]<br/>
          class MyClass {}
        </div>
      </div>
    </div>
  `,
  quizId: "php-mq1"
};