import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t13",
  title: "Barramento do Sistema: As Autoestradas de Dados",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🛣️ O Sistema de Transporte de Bits
        </h2>
        <p class="text-lg leading-relaxed">
          De nada serve ter um processador ultra-rápido se a informação não consegue chegar a ele a tempo. O <strong>Barramento do Sistema (System Bus)</strong> é o conjunto de linhas elétricas paralelas que transportam dados, endereços e sinais de controlo entre a CPU, a RAM e os dispositivos de I/O.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Trio Fundamental de Vias</h3>
        <p>A arquitetura de Von Neumann utiliza três barramentos especializados que trabalham em sintonia:</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-5 bg-card border rounded-2xl border-primary/20 shadow-xl">
            <h4 class="font-bold text-primary mb-3">Endereço (Address Bus)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Indica a localização física na RAM. É unidirecional (apenas a CPU envia). A sua largura determina quanta memória o sistema pode gerir (ex: 32 bits = 4GB).</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-accent/20 shadow-xl">
            <h4 class="font-bold text-accent mb-3">Dados (Data Bus)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Transporta a informação real (instruções, números, pixels). É bidirecional. Quanto mais largo, mais dados viajam por ciclo.</p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-green-500/20 shadow-xl">
            <h4 class="font-bold text-green-400 mb-3">Controlo (Control Bus)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Transporta ordens e sinais de estado (ex: "Agora é para ler!", "Memória pronta!", "Erro de hardware!"). Garante a sincronização.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Largura de Banda e Frequência</h3>
        <p class="text-sm">A capacidade de um barramento é medida pela sua <strong>Bandwidth</strong> (Largura de Banda). Ela depende de dois fatores:</p>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>Largura (Width):</strong> O número de linhas paralelas (ex: 64 bits transportam 8 bytes de uma vez).</li>
          <li><strong>Frequência (Clock):</strong> Quantas vezes por segundo o barramento consegue "pulsar" novos dados.</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🛑 O Gargalo de Von Neumann</h3>
          <p class="text-sm leading-relaxed">
            Como os dados e as instruções viajam pelo mesmo barramento, a velocidade de execução da CPU é muitas vezes limitada pela velocidade do barramento. É como ter um motor de Fórmula 1 (CPU) mas as estradas para o combustível (Barramento) estarem sempre engarrafadas.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20">
          <h4 class="font-bold text-green-500 mb-2">🚀 Curiosidade de Engenharia: Chipsets</h4>
          <p class="text-sm">Nas motherboards modernas, os barramentos são geridos por "pontes" (Northbridge e Southbridge). A Northbridge lida com o tráfego de alta velocidade (RAM/GPU) enquanto a Southbridge gere dispositivos mais lentos (USB/SATA).</p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t13-quiz"
};
