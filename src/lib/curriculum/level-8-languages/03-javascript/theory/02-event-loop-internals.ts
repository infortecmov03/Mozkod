import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m2",
  title: "Event Loop Deep Dive: Microtasks vs Macrotasks",
  content: `
    <div class="space-y-6">
      <div class="bg-yellow-500/10 p-6 rounded-2xl border border-yellow-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          ⚙️ O Coração Assíncrono
        </h2>
        <p class="text-lg leading-relaxed">
          JavaScript é single-threaded, mas a web é multitarefa. O segredo está no <strong>Event Loop</strong>. Para um Engenheiro Master, não basta saber que existe; deves saber a ordem exata de prioridade.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-5 bg-card border rounded-2xl border-primary/20">
          <h4 class="font-bold text-primary mb-2">1. Microtasks (Alta Prioridade)</h4>
          <p class="text-sm italic">Promises, queueMicrotask, MutationObserver.</p>
          <p class="text-xs mt-2">O Event Loop processa TODA a fila de microtasks antes de passar para a próxima macrotask ou renderização.</p>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-accent/20">
          <h4 class="font-bold text-accent mb-2">2. Macrotasks (Baixa Prioridade)</h4>
          <p class="text-sm italic">setTimeout, setInterval, setImmediate, I/O.</p>
          <p class="text-xs mt-2">Processadas uma a uma. Após cada macrotask, o loop verifica se há novas microtasks ou necessidade de repaint.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq2"
};
