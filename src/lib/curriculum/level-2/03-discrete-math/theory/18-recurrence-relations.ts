import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t18",
  title: "Relações de Recorrência e o Teorema Mestre",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📈 Calculando o Custo da Recursão</h2>
        <p class="text-lg leading-relaxed">
          Relações de recorrência são equações que definem uma sequência em termos de valores anteriores. Na computação, usamos isto para calcular a complexidade Big O de algoritmos recursivos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Teorema Mestre (Master Theorem)</h3>
        <p class="text-sm">Fornece uma "receita de bolo" para resolver recorrências do tipo <strong>T(n) = aT(n/b) + f(n)</strong>, comuns em algoritmos de Dividir para Conquistar (Merge Sort, Quick Sort).</p>
        
        <div class="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs text-accent">
          T(n) = aT(n/b) + Θ(n^d)<br/>
          Se d > log_b(a) -> O(n^d)<br/>
          Se d = log_b(a) -> O(n^d log n)<br/>
          Se d < log_b(a) -> O(n^{log_b(a)})
        </div>
      </div>
    </div>
  `,
  quizId: "math-q18"
};