
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p4",
  language: "html",
  title: "Lab Master: Definindo um Template",
  description: "Crie a base de um componente reutilizável.",
  statement: "Crie um elemento <template> com o id 'user-card-template'.",
  template: `<!-- Defina o template aqui -->
`,
  detailedExplanation: `<h3>🏗️ O Elemento Template</h3><p>O <code>&lt;template&gt;</code> é um mecanismo para segurar conteúdo HTML que não é renderizado no load, mas pode ser instanciado via JS.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Usar tag template",
      test: "<template"
    },
    {
      id: "obj2",
      description: "Definir id user-card-template",
      test: "id=\"user-card-template\""
    }
  ]
};
