import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "cs-p1",
  language: "concept",
  title: "Laboratório: Conversão Binária",
  description: "Pratique a lógica de bits e bytes.",
  statement: "Escreve apenas o resultado binário para o número decimal 5 usando 4 bits. (Ex: 0000)",
  template: `// Escreve apenas o número binário de 4 dígitos na linha abaixo
`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📚 Guia de Conversão</h3>
      <p>Este é um desafio conceptual. Não é necessário usar uma linguagem de programação, apenas introduzir a sequência lógica de bits.</p>
      <p>Para converter 5 para binário usando 4 posições:</p>
      <ol class="list-decimal ml-6 space-y-2">
        <li>Temos as posições: 8 | 4 | 2 | 1</li>
        <li>Cabe 8 em 5? Não (0)</li>
        <li>Cabe 4 em 5? Sim (1). Sobra 1.</li>
        <li>Cabe 2 em 1? Não (0).</li>
        <li>Cabe 1 em 1? Sim (1).</li>
      </ol>
      <p class="font-bold text-primary">Resultado esperado: 0101</p>
    </div>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Escrever o número 0101 no editor",
      hint: "O resultado para 5 em 4 bits é 0101",
      test: "0101"
    }
  ]
};
