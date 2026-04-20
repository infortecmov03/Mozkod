import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-js",
  language: "javascript",
  title: "Lab JS: Strings e I/O",
  description: "Manipulação de texto e saída de dados.",
  statement: "Concatene 'Olá ' com a variável 'user' na variável 'mensagem'.",
  template: "let user = 'Dev';\nlet mensagem = '';",
  detailedExplanation: "<p>Use o operador + ou Template Literals para juntar textos.</p>",
  objectives: [
    { id: "obj1", description: "Criar saudação", test: "mensagem =" }
  ]
};