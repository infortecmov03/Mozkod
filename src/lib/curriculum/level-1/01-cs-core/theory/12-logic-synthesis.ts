import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t12",
  title: "Síntese Lógica: Do Papel ao Silício",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚡ O Nascimento do Circuito</h2>
        <p class="text-lg leading-relaxed">
          A <strong>Síntese Lógica</strong> é o processo de converter uma especificação abstrata (como uma Tabela da Verdade ou uma equação booleana) num design de portas lógicas interligadas que podem ser fabricadas num chip.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Portas Universais: NAND e NOR</h3>
        <p>Na engenharia de hardware, as portas <strong>NAND</strong> e <strong>NOR</strong> são chamadas de "Universais" porque qualquer outra função lógica (AND, OR, NOT, XOR) pode ser construída utilizando apenas elas.</p>
        
        <div class="bg-indigo-500/5 p-5 rounded-xl border border-indigo-500/20">
          <h4 class="font-bold text-indigo-400 mb-2">Porquê usar apenas NAND?</h4>
          <p class="text-sm">É mais barato e fácil fabricar milhões de transístores iguais do que misturar diferentes tipos de portas. Além disso, as portas NAND são fisicamente mais rápidas que as AND em tecnologias como CMOS.</p>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Soma de Produtos (SOP)</h3>
        <p>Para sintetizar um circuito, olhamos para a Tabela da Verdade e identificamos todas as linhas onde o resultado é <strong>1</strong>. Cada linha torna-se um termo AND, e juntamos todos com portas OR.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-accent">3. O Objetivo Final: Minimização</h3>
        <p>Um circuito complexo com 100 portas lógicas pode muitas vezes ser simplificado para apenas 10 portas usando Álgebra Booleana ou <strong>Mapas de Karnaugh</strong>.</p>
        <ul class="grid md:grid-cols-3 gap-4 text-center text-[10px] font-bold uppercase">
          <li class="p-3 bg-card border rounded-xl border-white/5">Menos Calor</li>
          <li class="p-3 bg-card border rounded-xl border-white/5">Menos Espaço</li>
          <li class="p-3 bg-card border rounded-xl border-white/5">Mais Velocidade</li>
        </ul>
      </div>

      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
        <h4 class="font-bold text-green-500 mb-2">🚀 Visão de Elite</h4>
        <p class="text-sm leading-relaxed">
          Sistemas modernos como FPGAs e ASICs utilizam ferramentas de síntese automatizada (EDA), mas o engenheiro deve entender a lógica por trás para auditar o consumo de energia e os atrasos de propagação de sinal (Propagation Delay).
        </p>
      </div>
    </div>
  `,
  quizId: "cs-q12"
};
