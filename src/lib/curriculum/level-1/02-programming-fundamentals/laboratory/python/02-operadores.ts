import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-py",
  language: "python",
  title: "Lab Python: Divisão Real e Resto",
  description: "Pratique a aritmética de precisão em Python.",
  statement: "Calcule a média de duas notas e verifique se um número é par usando o operador de módulo.",
  template: `nota1 = 18
nota2 = 13

# 1. Calcule a média real
media = 

# 2. Verifique se 'numero' é par (resto da divisão por 2 é zero)
numero = 42
eh_par = `,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Matemática Pythonic</h3>
      <p>Em Python, o operador <code>/</code> realiza sempre uma divisão real (float). Para verificar se um número é par, usamos o operador de módulo <code>%</code>.</p>
      <div class="bg-muted p-3 rounded-lg font-code text-xs">
        Se x % 2 == 0, então x é par.
      </div>
    </div>
  `,
  objectives: [
    {
      id: "py_media",
      description: "Calcular a média usando parênteses para prioridade.",
      test: "media = (nota1 + nota2) / 2"
    },
    {
      id: "py_par",
      description: "Usar o operador % para verificar paridade.",
      test: "eh_par = numero % 2 == 0"
    }
  ]
};
