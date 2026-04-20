import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t1",
  title: "Arrays: Estáticos vs Dinâmicos",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">📦 A Base das Estruturas</h2>
        <p class="text-lg leading-relaxed">
          O Array é a estrutura mais fundamental. No entanto, em nível de engenharia, precisamos entender como eles gerem a memória.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-primary">Arrays Estáticos (C++, Java)</h4>
          <p class="text-sm">Tamanho fixo na compilação. Extremamente rápidos, mas inflexíveis.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-accent">Arrays Dinâmicos (JS, Python)</h4>
          <p class="text-sm">Redimensionam-se automaticamente. Quando o espaço acaba, o computador cria um novo array com o dobro do tamanho.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "ds-q1"
};
