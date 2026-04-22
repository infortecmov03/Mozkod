import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t11",
  title: "ISA: O Contrato entre Hardware e Software",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">📜 Instruction Set Architecture (ISA)</h2>
        <p class="text-lg leading-relaxed">
          O <strong>ISA</strong> é o manual de instruções do processador. É a ponte que permite ao compilador traduzir código de alto nível (como Java ou C++) para comandos binários que os circuitos da CPU conseguem executar fisicamente.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Vocabulário da Máquina</h3>
        <p>O ISA define o que o processador pode fazer, incluindo:</p>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>Conjunto de Instruções:</strong> Operações aritméticas, lógicas e de controlo.</li>
          <li><strong>Tipos de Dados:</strong> Inteiros (8, 32, 64 bits), ponto flutuante, etc.</li>
          <li><strong>Registradores:</strong> Quantos existem e como podem ser usados.</li>
          <li><strong>Modos de Endereçamento:</strong> Como a CPU localiza dados na memória RAM.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. Anatomia de uma Instrução</h3>
        <p>Cada comando binário é dividido em partes específicas que a Unidade de Controlo decifra:</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-inner flex gap-4 text-center">
          <div class="flex-1 bg-primary/20 p-2 rounded">
            <span class="block font-black text-primary">OPCODE</span>
            <span class="text-[10px] opacity-60">O que fazer (ex: Somar)</span>
          </div>
          <div class="flex-[2] bg-accent/20 p-2 rounded">
            <span class="block font-black text-accent">OPERANDOS</span>
            <span class="text-[10px] opacity-60">Com quem fazer (ex: Registo A e B)</span>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. O Grande Debate: RISC vs CISC</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
            <h4 class="font-bold text-accent mb-3 flex items-center gap-2">📱 RISC (Reduced Set)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">
              Instruções simples e fixas que executam num único ciclo de relógio. Foca na eficiência energética e velocidade constante.
              <br/><br/>
              <strong>Exemplos:</strong> Arquiteturas ARM (M1/M2/M3 da Apple, smartphones Android, Raspberry Pi).
            </p>
          </div>
          <div class="p-6 bg-card border rounded-2xl shadow-lg border-white/5">
            <h4 class="font-bold text-primary mb-3 flex items-center gap-2">💻 CISC (Complex Set)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">
              Instruções complexas que podem realizar várias operações (ex: ler da memória e somar num só comando). Facilita a escrita de compiladores, mas exige hardware mais denso.
              <br/><br/>
              <strong>Exemplos:</strong> Intel x86, AMD Ryzen (PCs e Servidores clássicos).
            </p>
          </div>
        </div>

        <div class="bg-yellow-500/5 p-5 rounded-xl border border-yellow-500/20 mt-6">
          <h4 class="font-bold text-yellow-500 mb-2">🚀 Sabias que?</h4>
          <p class="text-sm">Os processadores modernos (como o teu Intel i7) são híbridos. Eles aceitam instruções <strong>CISC</strong> (x86) por fora, mas internamente transformam-nas em pequenas <strong>Micro-operações</strong> (similares a RISC) para ganhar performance via Pipelining.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t11-quiz"
};
