
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m8",
  title: "Goroutines e o Modelo CSP",
  content: `
    <div class="space-y-6">
      <div class="bg-cyan-500/10 p-6 rounded-2xl border border-cyan-500/20">
        <h2 class="text-2xl font-bold mb-4">🚀 Não Comunique Partilhando Memória</h2>
        <p class="text-lg">Go implementa o modelo <strong>Communicating Sequential Processes (CSP)</strong>. Em vez de Mutexes e locks pesados, Go incentiva o uso de Canais para sincronização.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Goroutines vs Threads</h3>
        <ul>
          <li><strong>Stack Inicial:</strong> Apenas 2KB (Threads SO usam ~1-2MB).</li>
          <li><strong>Gestão:</strong> O runtime do Go faz o escalonamento, não o SO.</li>
          <li><strong>Custo de Context Switch:</strong> Extremamente baixo.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "go-mq8"
};
