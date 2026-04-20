import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-js",
  language: "javascript",
  title: "Lab JS: Declaração de Variáveis",
  description: "Pratica a sintaxe let e const.",
  statement: "Cria uma variável constante chamada 'PI' com o valor 3.14.",
  template: "const PI = ;",
  detailedExplanation: `
    <h3>🚀 Variáveis em JS</h3>
    <p>Em JavaScript moderno, usamos <code>const</code> para valores que não mudam e <code>let</code> para valores que podem ser reatribuídos.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Definir PI como 3.14",
      hint: "const PI = 3.14;",
      test: "PI = 3.14"
    }
  ]
};
