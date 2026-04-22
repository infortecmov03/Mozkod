import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t7",
  title: "Complexidade de Algoritmos: A Notação Big O",
  youtubeVideoId: "v4cd1O4zkGw",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📈 Escala e Eficiência</h2>
        <p class="text-lg leading-relaxed">
          Como engenheiros, não medimos a velocidade em segundos (que depende do computador), mas sim em <strong>passos de execução</strong> conforme os dados de entrada (N) crescem. A Notação Big O descreve o pior cenário possível.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">As Classes de Complexidade Comuns</h3>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-green-500/20">
            <h4 class="font-bold text-green-500">O(1) - Tempo Constante</h4>
            <p class="text-xs text-muted-foreground">Leva o mesmo tempo independentemente de haver 1 ou 1 milhão de itens. <br/>Ex: Aceder ao primeiro item de um array.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-blue-500/20">
            <h4 class="font-bold text-blue-500">O(n) - Tempo Linear</h4>
            <p class="text-xs text-muted-foreground">O esforço cresce na mesma proporção que os dados. <br/>Ex: Procurar um nome numa lista desordenada.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-yellow-500/20">
            <h4 class="font-bold text-yellow-500">O(log n) - Logarítmico</h4>
            <p class="text-xs text-muted-foreground">Divide o problema ao meio a cada passo. <br/>Ex: Busca Binária em lista ordenada.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-red-500/20">
            <h4 class="font-bold text-red-500">O(n²) - Tempo Quadrático</h4>
            <p class="text-xs text-muted-foreground">Crescimento perigoso. Geralmente causado por loops aninhados. <br/>Ex: Bubble Sort.</p>
          </div>
        </div>

        <div class="bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/20 mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Porquê o Big O é Vital?</h4>
          <p class="text-sm leading-relaxed">
            Um algoritmo O(n²) pode funcionar bem para 100 utilizadores, mas fará o seu servidor travar quando chegar aos 10.000. Escolher a complexidade certa é o que permite ao software escalar globalmente.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t7-quiz"
};