import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p4-py",
  language: "python",
  title: "Lab Python: Estrutura Elif",
  description: "Múltiplas condições encadeadas.",
  statement: "Se a nota for >= 10, 'status' é 'OK'. Se for >= 14, 'status' é 'TOP'. Senão, 'status' é 'FAIL'.",
  template: `nota = 15
status = ""

# Implemente a lógica`,
  detailedExplanation: `<p>Em Python, usamos <code>elif</code> para condições intermédias. Respeite a indentação!</p>`,
  objectives: [
    { id: "obj1", description: "Usar elif", test: "elif" }
  ]
};
