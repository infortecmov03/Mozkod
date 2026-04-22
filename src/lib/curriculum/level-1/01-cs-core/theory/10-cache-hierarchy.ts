import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "cs-t10",
  title: "Hierarquia de Cache: A Velocidade do Silício",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏎️ Combatendo o Abismo de Latência</h2>
        <p class="text-lg leading-relaxed">
          Enquanto um processador moderno pode executar biliões de operações por segundo, a memória RAM demora "séculos" (em tempo de CPU) a entregar um dado. Sem a <strong>Memória Cache</strong>, o processador passaria 99% do tempo à espera.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os Níveis de Cache (L1, L2, L3)</h3>
        <p>A cache é organizada em níveis, equilibrando velocidade e capacidade. Quanto mais baixo o nível (L1), mais perto está do núcleo da CPU e mais rápida é.</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-5 bg-card border rounded-2xl border-accent/40 shadow-lg">
            <h4 class="font-bold text-accent mb-2">L1 Cache</h4>
            <p class="text-[10px] text-muted-foreground mb-3">LATÊNCIA: ~1ns (4 ciclos)</p>
            <p class="text-xs">Integrada no núcleo. Dividida em <b>L1i</b> (instruções) e <b>L1d</b> (dados). É a memória mais rápida do mundo após os registradores.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-accent/30 shadow-lg">
            <h4 class="font-bold text-accent mb-2">L2 Cache</h4>
            <p class="text-[10px] text-muted-foreground mb-3">LATÊNCIA: ~4ns (12 ciclos)</p>
            <p class="text-xs">Intermédia. Geralmente existe uma por núcleo. Maior que a L1, mas ligeiramente mais lenta devido à maior densidade.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-accent/20 shadow-lg">
            <h4 class="font-bold text-accent mb-2">L3 Cache</h4>
            <p class="text-[10px] text-muted-foreground mb-3">LATÊNCIA: ~10-40ns (40+ ciclos)</p>
            <p class="text-xs">Partilhada por todos os núcleos. É massiva (pode chegar a centenas de MB) e serve como último recurso antes da lenta RAM.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Por que a Cache Funciona? (Localidade)</h3>
        <p>O sucesso da cache baseia-se em dois princípios estatísticos do comportamento humano e de software:</p>
        <ul class="space-y-4">
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">⏳</div>
            <div>
              <p class="font-bold">Localidade Temporal:</p>
              <p class="text-sm text-muted-foreground">Se acedeste a um dado agora, é muito provável que precises dele novamente em breve (ex: uma variável dentro de um loop).</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">📍</div>
            <div>
              <p class="font-bold">Localidade Espacial:</p>
              <p class="text-sm text-muted-foreground">Se acedeste ao item A, é provável que precises do item B que está logo ao lado (ex: o próximo elemento de um array).</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">⚖️ Hit vs Miss</h3>
          <p class="text-sm mb-4">A eficiência de um engenheiro de sistemas mede-se pelo <strong>Cache Hit Rate</strong>:</p>
          <ul class="list-disc ml-6 space-y-2 text-xs">
            <li><strong class="text-green-400">Cache Hit:</strong> O dado está na cache. A CPU continua a correr à velocidade máxima.</li>
            <li><strong class="text-red-400">Cache Miss:</strong> O dado não está. A CPU tem de parar (stall) e esperar que a RAM o entregue. Este é o maior inimigo da performance moderna.</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica de Engenharia: Cache Lines
          </h4>
          <p class="text-sm leading-relaxed">
            A CPU nunca puxa apenas 1 byte da RAM. Ela puxa uma "Cache Line" inteira (geralmente 64 bytes). É por isso que arrays (dados contíguos) são muito mais rápidos que listas ligadas (dados espalhados na memória): eles aproveitam a Localidade Espacial da Cache.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t10-quiz"
};