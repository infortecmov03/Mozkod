import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-py",
  language: "python",
  title: "Lab Python: Strings e I/O",
  description: "Input e Output de texto.",
  statement: "Formate uma string f-string para exibir o nome do utilizador.",
  template: "user = 'Dev'\nmensagem = f''",
  detailedExplanation: "<p>F-strings são a forma mais eficiente de formatar texto em Python moderno.</p>",
  objectives: [
    { id: "obj1", description: "Usar f-string", test: "f\"" }
  ]
};