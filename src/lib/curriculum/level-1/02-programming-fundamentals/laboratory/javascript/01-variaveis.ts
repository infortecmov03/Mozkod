
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-js",
  language: "javascript",
  title: "Laboratório JS: Tuas Primeiras Variáveis",
  description: "Cria contentores de memória usando JavaScript.",
  statement: "Declara as variáveis 'nome', 'idade' e 'estudante' seguindo as instruções.",
  template: `// Escreve o teu código JavaScript abaixo
let nome = "";
let idade = 0;
let estudante = false;`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">💻 Guia de JavaScript</h3>
      <p>Em JavaScript moderno, usamos a palavra-chave <code class="text-primary">let</code> para criar uma variável que pode mudar de valor.</p>
      <div class="bg-black/30 p-3 rounded font-code text-xs">
        let cidade = "Maputo"; // String<br/>
        let populacao = 1100000; // Number
      </div>
      <p class="text-sm text-muted-foreground italic">Dica: Textos (Strings) devem estar sempre entre aspas!</p>
    </div>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Define 'nome' como 'João'",
      hint: "let nome = 'João';",
      test: "nome = \"João\""
    },
    {
      id: "obj2",
      description: "Define 'idade' como 25",
      hint: "let idade = 25;",
      test: "idade = 25"
    }
  ]
};
