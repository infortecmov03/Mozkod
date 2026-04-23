import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p3-js",
  language: "javascript",
  title: "Lab JS: Engenharia de Texto e Higienização",
  description: "Construa mensagens dinâmicas e limpe entradas de utilizador.",
  statement: "Utilize interpolação para criar uma mensagem de boas-vindas e aplique o método trim() para limpar a entrada do utilizador.",
  template: `// Missão: Codifica desde a linha 1
// 1. Declare uma variável 'entrada' com o valor "  MozDev  " (com espaços)
// 2. Crie a variável 'user' limpando a 'entrada' com o método trim()
// 3. Declare a variável 'nivel' com o valor 1
// 4. Crie a string 'mensagem' usando backticks ( \` )
//    Formato esperado: "Engenheiro MozDev, bem-vindo ao Nivel 1"
// 5. Imprima a mensagem no console
`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">📝 Higienização e Interpolação</h3>
      <p>Em sistemas reais, os utilizadores costumam deixar espaços acidentais ao digitar nomes. Usamos o <code>.trim()</code> para garantir que a base de dados receba apenas a informação limpa.</p>
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs"><strong>A Ferramenta do Dia:</strong></p>
        <p class="text-[10px] font-mono leading-relaxed text-green-400">
          const limpo = entrada.trim();<br/>
          const msg = \`Olá \${limpo}\`;
        </p>
      </div>
      <p class="text-xs">O terminal em baixo irá capturar o teu <code>console.log()</code> e verificar se o texto gerado está perfeitamente formatado e sem espaços extras no nome.</p>
    </div>
  `,
  objectives: [
    { 
      id: "obj_trim", 
      description: "Utilizar o método .trim() na variável entrada", 
      test: ".trim()" 
    },
    { 
      id: "obj_interp", 
      description: "Usar backticks ( ` ) e ${user} para criar a mensagem", 
      test: "`${" 
    },
    { 
      id: "obj_log", 
      description: "Exibir o resultado final no terminal", 
      test: "console.log(mensagem)" 
    }
  ]
};
