
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
      <p>Em Python 3, o operador <code>/</code> realiza sempre uma divisão real (float), mesmo entre inteiros. É a linguagem favorita para Ciência de Dados por causa desta precisão nativa.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold">📊 Exemplo de Aplicação (Data Science):</p>
        <p class="text-[10px] text-muted-foreground leading-relaxed">
          Poderias calcular o crescimento de uma empresa em Maputo: <br/>
          <code>crescimento = (receita_atual - receita_anterior) / receita_anterior</code>
        </p>
      </div>

      <p class="text-xs">
        <strong>Missão:</strong> Lembra-te que <code>%</code> (módulo) devolve o resto. Se o resto da divisão por 2 for 0, o número é par.
      </p>
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
