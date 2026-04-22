import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t11",
  title: "ISA: O Contrato entre Hardware e Software",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">📜 Instruction Set Architecture</h2>
        <p class="text-lg">O ISA é a lista de comandos (instruções) que um processador entende. É a ponte que permite que um compilador transforme código Python em impulsos elétricos no hardware.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h3 class="text-lg font-bold font-headline text-accent mb-3">RISC (Reduced Set)</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">Instruções simples que levam apenas um ciclo de relógio. Foca na eficiência energética. <br/><strong>Ex: ARM (iPhone), Apple M1/M2/M3.</strong></p>
        </div>
        <div class="p-6 bg-card border rounded-2xl shadow-lg border-white/5">
          <h3 class="text-lg font-bold font-headline text-primary mb-3">CISC (Complex Set)</h3>
          <p class="text-xs text-muted-foreground leading-relaxed">Instruções complexas que fazem muito numa única linha. Foca em facilitar a vida do compilador. <br/><strong>Ex: Intel x86, AMD Ryzen.</strong></p>
        </div>
      </div>

      <p class="text-sm italic text-muted-foreground">Nota: Hoje em dia, até processadores x86 traduzem internamente instruções complexas em 'micro-operações' similares a RISC.</p>
    </div>
  `,
  quizId: "cs-t11-quiz"
};