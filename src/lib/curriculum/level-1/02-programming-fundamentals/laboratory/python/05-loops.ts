import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p5-py",
  language: "python",
  title: "Lab Python: For in Range",
  description: "Iteração sobre sequências numéricas.",
  statement: "Soma os números de 1 a 10 (inclusive) no 'total'.",
  template: `total = 0
for i in range(1, 11):
    # Acumule
    pass`,
  detailedExplanation: `<p>O <code>range(inicio, fim)</code> não inclui o número final, por isso usamos 11 para chegar ao 10.</p>`,
  objectives: [
    { id: "obj1", description: "Usar loop for", test: "for i in range" },
    { id: "obj2", description: "Somar valores", test: "total += i" }
  ]
};
