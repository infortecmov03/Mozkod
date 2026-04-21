import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "kt-m2",
  title: "Extension Functions e Property Delegation",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🧩 Estendendo classes sem herança</h2>
        <p class="text-lg leading-relaxed">
          As <strong>Extension Functions</strong> permitem adicionar funcionalidades a classes existentes (mesmo as de bibliotecas fechadas) sem usar o padrão Decorator ou Herança.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Property Delegation (by)</h3>
        <p>Kotlin permite delegar a lógica de leitura e escrita de uma propriedade a um objeto externo. Isto é a base do <code>by lazy</code> e do <code>by Delegates.observable()</code>.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          val database by lazy { initializeDB() } // Só executa quando for usado pela primeira vez
        </div>
      </div>
    </div>
  `,
  quizId: "kt-mq2"
};