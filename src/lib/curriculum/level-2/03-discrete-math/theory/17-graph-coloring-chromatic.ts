import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t17",
  title: "Coloração de Grafos e Conflitos de Recursos",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎨 Pintando o Mapa</h2>
        <p class="text-lg leading-relaxed">
          Colorir um grafo é atribuir cores aos vértices de forma a que dois vértices vizinhos nunca tenham a mesma cor. O objetivo é usar o número mínimo de cores (Número Cromático).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Aplicações Reais na Engenharia:</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong>Alocação de Registradores:</strong> Compiladores usam coloração de grafos para decidir quais variáveis podem partilhar o mesmo registrador da CPU.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong>Escalonamento (Scheduling):</strong> Atribuição de horários ou frequências de rádio sem que haja interferência entre vizinhos.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">O Teorema das 4 Cores</h4>
          <p class="text-sm leading-relaxed">Qualquer mapa plano pode ser colorido com apenas 4 cores sem que países vizinhos partilhem a mesma cor. Foi o primeiro grande teorema provado por um computador!</p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q17"
};