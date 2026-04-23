
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p2-js",
  language: "javascript",
  title: "Lab JS: Matemática e Lógica de Decisão",
  description: "Pratique o uso de operadores aritméticos e de comparação.",
  statement: "Calcule a média de 'n1' e 'n2', e verifique se o aluno está aprovado (média >= 10).",
  template: `let n1 = 15;
let n2 = 7;

// 1. Calcule a média entre n1 e n2
let media = ;

// 2. Verifique se a média é maior ou igual a 10
let aprovado = ;`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧮 Operações em JavaScript</h3>
      <p>O JavaScript utiliza tipagem dinâmica, o que significa que o resultado de <code>15 / 2</code> será automaticamente <code>7.5</code> (um float). No entanto, deves ter cuidado com a precedência de operadores.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-primary/20 space-y-2">
        <p class="text-xs font-bold">🚀 Exemplo de Aplicação (Fintech):</p>
        <p class="text-[10px] text-muted-foreground leading-relaxed">
          Numa aplicação bancária moçambicana, poderias calcular a taxa de transferência: <br/>
          <code>let taxa = valor * 0.02; // 2% de taxa</code>
        </p>
      </div>

      <p class="text-xs">
        <strong>Missão:</strong> Usa parênteses para garantir que a soma ocorre antes da divisão. Para a variável <b>aprovado</b>, usa o operador <code>>=</code> para obter um resultado booleano.
      </p>
    </div>
  `,
  objectives: [
    {
      id: "calc_media",
      description: "A variável 'media' deve conter o cálculo (n1 + n2) / 2.",
      test: "media = (n1 + n2) / 2"
    },
    {
      id: "check_aprovado",
      description: "A variável 'aprovado' deve verificar se media >= 10.",
      test: "aprovado = media >= 10"
    }
  ]
};
