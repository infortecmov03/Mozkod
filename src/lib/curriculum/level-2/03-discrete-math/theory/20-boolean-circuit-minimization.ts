import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t20",
  title: "Minimização de Circuitos e Quine-McCluskey",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚡ Engenharia de Hardware Eficiente</h2>
        <p class="text-lg leading-relaxed">
          Reduzir a complexidade de uma expressão booleana resulta em circuitos físicos com menos transístores, gerando menos calor e consumindo menos bateria.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Métodos de Elite</h3>
        <ul class="space-y-4">
          <li><strong>Mapas de Karnaugh (K-Maps):</strong> Visual e intuitivo para até 4 ou 6 variáveis.</li>
          <li><strong>Algoritmo de Quine-McCluskey:</strong> O método tabular e algorítmico usado por computadores para simplificar funções com centenas de variáveis.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "math-q20"
};