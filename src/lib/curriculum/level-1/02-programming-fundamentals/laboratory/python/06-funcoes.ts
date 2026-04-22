import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p6-py",
  language: "python",
  title: "Lab Python: Def e Parâmetros",
  description: "Crie sub-rotinas reutilizáveis.",
  statement: "Crie a função 'dobro' que retorna o dobro de um número.",
  template: `def dobro(n):
    # Retorne o dobro
    pass`,
  detailedExplanation: `<p>Use a palavra-chave <code>return</code> para devolver o valor calculado.</p>`,
  objectives: [
    { id: "obj1", description: "Usar return", test: "return n * 2" }
  ]
};
