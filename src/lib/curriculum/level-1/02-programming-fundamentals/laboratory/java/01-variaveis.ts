import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-jv",
  language: "java",
  title: "Lab Java: Tipagem Estática",
  description: "Declare variáveis em Java.",
  statement: "Crie uma variável String 'nome' com valor 'Dev'.",
  template: "String nome = \"\";",
  detailedExplanation: "<p>Java exige que declares o tipo (ex: String) antes do nome.</p>",
  objectives: [{ id: "obj1", description: "Definir nome como Dev", test: "String nome = \"Dev\"" }]
};
