import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-js",
  language: "javascript",
  title: "Lab JS: Template Literals",
  description: "Interpolação moderna de texto.",
  statement: "Crie a string 'O user Edson tem 25 anos' usando template literals com as variáveis fornecidas.",
  template: `let user = "Edson";
let idade = 25;
let mensagem = ;`,
  detailedExplanation: `<p>Use o acento grave (backtick) e a sintaxe <code>\${variavel}</code> para inserir valores dentro do texto.</p>`,
  objectives: [
    { id: "obj1", description: "Usar template literals", test: "`${user}" }
  ]
};
