import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p5-js",
  language: "javascript",
  title: "Lab JS: Acumulador com For",
  description: "Automatize a soma de uma sequência.",
  statement: "Some os números de 1 a 10 e guarde o resultado na variável 'total'.",
  template: `let total = 0;
for (let i = 1; i <= 10; i++) {
  // Acumule aqui
}`,
  detailedExplanation: `<p>Use o operador de atribuição composta <code>+=</code> para adicionar o valor de <b>i</b> ao total.</p>`,
  objectives: [
    { id: "obj1", description: "Acumular valor corretamente", test: "total += i" }
  ]
};
