
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t4",
  title: "Arquitetura de Computadores: O Cérebro da Máquina",
  youtubeVideoId: "Z5JC9Ve1sfI",
  quizId: "cs-t4-quiz",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          🏗️ O Modelo de Von Neumann
        </h2>
        <p class="text-lg leading-relaxed">
          Quase todos os computadores modernos baseiam-se na arquitetura proposta por <strong>John von Neumann</strong> em 1945. A grande inovação foi o conceito de <strong>Programa Armazenado</strong>: a ideia de que as instruções e os dados vivem no mesmo espaço de memória.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Unidade Central de Processamento (CPU)</h3>
        <p>A CPU é o "cérebro". Ela executa instruções matemáticas e lógicas a uma velocidade alucinante. Divide-se em três partes críticas:</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-card p-5 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors">
            <h4 class="font-bold text-primary mb-2">ALU (ULA)</h4>
            <p class="text-xs text-muted-foreground">Unidade Lógica e Aritmética. É a calculadora real. Faz somas e comparações lógicas (AND, OR).</p>
          </div>
          <div class="bg-card p-5 rounded-xl border border-accent/20 hover:border-accent/50 transition-colors">
            <h4 class="font-bold text-accent mb-2">UC (Unidade de Controlo)</h4>
            <p class="text-xs text-muted-foreground">O maestro da orquestra. Ela interpreta a instrução e diz aos outros componentes o que fazer.</p>
          </div>
          <div class="bg-card p-5 rounded-xl border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
            <h4 class="font-bold text-yellow-500 mb-2">Registradores</h4>
            <p class="text-xs text-muted-foreground">Memórias ultra-rápidas dentro da CPU que guardam os dados exatos processados AGORA.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🔄 O Ciclo de Instrução (Fetch-Decode-Execute)</h3>
          <p class="text-sm mb-4">Tudo o que o teu computador faz resume-se a este loop infinito:</p>
          <div class="space-y-2 font-mono text-[11px]">
            <p><span class="text-accent font-bold">1. FETCH:</span> A CPU busca a próxima instrução na RAM.</p>
            <p><span class="text-accent font-bold">2. DECODE:</span> A UC analisa a instrução para entender a ordem.</p>
            <p><span class="text-accent font-bold">3. EXECUTE:</span> A ALU realiza o cálculo necessário.</p>
          </div>
        </div>
      </div>
    </div>
  `
};
