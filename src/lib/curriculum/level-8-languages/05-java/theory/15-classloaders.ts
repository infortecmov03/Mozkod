
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m15",
  title: "Hierarquia de ClassLoaders e Isolamento",
  content: `
    <div class="space-y-6">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20">
        <h2 class="text-2xl font-bold mb-4">⚙️ Pilar 3: Internals - O Motor de Carregamento</h2>
        <p class="text-lg">ClassLoaders são responsáveis por carregar dinamicamente as classes Java para a JVM.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Modelo de Delegação</h3>
        <p>Um ClassLoader primeiro pede ao seu "pai" para carregar a classe. Só se o pai falhar é que ele tenta carregar sozinho. Este modelo garante a segurança do sistema (ex: impede que alguém substitua java.lang.String).</p>
      </div>
    </div>
  `,
  quizId: "jv-mq15"
};
