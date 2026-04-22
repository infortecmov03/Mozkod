import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "cs-p2",
  language: "concept",
  title: "Laboratório: Portas Lógicas",
  description: "Pratique a lógica de decisão.",
  statement: "Se A = Verdadeiro e B = Falso, qual o resultado de (A AND B)? Escreva 'False' ou 'True' no editor.",
  template: `// O resultado é "True" ou "False"?
let resultado = "";`,
  detailedExplanation: `
    <h3>🧩 Desafio Lógico</h3>
    <p>Este exercício valida o teu entendimento sobre portas lógicas. O operador <strong>AND</strong> é rigoroso. Para que o resultado seja <em>True</em>, todas as entradas devem ser True.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Definir resultado como \"False\"",
      test: "resultado = \"False\""
    }
  ]
};
