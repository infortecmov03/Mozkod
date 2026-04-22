import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t16",
  title: "Pipelining: A Linha de Montagem da CPU",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏎️ Execução Paralela</h2>
        <p class="text-lg leading-relaxed">
          Imagine uma fábrica de automóveis. Não esperam que um carro fique pronto para começar o próximo. A CPU faz o mesmo através do <strong>Pipelining</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Os Estágios do Pipeline</h3>
        <p>Enquanto uma instrução está a ser <strong>Executada</strong>, a próxima já está a ser <strong>Descodificada</strong> e a seguinte está a ser <strong>Buscada</strong> na memória.</p>
        
        <div class="grid grid-cols-4 gap-2 text-center text-[10px] font-bold uppercase">
          <div class="p-2 bg-accent/20 rounded">Fetch</div>
          <div class="p-2 bg-accent/20 rounded">Decode</div>
          <div class="p-2 bg-accent/20 rounded">Execute</div>
          <div class="p-2 bg-accent/20 rounded">Writeback</div>
        </div>

        <h3 class="text-xl font-bold font-headline text-red-400">Pipeline Hazards (Perigos)</h3>
        <p class="text-sm">Às vezes o fluxo quebra. Se um <code>IF</code> decidir saltar para outro lugar, a CPU já começou a processar instruções erradas que estavam na fila. Isto chama-se <strong>Branch Misprediction</strong> e causa perda de ciclos.</p>
      </div>
    </div>
  `,
  quizId: "cs-t16-quiz"
};