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
      <h3 class="text-xl font-bold text-primary">🧮 Operações em JS</h3>
      <p>Lembre-se da precedência: para calcular a média, você deve somar os números primeiro entre parênteses e depois dividir por 2.</p>
      <div class="bg-muted p-3 rounded-lg font-code text-xs">
        Ex: (a + b) / 2
      </div>
      <p>Para a variável 'aprovado', use o operador de comparação <code>>=</code>. O resultado será automaticamente um booleano (true/false).</p>
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
