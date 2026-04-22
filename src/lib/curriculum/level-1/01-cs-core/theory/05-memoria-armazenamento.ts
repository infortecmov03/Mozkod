import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t5",
  title: "Memória e Armazenamento: Curto vs Longo Prazo",
  youtubeVideoId: "TQvD-Uq86oY",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          🧠 A Hierarquia da Memória
        </h2>
        <p class="text-lg leading-relaxed">
          Nem toda a memória de um computador é igual. O hardware precisa de equilibrar três fatores: <strong>Velocidade</strong>, <strong>Capacidade</strong> e <strong>Custo</strong>. Por isso, usamos uma hierarquia que vai desde o interior da CPU até aos discos externos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Memória Primária (Volátil)</h3>
        <p>A memória volátil é ultra-rápida, mas tem um "defeito": ela precisa de eletricidade constante. Se desligares o computador, os dados desaparecem.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-5 rounded-xl border border-primary/20">
            <h4 class="font-bold text-primary mb-2">Registradores e Cache</h4>
            <p class="text-xs text-muted-foreground">Vivem dentro da CPU. São as memórias mais rápidas que existem. Guardam apenas o que o processador está a calcular naquele milissegundo.</p>
          </div>
          <div class="bg-card p-5 rounded-xl border border-accent/20">
            <h4 class="font-bold text-accent mb-2">RAM (Random Access Memory)</h4>
            <p class="text-xs text-muted-foreground">O "espaço de trabalho". Quando abres o Chrome ou um Jogo, eles são movidos do disco para a RAM para que a CPU possa aceder-lhes rapidamente.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Armazenamento Secundário (Não-Volátil)</h3>
        <p>Aqui guardamos a nossa vida digital para sempre. Estes dispositivos não perdem dados sem eletricidade.</p>
        
        <div class="space-y-4">
          <div class="p-4 bg-muted/30 rounded-xl border border-white/5">
            <h4 class="font-bold text-yellow-500 mb-1">SSD (Solid State Drive)</h4>
            <p class="text-sm">Usa chips de memória flash (eletrónica). Sem peças móveis, o que o torna centenas de vezes mais rápido que os discos antigos. Padrão atual para qualquer engenheiro.</p>
          </div>
          <div class="p-4 bg-muted/30 rounded-xl border border-white/5">
            <h4 class="font-bold text-muted-foreground mb-1">HDD (Hard Disk Drive)</h4>
            <p class="text-sm">Usa discos magnéticos que giram fisicamente. É lento e barulhento, mas muito barato para guardar terabytes de vídeos e fotos antigos.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">⚖️ O Grande Dilema: Latência</h3>
          <p class="text-sm leading-relaxed">
            Aceder a um dado no <strong>Registrador</strong> demora menos de 1 nanosegundo. Aceder à <strong>RAM</strong> demora cerca de 100 nanosegundos. Aceder ao <strong>SSD</strong> pode demorar milissegundos.
            <br/><br/>
            Para o processador, esperar pelo disco é como se tu estivesses a trabalhar e tivesses de ir a pé até à Beira buscar uma caneta para escrever uma nota. Por isso, a engenharia foca-se tanto em manter os dados críticos na RAM e na Cache.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Elite: Swap/Paging
          </h4>
          <p class="text-sm leading-relaxed">
            Quando a tua RAM enche, o Sistema Operativo usa um pedaço do SSD como se fosse RAM. Isso chama-se <strong>Swap</strong> ou <strong>Arquivo de Paginação</strong>. Como o SSD é muito mais lento que a RAM, é por isso que o computador começa a "travar" quando tens demasiadas abas abertas.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t5-quiz"
};
