import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-py",
  language: "python",
  title: "Lab Python: Operadores",
  description: "Cálculos básicos em Python.",
  statement: "Calcule a soma de 10 e 20 na variável 'soma'.",
  template: "soma = 0",
  detailedExplanation: "<p>Python usa operadores aritméticos padrão.</p>",
  objectives: [{ id: "obj1", description: "Soma deve ser 30", test: "soma = 10 + 20" }]
};
