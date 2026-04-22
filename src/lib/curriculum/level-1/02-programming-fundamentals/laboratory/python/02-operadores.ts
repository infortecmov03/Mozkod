import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-py",
  language: "python",
  title: "Lab Python: Operadores de Divisão",
  description: "Diferença entre divisão real e inteira.",
  statement: "Calcule a média de 15 e 10 usando o operador de divisão real.",
  template: `nota1 = 15
nota2 = 10
media = `,
  detailedExplanation: `<p>Em Python, <code>/</code> resulta sempre em float. Use parênteses para precedência.</p>`,
  objectives: [
    { id: "obj1", description: "Calcular média", test: "media = (nota1 + nota2) / 2" }
  ]
};
