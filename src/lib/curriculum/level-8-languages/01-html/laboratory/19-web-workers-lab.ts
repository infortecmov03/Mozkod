import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p19",
  language: "html",
  title: "Projeto Master: Implementação de Worker Paralelo",
  description: "Crie a ponte de comunicação entre a interface e o processamento de background.",
  statement: "No seu script master, instancie um Worker, envie uma mensagem de início e implemente o tratamento de erros.",
  isProjectPart: true,
  template: `<!-- No seu script master -->
<script>
  // 1. Instancie o worker apontando para 'engine-worker.js'
  // 2. Envie o comando "BOOT_SEQUENCE"
  // 3. Implemente o listener de erro
</script>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚙️ Orquestração de Threads</h3>
      <p>Nesta missão, vais configurar a infraestrutura de paralelismo do seu projeto. O objetivo é criar o canal de comunicação para que tarefas pesadas futuras não travem o scroll do seu site.</p>
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold text-yellow-500">Checklist Técnico:</p>
        <ul class="text-[10px] space-y-1 list-disc ml-4">
          <li><strong>Instanciar:</strong> Use <code>new Worker('...')</code>.</li>
          <li><strong>Comunicar:</strong> Use <code>postMessage()</code> para enviar dados.</li>
          <li><strong>Vigiar:</strong> O evento <code>onerror</code> deve estar ativo para capturar falhas no thread paralelo.</li>
        </ul>
      </div>
    </div>
  `,
  objectives: [
    {
      id: "worker_new",
      description: "Criar uma nova instância da classe Worker.",
      hint: "new Worker('engine-worker.js')",
      test: "new Worker("
    },
    {
      id: "worker_msg",
      description: "Enviar a mensagem de boot para o worker.",
      hint: "worker.postMessage('BOOT_SEQUENCE')",
      test: "postMessage"
    },
    {
      id: "worker_error",
      description: "Implementar o handler de erro (.onerror).",
      test: "onerror ="
    }
  ]
};
