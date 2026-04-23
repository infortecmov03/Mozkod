import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-py",
  language: "python",
  title: "Lab Python: F-Strings e Higienização de Dados",
  description: "Manipulação de strings idiomática e limpeza de buffers.",
  statement: "Utilize f-strings para formatar dados e o método strip() para limpar espaços em branco.",
  template: `# Missão: Codifica desde a linha 1
# 1. Cria a variável entrada com "  MozDev  "
# 2. Cria a variável user limpando a 'entrada' com o método strip()
# 3. Cria a variável nivel com o número 1
# 4. Cria a variável mensagem usando f-strings
#    Formato: "Engenheiro MozDev, bem-vindo ao Nivel 1"
# 5. Usa o print para mostrar a mensagem
`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 Limpeza de Dados em Python</h3>
      <p>O equivalente ao <code>trim()</code> do JavaScript em Python chama-se <code>.strip()</code>. Ele remove todos os espaços invisíveis (tabs, espaços, quebras de linha) das extremidades do texto.</p>
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs"><strong>Dica Técnica:</strong></p>
        <p class="text-[10px] font-mono leading-relaxed text-green-400">
          user = entrada.strip()<br/>
          mensagem = f"Olá {user}"
        </p>
      </div>
    </div>
  `,
  objectives: [
    { 
      id: "obj_strip", 
      description: "Utilizar o método .strip() para limpar o nome", 
      test: ".strip()" 
    },
    { 
      id: "obj_fstring", 
      description: "Utilizar a sintaxe f\"...\" para interpolação", 
      test: "f\"" 
    },
    { 
      id: "obj_print", 
      description: "Exibir o resultado com print()", 
      test: "print(mensagem)" 
    }
  ]
};
