import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "cs-p2",
  language: "concept",
  title: "Laboratório: Portas Lógicas",
  description: "Pratique a lógica de decisão e operadores booleanos.",
  statement: "Resolva a expressão lógica: (Verdadeiro AND Falso). Escreva apenas 'True' ou 'False' no editor.",
  template: `// RESULTADO DA EXPRESSÃO:
// (V AND F) = 
`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧩 Tabela da Verdade</h3>
      <p>O operador <strong>AND</strong> (E) é um guarda rigoroso. Ele só permite um resultado "True" se <strong>TODAS</strong> as condições forem verdadeiras.</p>
      <div class="grid grid-cols-2 gap-2 text-[10px] font-mono">
        <div class="bg-background p-2 rounded border">V AND V = True</div>
        <div class="bg-background p-2 rounded border">V AND F = False</div>
        <div class="bg-background p-2 rounded border">F AND V = False</div>
        <div class="bg-background p-2 rounded border">F AND F = False</div>
      </div>
      <p class="text-xs italic">Imagine: "Só vou à praia se tiver Sol E se tiver Dinheiro". Se um deles falhar, eu não vou (False).</p>
    </div>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Determinar o valor lógico correto da expressão",
      hint: "Como uma das entradas é Falsa, o resultado do AND será False",
      test: "False"
    }
  ]
};
