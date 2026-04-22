import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-py",
  language: "python",
  title: "Lab Python: F-Strings",
  description: "Formatação de strings de alta performance.",
  statement: "Crie a mensagem usando f-strings: 'O user Edson tem 25 anos'.",
  template: `user = "Edson"
idade = 25
mensagem = f""`,
  detailedExplanation: `<p>Adicione a letra <strong>f</strong> antes das aspas e use chavetas <code>{variavel}</code> para interpolar.</p>`,
  objectives: [
    { id: "obj1", description: "Usar f-string", test: "f\"O user {user}" }
  ]
};
