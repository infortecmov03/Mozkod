
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-js",
  language: "javascript",
  title: "Lab JS: Alocação e Identidade",
  description: "Crie a fundação de dados do sistema do zero.",
  statement: "Declare as variáveis fundamentais para um perfil de utilizador e imprima-as no console.",
  template: `// Missão: Codifica desde a linha 1
// 1. Declare uma constante API_KEY com valor "CWM123"
// 2. Declare uma variável nome com o seu nome
// 3. Declare uma variável tentativas com valor 3
// 4. Imprima o nome no terminal
`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📦 Arquitetura de Dados</h3>
      <p>Em engenharia, a primeira tarefa é definir onde os dados vivem. Escreve o código completo no editor à esquerda.</p>
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs"><strong>Regras do Terminal:</strong></p>
        <p class="text-[10px] text-muted-foreground">O terminal irá ler as tuas instruções <code>console.log()</code> para validar a execução.</p>
      </div>
    </div>
  `,
  objectives: [
    { 
      id: "obj1", 
      description: "Declarar constante API_KEY com 'CWM123'", 
      hint: "const API_KEY = \"CWM123\";",
      test: "const API_KEY = \"CWM123\"" 
    },
    { 
      id: "obj2", 
      description: "Declarar variável nome", 
      hint: "let nome = \"...\";",
      test: "let nome =" 
    },
    { 
      id: "obj3", 
      description: "Declarar variável tentativas como 3", 
      hint: "let tentativas = 3;",
      test: "let tentativas = 3" 
    },
    { 
      id: "obj4", 
      description: "Imprimir o nome usando console.log", 
      hint: "console.log(nome);",
      test: "console.log(nome)" 
    }
  ]
};
