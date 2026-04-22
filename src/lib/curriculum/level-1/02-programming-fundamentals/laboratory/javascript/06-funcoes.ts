import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p6-js",
  language: "javascript",
  title: "Lab JS: Arrow Functions e Retorno",
  description: "Crie funções modernas e concisas.",
  statement: "Crie uma arrow function chamada 'dobro' que receba 'n' e retorne o valor multiplicado por 2.",
  template: `// Defina a arrow function aqui
const dobro = ;`,
  detailedExplanation: `<p>Arrow functions usam a sintaxe <code>(param) => retorno</code>.</p>`,
  objectives: [
    { id: "obj1", description: "Implementar arrow function", test: "=> n * 2" }
  ]
};
