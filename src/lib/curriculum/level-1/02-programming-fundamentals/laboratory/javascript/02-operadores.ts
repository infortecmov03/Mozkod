import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-js",
  language: "javascript",
  title: "Lab JS: Aritmética e Atribuição",
  description: "Cálculos matemáticos e operadores compostos.",
  statement: "Calcule a média de 'nota1' (15) e 'nota2' (10) e guarde em 'media'.",
  template: `let nota1 = 15;
let nota2 = 10;
let media = ;`,
  detailedExplanation: `<p>Use parênteses para garantir que a soma ocorre antes da divisão: <code>(a + b) / 2</code>.</p>`,
  objectives: [
    { id: "obj1", description: "Calcular média correta (12.5)", test: "media = (nota1 + nota2) / 2" }
  ]
};
