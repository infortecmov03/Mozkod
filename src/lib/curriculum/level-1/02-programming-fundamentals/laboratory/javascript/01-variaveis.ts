import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-js",
  language: "javascript",
  title: "Lab JS: Variáveis",
  description: "Declare variáveis em JavaScript.",
  statement: "Crie uma variável 'nome' com valor 'Dev'.",
  template: "let nome = '';",
  detailedExplanation: "<p>Use <code>let</code> para declarar variáveis mutáveis.</p>",
  objectives: [{ id: "obj1", description: "Definir nome como Dev", test: "nome = \"Dev\"" }]
};
