
import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "cs-p1",
  language: "concept",
  title: "Laboratório: Conversão Binária",
  description: "Pratique a lógica de bits e bytes.",
  statement: "Converta o número decimal 5 para binário usando 4 bits.",
  template: `// Este é um exercício conceptual. 
// O resultado esperado é 0101`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📚 Guia de Conversão</h3>
      <p>Para converter 5 para binário:</p>
      <ol class="list-decimal ml-6 space-y-2">
        <li>Temos as posições: 8 | 4 | 2 | 1</li>
        <li>Cabe 8 em 5? Não (0)</li>
        <li>Cabe 4 em 5? Sim (1). Sobra 1.</li>
        <li>Cabe 2 em 1? Não (0).</li>
        <li>Cabe 1 em 1? Sim (1).</li>
      </ol>
      <p class="font-bold text-primary">Resultado: 0101</p>
    </div>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Representar o número 5 em binário",
      hint: "Use 4 dígitos (bits)",
      test: "0101"
    }
  ]
};
