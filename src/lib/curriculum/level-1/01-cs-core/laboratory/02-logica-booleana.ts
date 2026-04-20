import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "cs-p2",
  language: "concept",
  title: "Laboratório: Portas Lógicas",
  description: "Pratique a lógica de decisão.",
  statement: "Se A = Verdadeiro e B = Falso, qual o resultado de (A AND B)? Escreva 'False' ou 'True'.",
  template: `// Resultado de (True AND False)
let resultado = "";`,
  detailedExplanation: `
    <h3>🧩 Desafio Lógico</h3>
    <p>O operador <strong>AND</strong> é rigoroso. Para que o resultado seja <em>True</em>, não pode haver nenhuma falha (False).</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Determinar o valor lógico correto",
      test: "resultado = \"False\""
    }
  ]
};