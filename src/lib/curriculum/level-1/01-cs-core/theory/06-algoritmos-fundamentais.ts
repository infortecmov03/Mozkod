import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t6",
  title: "Algoritmos Fundamentais: A Lógica do Passo-a-Passo",
  youtubeVideoId: "8hly31xKli0",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline text-primary">
          🧩 O Que é Realmente um Algoritmo?
        </h2>
        <p class="text-lg leading-relaxed">
          Muitos confundem algoritmos com código, mas o algoritmo é a <strong>estratégia pura</strong>. É uma sequência finita, ordenada e não ambígua de passos que levam à solução de um problema ou à execução de uma tarefa.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. As 5 Propriedades de Ouro</h3>
        <p>Para um conjunto de passos ser considerado um algoritmo de engenharia, ele deve cumprir:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Finitude</h4>
            <p class="text-xs text-muted-foreground">O algoritmo deve sempre terminar após um número finito de passos. Um loop infinito não é um algoritmo útil.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Definição (Precisão)</h4>
            <p class="text-xs text-muted-foreground">Cada passo deve ser claro e sem ambiguidades. "Adicione um pouco de sal" não serve; "Adicione 5g de sal" sim.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Entrada (Input)</h4>
            <p class="text-xs text-muted-foreground">Quantidades que lhe são dadas antes do início (podem ser zero ou mais).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Saída (Output)</h4>
            <p class="text-xs text-muted-foreground">O resultado final esperado. Um algoritmo sem saída é um motor que trabalha mas não produz nada.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Decomposição de Problemas</h3>
        <p>A maior habilidade de um engenheiro é a <strong>Decomposição</strong>: quebrar um grande desafio (ex: "Construir um Banco Digital") em milhares de pequenos algoritmos simples (ex: "Validar se o saldo é maior que o saque").</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">📝 Exemplo: Algoritmo de Troca de Lâmpada</h3>
          <div class="space-y-2 font-mono text-xs">
            <p>1. Início</p>
            <p>2. Pegar uma escada</p>
            <p>3. <span class="text-accent">SE</span> a lâmpada estiver quente <span class="text-accent">ENTÃO</span> esperar 2 minutos</p>
            <p>4. Desenroscar a lâmpada queimada</p>
            <p>5. Enroscar a lâmpada nova</p>
            <p>6. <span class="text-accent">SE</span> a lâmpada não acender <span class="text-accent">ENTÃO</span> voltar ao passo 4</p>
            <p>7. Fim</p>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Porquê aprender isto antes do Código?
          </h4>
          <p class="text-sm leading-relaxed">
            Linguagens de programação (Python, JS, C++) mudam a cada década. Mas a <strong>lógica algorítmica</strong> é eterna. Se souberes desenhar o algoritmo na tua mente ou no papel, traduzi-lo para qualquer linguagem torna-se uma tarefa trivial de sintaxe.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t6-quiz"
};
