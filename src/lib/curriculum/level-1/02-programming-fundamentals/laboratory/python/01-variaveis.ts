
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-py",
  language: "python",
  title: "Lab Python: Tipagem Idiomática",
  description: "Construa o script de inicialização do zero.",
  statement: "Crie as variáveis de sistema e utilize a função print para exibir os dados no terminal.",
  template: `# Missão: Começa a escrever na linha 1
# 1. Cria a variável api_key com o valor "CWM123"
# 2. Cria a variável nome com o seu nome
# 3. Cria a variável tentativas com o valor 3
# 4. Usa o print para mostrar o nome
`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Scripting Real</h3>
      <p>Em Python, a simplicidade é a chave. Não precisas de palavras-chave para declarar, mas a indentação e o uso correto de strings são vitais.</p>
    </div>
  `,
  objectives: [
    { 
      id: "obj1", 
      description: "Definir api_key como 'CWM123'", 
      hint: "api_key = \"CWM123\"",
      test: "api_key = \"CWM123\"" 
    },
    { 
      id: "obj2", 
      description: "Definir variável nome", 
      test: "nome =" 
    },
    { 
      id: "obj3", 
      description: "Definir tentativas como 3", 
      test: "tentativas = 3" 
    },
    { 
      id: "obj4", 
      description: "Exibir o nome no terminal", 
      hint: "print(nome)",
      test: "print(nome)" 
    }
  ]
};
