import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m1",
  title: "CPython Internals: O GIL e o Gerenciamento de Threads",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
          ⚙️ Por dentro do Interpretador
        </h2>
        <p class="text-lg leading-relaxed">
          Para dominar o Python em nível de engenharia, é vital entender o <strong>Global Interpreter Lock (GIL)</strong>. Ele é o mecanismo que impede que múltiplas threads executem bytecode Python simultaneamente no CPython.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>1. Por que o GIL existe?</h3>
        <p>A gestão de memória do CPython não é <i>thread-safe</i> nativamente. O GIL protege a contagem de referências de objetos, evitando condições de corrida que poderiam corromper a memória.</p>
        
        <h3>2. Impacto em CPUs Multicore</h3>
        <p>Em tarefas <strong>CPU-bound</strong> (cálculos pesados), o GIL pode tornar o código multi-threaded mais lento do que o single-threaded devido ao overhead de troca de contexto. A solução master é o uso de <strong>multiprocessing</strong> ou extensões em C.</p>
      </div>
    </div>
  `,
  quizId: "py-mq1"
};