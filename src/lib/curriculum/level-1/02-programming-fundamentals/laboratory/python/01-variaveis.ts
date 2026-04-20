import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-py",
  language: "python",
  title: "Lab Python: Variáveis",
  description: "Declare variáveis em Python.",
  statement: "Crie uma variável 'nome' com valor 'Dev'.",
  template: "nome = ''",
  detailedExplanation: "<p>Em Python, basta atribuir o valor diretamente.</p>",
  objectives: [{ id: "obj1", description: "Definir nome como Dev", test: "nome = \"Dev\"" }]
};
