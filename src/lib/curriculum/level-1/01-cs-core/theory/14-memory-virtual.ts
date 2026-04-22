import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "cs-t14",
  title: "Memória Virtual: A Ilusão do Espaço Infinito",
  youtubeVideoId: "2qu076_Y_9s",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🧠 O Conceito de Abstração de Memória
        </h2>
        <p class="text-lg leading-relaxed">
          A Memória Virtual é uma técnica de gestão que permite que o sistema utilize mais memória do que a RAM física instalada, usando uma parte do armazenamento secundário (SSD/HDD) como extensão. Mas a sua função mais vital é o <strong>Isolamento</strong>: garantir que um programa nunca consiga ler ou escrever na memória de outro programa.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. MMU: O Tradutor de Endereços</h3>
        <p>Os programas não lidam com endereços físicos reais da RAM. Eles usam <strong>Endereços Lógicos (Virtuais)</strong>. Quem faz a tradução mágica em tempo real (nanossegundos) é um hardware especializado chamado <strong>MMU (Memory Management Unit)</strong>.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-inner flex items-center justify-center gap-4 text-center">
          <div class="bg-blue-500/20 p-2 rounded">CPU (Endereço Lógico)</div>
          <div class="text-primary">→</div>
          <div class="bg-accent/20 p-2 rounded border border-accent/40 font-bold">MMU</div>
          <div class="text-primary">→</div>
          <div class="bg-green-500/20 p-2 rounded">RAM (Endereço Físico)</div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Paginação (Paging)</h3>
        <p>A memória virtual é dividida em blocos de tamanho fixo chamados <strong>Páginas</strong> (geralmente de 4KB). A RAM física é dividida em blocos equivalentes chamados <strong>Frames</strong>.</p>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>Page Table:</strong> É o mapa que o SO mantém para saber qual página virtual está em qual frame físico.</li>
          <li><strong>Swap:</strong> Quando a RAM está cheia, o SO move as páginas menos usadas para o disco para libertar espaço.</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🔄 O Ciclo do Page Fault</h3>
          <p class="text-sm mb-4">O que acontece quando a CPU pede um dado que foi movido para o disco?</p>
          <ol class="space-y-3 font-mono text-xs">
            <li><span class="text-accent font-bold">1. TRAP:</span> A MMU percebe que o bit de validade da página é 0 (não está na RAM).</li>
            <li><span class="text-accent font-bold">2. PAUSA:</span> O SO interrompe o programa e assume o controlo.</li>
            <li><span class="text-accent font-bold">3. FETCH:</span> O SO localiza a página no disco e lê para um frame livre na RAM.</li>
            <li><span class="text-accent font-bold">4. UPDATE:</span> A Page Table é atualizada.</li>
            <li><span class="text-accent font-bold">5. RESTART:</span> O programa continua como se nada tivesse acontecido.</li>
          </ol>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-red-400">3. Thrashing: O Colapso do Sistema</h3>
        <p class="text-sm leading-relaxed">
          Se tens demasiados programas abertos e a RAM for muito pequena, o sistema passa mais tempo a mover páginas do disco para a RAM do que a executar código real. O computador fica "congelado" com o LED do disco a piscar freneticamente. Isto chama-se <strong>Thrashing</strong>.
        </p>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão de Engenharia
          </h4>
          <p class="text-sm leading-relaxed">
            Entender a memória virtual é fundamental para otimizar bases de dados e servidores de alta performance. Saber que o custo de um <i>Page Fault</i> é milhares de vezes superior a um acesso à RAM é o que motiva o uso de <strong>Memory Locking</strong> em sistemas críticos.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t14-quiz"
};