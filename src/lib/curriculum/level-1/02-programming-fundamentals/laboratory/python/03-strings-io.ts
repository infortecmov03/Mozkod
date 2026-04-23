import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-py",
  language: "python",
  title: "Lab Python: F-Strings e Terminal Output",
  description: "Manipulação de strings idiomática em Python 3.",
  statement: "Utilize f-strings para formatar a saída de dados do sistema no terminal.",
  template: `# Missão: Codifica desde a linha 1
# 1. Cria a variável user com "MozDev"
# 2. Cria a variável nivel com o número 1
# 3. Cria a variável mensagem usando f-strings
#    Formato: "Engenheiro MozDev, bem-vindo ao Nivel 1"
# 4. Usa o print para mostrar a mensagem
`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🐍 F-Strings: O Padrão Pythonic</h3>
      <p>Python 3.6+ introduziu a forma mais rápida e legível de manipular texto. Basta colocar um <strong>f</strong> antes das aspas.</p>
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs"><strong>A Sintaxe:</strong></p>
        <p class="text-[10px] font-mono leading-relaxed text-green-400">
          mensagem = f"Texto {variável} aqui"
        </p>
      </div>
    </div>
  `,
  objectives: [
    { 
      id: "obj1", 
      description: "Utilizar a letra f antes das aspas", 
      test: "f\"" 
    },
    { 
      id: "obj2", 
      description: "Colocar variáveis dentro de chavetas { }", 
      test: "{user}" 
    },
    { 
      id: "obj3", 
      description: "Exibir o resultado com print()", 
      test: "print(mensagem)" 
    }
  ]
};
