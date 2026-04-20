import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m3",
  title: "Programação Assíncrona com AsyncIO",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">⚡ Concorrência de Alta Performance</h2>
        <p>Diferente de Threads, o <strong>asyncio</strong> utiliza um Event Loop para gerir milhares de tarefas I/O bound num único processo, contornando as limitações do GIL.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Palavras-Chave Críticas</h3>
        <ul>
          <li><strong>async def:</strong> Define uma corrotina.</li>
          <li><strong>await:</strong> Pausa a execução até que a tarefa termine, libertando o loop para outras tarefas.</li>
          <li><strong>gather:</strong> Executa múltiplas corrotinas em paralelo.</li>
        </ul>
        <p class="mt-4 bg-muted p-4 rounded-xl">
          Ideal para: Clientes/Servidores Web, Scrapers e sistemas que dependem de rede ou disco.
        </p>
      </div>
    </div>
  `,
  quizId: "py-mq3"
};
