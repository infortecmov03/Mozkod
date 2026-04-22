import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t4",
  title: "Arquitetura de Computadores: O Cérebro da Máquina",
  youtubeVideoId: "Z5JC9Ve1sfI",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          🏗️ O Modelo de Von Neumann
        </h2>
        <p class="text-lg leading-relaxed">
          Quase todos os computadores modernos, desde o teu smartphone até supercomputadores, baseiam-se na arquitetura proposta por <strong>John von Neumann</strong> em 1945. A grande inovação foi o conceito de <strong>Programa Armazenado</strong>: a ideia de que as instruções e os dados vivem no mesmo espaço de memória.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Unidade Central de Processamento (CPU)</h3>
        <p>A CPU é o "cérebro". Ela não toma decisões criativas; ela apenas executa instruções matemáticas e lógicas a uma velocidade alucinante. Divide-se em três partes críticas:</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-card p-5 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors">
            <h4 class="font-bold text-primary mb-2">ALU (ULA)</h4>
            <p class="text-xs text-muted-foreground">Unidade Lógica e Aritmética. É a calculadora real. Faz somas, subtrações e comparações lógicas (AND, OR, NOT).</p>
          </div>
          <div class="bg-card p-5 rounded-xl border border-accent/20 hover:border-accent/50 transition-colors">
            <h4 class="font-bold text-accent mb-2">UC (Unidade de Controlo)</h4>
            <p class="text-xs text-muted-foreground">O maestro da orquestra. Ela interpreta a instrução e diz aos outros componentes o que fazer e quando.</p>
          </div>
          <div class="bg-card p-5 rounded-xl border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
            <h4 class="font-bold text-yellow-500 mb-2">Registradores</h4>
            <p class="text-xs text-muted-foreground">Pequenas memórias ultra-rápidas dentro da CPU que guardam os dados exatos que estão a ser processados AGORA.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. O Coração: O Clock (Relógio)</h3>
        <p>O <strong>Clock</strong> dita o ritmo de trabalho do processador. Cada "pulso" de energia permite à CPU avançar um passo. Quando dizemos que um processador tem 3.5GHz, significa que ele "pulsa" 3.5 mil milhões de vezes por segundo.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. O Sistema de Barramentos (Bus)</h3>
        <p>Como é que os dados viajam entre a CPU e a RAM? Através de "autoestradas" elétricas chamadas barramentos:</p>
        <ul class="list-disc ml-6 space-y-3 text-sm">
          <li><strong>Barramento de Dados:</strong> Leva a informação real (os números, as letras).</li>
          <li><strong>Barramento de Endereço:</strong> Indica ONDE na memória a informação deve ser guardada ou lida.</li>
          <li><strong>Barramento de Controlo:</strong> Envia sinais de sincronização (ex: "Agora é para ler!", "Agora é para escrever!").</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🔄 O Ciclo de Instrução (Fetch-Decode-Execute)</h3>
          <p class="mb-4">Tudo o que o teu computador faz resume-se a este loop infinito:</p>
          <div class="space-y-4 font-mono text-xs">
            <div class="flex gap-4 items-center">
              <span class="w-24 text-accent font-bold">1. FETCH</span>
              <span class="flex-1">A CPU busca a próxima instrução na RAM e coloca-a num registrador.</span>
            </div>
            <div class="flex gap-4 items-center border-t border-white/5 pt-2">
              <span class="w-24 text-accent font-bold">2. DECODE</span>
              <span class="flex-1">A Unidade de Controlo analisa a instrução para entender o que deve ser feito.</span>
            </div>
            <div class="flex gap-4 items-center border-t border-white/5 pt-2">
              <span class="w-24 text-accent font-bold">3. EXECUTE</span>
              <span class="flex-1">A ALU realiza o cálculo ou a operação lógica necessária.</span>
            </div>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Impacto na Engenharia de Software
          </h4>
          <p class="text-sm leading-relaxed">
            Entender a arquitetura de computadores permite-te escrever código mais eficiente. Saber que o acesso à RAM é milhares de vezes mais lento que o acesso aos Registradores da CPU é o que te fará escolher as estruturas de dados certas no futuro para evitar o "Gargalo de Von Neumann".
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t4-quiz"
};