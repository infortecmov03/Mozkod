import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-js",
  language: "javascript",
  title: "Lab JS: Engenharia de Texto e Output",
  description: "Construa mensagens dinâmicas e utilize o terminal profissional.",
  statement: "Utilize interpolação para criar uma mensagem de boas-vindas completa e exiba-a no console.",
  template: `// Missão: Codifica desde a linha 1
// 1. Declare uma variável 'user' com "MozDev"
// 2. Declare uma variável 'nivel' com 1
// 3. Crie a string 'mensagem' usando backticks ( \` )
//    Formato esperado: "Engenheiro MozDev, bem-vindo ao Nivel 1"
// 4. Imprima a mensagem no console
`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📝 Interpolação de Elite</h3>
      <p>Em JavaScript moderno, não usamos o sinal de mais (+) para montar frases complexas. Usamos <strong>Template Literals</strong>.</p>
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs"><strong>A Sintaxe:</strong></p>
        <p class="text-[10px] font-mono leading-relaxed text-green-400">
          const msg = \`Texto \${variável} mais texto\`;
        </p>
      </div>
      <p class="text-xs">O terminal em baixo irá capturar o teu <code>console.log()</code> e verificar se o texto gerado é exatamente o que a missão pede.</p>
    </div>
  `,
  objectives: [
    { 
      id: "obj1", 
      description: "Usar backticks ( ` ) para criar a mensagem", 
      test: "`" 
    },
    { 
      id: "obj2", 
      description: "Inserir as variáveis corretamente com ${}", 
      test: "${user}" 
    },
    { 
      id: "obj3", 
      description: "Exibir o resultado no terminal", 
      test: "console.log(mensagem)" 
    }
  ]
};
