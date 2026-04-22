import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "cs-t14",
  title: "Memória Virtual: A Arquitetura da Abstração",
  youtubeVideoId: "2qu076_Y_9s",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🧠 A Ilusão do Espaço Infinito
        </h2>
        <p class="text-lg leading-relaxed">
          A Memória Virtual é uma das abstrações mais poderosas da computação. Ela permite que cada processo acredite ter acesso a um espaço de endereçamento contínuo e privado, isolando-o de falhas noutros programas e permitindo o uso de mais memória do que a RAM física instalada.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. MMU e a Tradução de Endereços</h3>
        <p>Os programas trabalham com <strong>Endereços Lógicos</strong>. A tradução para <strong>Endereços Físicos</strong> (na RAM real) é feita em nanossegundos pelo hardware <strong>MMU (Memory Management Unit)</strong>.</p>
        
        <div class="bg-black/40 p-6 rounded-xl border font-code text-sm shadow-inner space-y-4">
          <div class="flex items-center justify-between text-center">
            <div class="bg-blue-500/20 p-3 rounded border border-blue-500/30 w-32">Processo A<br/><span class="text-[10px]">End. Lógico</span></div>
            <div class="text-primary font-bold">→</div>
            <div class="bg-accent/20 p-3 rounded border border-accent/40 w-32 font-bold">PAGE TABLE<br/><span class="text-[10px]">O Mapa</span></div>
            <div class="text-primary font-bold">→</div>
            <div class="bg-green-500/20 p-3 rounded border border-green-500/30 w-32">RAM<br/><span class="text-[10px]">End. Físico</span></div>
          </div>
          <p class="text-xs text-muted-foreground italic text-center">O TLB (Translation Lookaside Buffer) é uma cache dentro da CPU que guarda as traduções mais recentes para evitar consultas lentas à RAM.</p>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Paginação e Swap</h3>
        <p>A memória é dividida em <strong>Páginas</strong> (lógicas) e <strong>Frames</strong> (físicos), geralmente de 4KB. Quando a RAM enche, o SO move as páginas menos usadas para o disco (Swap/Pagefile).</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Demand Paging</h4>
            <p class="text-xs opacity-80">As páginas só são carregadas na RAM quando o programa realmente tenta aceder a elas, poupando tempo de boot e memória.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-red-400 mb-2">Thrashing</h4>
            <p class="text-xs opacity-80">Ocorre quando o sistema tem tão pouca RAM que gasta mais tempo a trocar páginas com o disco do que a executar o código. O sistema "congela".</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🔄 O Ciclo do Page Fault</h3>
          <p class="text-sm mb-4">Quando a CPU pede um dado e a MMU percebe que a página está no disco (bit de validade = 0):</p>
          <ol class="space-y-3 font-mono text-xs">
            <li><span class="text-accent font-bold">1. INTERRUPÇÃO:</span> A CPU pausa o programa e chama o Kernel.</li>
            <li><span class="text-accent font-bold">2. BUSCA:</span> O SO localiza a página na área de Swap do disco.</li>
            <li><span class="text-accent font-bold">3. ALOCAÇÃO:</span> O SO escolhe um frame livre (ou expulsa uma página antiga via LRU).</li>
            <li><span class="text-accent font-bold">4. CARREGAMENTO:</span> O dado é lido do disco para a RAM física.</li>
            <li><span class="text-accent font-bold">5. RETOMA:</span> A Page Table é atualizada e o programa continua a instrução.</li>
          </ol>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão de Engenharia: Proteção de Memória
          </h4>
          <p class="text-sm leading-relaxed">
            A memória virtual não é só sobre espaço; é sobre <strong>Segurança</strong>. O SO utiliza bits de proteção em cada entrada da tabela de páginas (Read, Write, Execute). Tentar escrever em memória de "apenas leitura" ou executar dados (ataque de buffer overflow) dispara um <strong>Segmentation Fault</strong> imediato.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t14-quiz"
};