import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t18",
  title: "Deteção e Correção de Erros (ECC)",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🛡️ Integridade no Meio do Ruído</h2>
        <p class="text-lg leading-relaxed">
          No mundo físico, bits podem mudar de valor por causa de interferência elétrica ou radiação cósmica. Engenharia de elite exige sistemas que detetam e corrigem estes erros automaticamente.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Métodos de Deteção</h3>
        <ul class="space-y-4">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>Paridade:</strong> Adiciona um bit extra para garantir que o número total de 1s seja sempre par ou ímpar. Deteta erros simples mas não corrige.
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>Checksum:</strong> Uma soma matemática de todos os dados. Se a soma no destino for diferente, o dado está corrompido.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-primary">Correção Master: Código de Hamming</h3>
        <p>Utilizado em memórias <strong>ECC (Error Correction Code)</strong>, este algoritmo adiciona bits de redundância de forma tão inteligente que a CPU consegue não só saber QUE houve um erro, mas ONDE ele ocorreu, invertendo o bit de volta para o valor correto instantaneamente.</p>
      </div>
    </div>
  `,
  quizId: "cs-t18-quiz"
};