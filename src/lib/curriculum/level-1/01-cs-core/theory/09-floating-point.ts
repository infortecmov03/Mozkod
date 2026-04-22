import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t9",
  title: "Aritmética de Ponto Flutuante (IEEE 754)",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">⚠️ Por que 0.1 + 0.2 != 0.3?</h2>
        <p class="text-lg leading-relaxed">
          Computadores têm memória finita. Algumas frações decimais simples tornam-se dízimas infinitas em binário, forçando o processador a fazer arredondamentos microscópicos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Padrão IEEE 754</h3>
        <p>A maioria das CPUs modernas segue esta norma para representar números reais. Um número de 64 bits (double) é dividido em 3 partes:</p>
        <ul class="list-disc ml-6 space-y-3 text-sm">
          <li><strong>Sinal (1 bit):</strong> Positivo ou Negativo.</li>
          <li><strong>Expoente (11 bits):</strong> Define a magnitude (onde está a vírgula).</li>
          <li><strong>Mantissa/Fracção (52 bits):</strong> Define a precisão do número real.</li>
        </ul>

        <div class="bg-yellow-500/5 p-5 rounded-xl border border-yellow-500/20">
          <h4 class="font-bold text-yellow-500 mb-2">🚀 Dica de Engenharia:</h4>
          <p class="text-sm">Nunca compare números decimais diretamente com <code>==</code> em software crítico (como bancos). Use sempre uma pequena margem de erro ou bibliotecas de 'Decimal' de precisão fixa.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t9-quiz"
};