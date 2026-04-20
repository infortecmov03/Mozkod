import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-cp",
  language: "cpp",
  title: "Lab C++: Tipagem Forte",
  description: "Declare variáveis em C++.",
  statement: "Crie uma variável string 'nome' com valor 'Dev'.",
  template: "string nome = \"\";",
  detailedExplanation: "<p>C++ é uma linguagem de tipagem forte e estática.</p>",
  objectives: [{ id: "obj1", description: "Definir nome como Dev", test: "string nome = \"Dev\"" }]
};
