import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-js",
  language: "javascript",
  title: "Lab JS: Alocação e Constantes",
  description: "Pratique a gestão de memória usando let e const.",
  statement: "Crie uma constante 'API_KEY' com o valor 'CWM123' e uma variável 'tentativas' com o valor 3.",
  template: `// Configuração inicial do sistema
const API_KEY = "";
let tentativas = 0;`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📦 Variáveis vs Constantes</h3>
      <p>Em engenharia, usamos <strong>const</strong> para valores que nunca devem mudar (segurança de memória) e <strong>let</strong> para contadores ou estados mutáveis.</p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir API_KEY como 'CWM123'", test: "API_KEY = \"CWM123\"" },
    { id: "obj2", description: "Definir tentativas como 3", test: "tentativas = 3" }
  ]
};
