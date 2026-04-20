import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-js",
  language: "javascript",
  title: "Lab JS: Operadores",
  description: "Cálculos básicos em JS.",
  statement: "Calcule a soma de 10 e 20 na variável 'soma'.",
  template: "let soma = 0;",
  detailedExplanation: "<p>Use o operador + para somar números.</p>",
  objectives: [{ id: "obj1", description: "Soma deve ser 30", test: "soma = 10 + 20" }]
};
