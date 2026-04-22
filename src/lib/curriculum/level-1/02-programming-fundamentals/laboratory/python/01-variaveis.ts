import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-py",
  language: "python",
  title: "Lab Python: Tipagem Dinâmica",
  description: "Declare variáveis de forma idiomática em Python.",
  statement: "Crie as variáveis 'api_key' com o valor 'CWM123' e 'tentativas' com o valor 3.",
  template: `# Configuração inicial
api_key = ""
tentativas = 0`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 O Jeito Python</h3>
      <p>Em Python, não usamos palavras-chave para declarar variáveis. O nome deve seguir o padrão <strong>snake_case</strong>.</p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir api_key", test: "api_key = \"CWM123\"" },
    { id: "obj2", description: "Definir tentativas", test: "tentativas = 3" }
  ]
};
