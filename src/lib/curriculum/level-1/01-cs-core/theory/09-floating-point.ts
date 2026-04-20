
import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "cs-t9",
  title: "Aritmética de Ponto Flutuante (IEEE 754)",
  content: `
    <div class="space-y-6">
      <div class="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">⚠️ O Perigo da Precisão</h2>
        <p>Por que 0.1 + 0.2 não é exatamente 0.3 em binário? Entenda como o computador representa frações usando Mantissa e Expoente.</p>
      </div>
      <p>O padrão IEEE 754 é o que governa todos os cálculos decimais modernos. Pequenos erros de arredondamento podem causar desastres em sistemas financeiros ou aeroespaciais.</p>
    </div>
  `,
  quizId: "cs-q9"
};
