import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m2",
  title: "Metaprogramação: Decoradores e Metaclasses",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-accent">
          🎭 Código que Manipula Código
        </h2>
        <p class="text-lg leading-relaxed">
          Metaprogramação é a arte de criar abstrações que operam sobre outras partes do sistema em tempo de execução.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>1. Decoradores de Elite</h3>
        <p>Não são apenas 'wrappers'. Decoradores profissionais usam <code>functools.wraps</code> para preservar metadados e podem ser implementados como classes para gerir estado interno complexo.</p>
        
        <h3>2. Metaclasses (__metaclass__)</h3>
        <p>Se uma classe é um molde para objetos, uma metaclasse é o molde para a própria classe. Permitem validar a estrutura de classes de um framework ou injetar métodos automaticamente no momento da definição.</p>
      </div>
    </div>
  `,
  quizId: "py-mq2"
};