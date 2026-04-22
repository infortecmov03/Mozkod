import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p4-js",
  language: "javascript",
  title: "Lab JS: Validação de Acesso",
  description: "Lógica de decisão com operadores lógicos.",
  statement: "Permita o acesso (acesso = true) apenas se a 'idade' for maior que 18 E o 'ticket' for verdadeiro.",
  template: `let idade = 20;
let ticket = true;
let acesso = false;

// Escreva o IF aqui`,
  detailedExplanation: `<p>Utilize o operador <code>&&</code> para a conjunção lógica.</p>`,
  objectives: [
    { id: "obj1", description: "Validar idade e ticket", test: "if (idade > 18 && ticket)" }
  ]
};
