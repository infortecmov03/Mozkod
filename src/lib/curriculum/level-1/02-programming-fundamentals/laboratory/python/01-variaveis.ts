
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p1-py",
  language: "python",
  title: "Laboratório Python: Simplicidade Pura",
  description: "Cria variáveis de forma rápida com Python.",
  statement: "Em Python não precisas de palavras-chave como 'let'. Basta o nome e o valor.",
  template: `# Escreve o teu código Python abaixo
nome = ""
idade = 0`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-blue-400">🐍 Guia de Python</h3>
      <p>Python é conhecido por ser "direto ao ponto". Não precisas declarar o tipo nem usar palavras especiais.</p>
      <div class="bg-black/30 p-3 rounded font-code text-xs">
        pais = "Moçambique"<br/>
        ano = 1975
      </div>
      <p class="text-sm text-muted-foreground italic">Nota: Python é sensível a espaços (identação), mas para variáveis simples basta escrever na linha!</p>
    </div>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Define 'nome' como 'João'",
      test: "nome = \"João\""
    },
    {
      id: "obj2",
      description: "Define 'idade' como 25",
      test: "idade = 25"
    }
  ]
};
