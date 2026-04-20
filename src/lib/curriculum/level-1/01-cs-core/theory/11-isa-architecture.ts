import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "cs-t11",
  title: "ISA: O Contrato Hardware-Software (RISC vs CISC)",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">📜 O Conjunto de Instruções</h2>
      <p>A Instruction Set Architecture (ISA) define as operações que a CPU consegue realizar diretamente.</p>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-primary/5 border rounded-xl">
          <h4 class="font-bold">RISC (Ex: ARM, Apple M1)</h4>
          <p class="text-xs">Instruções simples, alta eficiência energética.</p>
        </div>
        <div class="p-4 bg-accent/5 border rounded-xl">
          <h4 class="font-bold">CISC (Ex: Intel x86)</h4>
          <p class="text-xs">Instruções complexas que fazem muito numa única linha.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-q11"
};
