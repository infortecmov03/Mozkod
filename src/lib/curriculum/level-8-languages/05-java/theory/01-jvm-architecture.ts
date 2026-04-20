import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m1",
  title: "Arquitetura da JVM e JIT Compilation",
  content: `
    <div class="space-y-6">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20">
        <h2 class="text-2xl font-bold mb-4">⚙️ O Coração do Java</h2>
        <p>A JVM (Java Virtual Machine) é o que permite o lema "Write Once, Run Anywhere". Ela não apenas executa bytecode, mas otimiza-o em tempo real.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>O Compilador JIT (Just-In-Time)</h3>
        <p>Diferente de linguagens puramente interpretadas, a JVM identifica "hot spots" (partes do código executadas frequentemente) e compila-as diretamente para código de máquina nativo.</p>
      </div>
    </div>
  `,
  quizId: "jv-mq1"
};