import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m14",
  title: "Metaclasses e Abstract Base Classes (ABCs)",
  content: `
    <div class="space-y-8">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-purple-400">🏗️ Construindo Frameworks</h2>
        <p class="text-lg">Metaclasses são o "molde das classes". Elas permitem intercetar a criação de uma classe para validar métodos ou injetar comportamentos automaticamente.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">ABCs e Contratos Rigorosos</h3>
        <p>Diferente de herança normal, as <strong>ABCs</strong> forçam subclasses a implementar métodos específicos. É o equivalente a Interfaces em Java ou C# no mundo Python.</p>
        
        <h3 class="text-xl font-bold font-headline text-primary">__new__ vs __init__</h3>
        <p>Entenda a diferença crucial: <code>__new__</code> cria a instância (perfeito para Singletons ou imutáveis), enquanto <code>__init__</code> apenas a inicializa.</p>
      </div>
    </div>
  `,
  quizId: "py-mq14"
};
