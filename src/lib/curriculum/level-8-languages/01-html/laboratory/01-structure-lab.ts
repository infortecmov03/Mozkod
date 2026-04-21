
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p1",
  language: "html",
  title: "Laboratório Master: Construção Linha a Linha",
  description: "Construa a fundação de um projeto real começando do zero absoluto.",
  statement: "Siga as instruções para construir a estrutura base. O validador irá verificar cada linha do seu código.",
  isProjectPart: true,
  template: `<!-- Começa a digitar na linha 1 -->\n`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Manual de Construção</h3>
      <p>Um engenheiro não copia e cola. Um engenheiro entende a fundação. Vamos construir o esqueleto do seu <strong>Projeto Master</strong> passo a passo.</p>
      <div class="bg-primary/10 p-3 rounded-lg border border-primary/20 text-xs">
        <strong>Dica:</strong> Além das tags, vamos definir <strong>Classes</strong> e <strong>IDs</strong>. Eles são os "ganchos" que o teu código CSS e JavaScript usarão mais tarde para encontrar estes elementos no DOM.
      </div>
    </div>
  `,
  objectives: [
    {
      id: "line1",
      description: "Linha 1: Declare o tipo de documento.",
      hint: "<!DOCTYPE html>",
      test: "<!DOCTYPE html>"
    },
    {
      id: "line2",
      description: "Linha 2: Abra a tag html com lang='pt-MZ'.",
      hint: "<html lang=\"pt-MZ\">",
      test: "<html lang=\"pt-MZ\">"
    },
    {
      id: "line3",
      description: "Linha 3: Abra o head.",
      hint: "<head>",
      test: "<head>"
    },
    {
      id: "line4",
      description: "Linha 4: Defina o charset UTF-8.",
      hint: "<meta charset=\"UTF-8\">",
      test: "<meta charset=\"UTF-8\">"
    },
    {
      id: "line5",
      description: "Linha 5: Adicione a meta viewport.",
      hint: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      test: "name=\"viewport\""
    },
    {
      id: "line6",
      description: "Linha 6: Defina o título 'Codworks Elite'.",
      hint: "<title>Codworks Elite</title>",
      test: "<title>Codworks Elite</title>"
    },
    {
      id: "line7",
      description: "Linha 7: Feche o head.",
      hint: "</head>",
      test: "</head>"
    },
    {
      id: "line8",
      description: "Linha 8: Abra o body.",
      hint: "<body>",
      test: "<body>"
    },
    {
      id: "line9",
      description: "Linha 9: Crie um título h1 com o id 'app-header'.",
      hint: "<h1 id=\"app-header\">Master Project</h1>",
      test: "id=\"app-header\""
    },
    {
      id: "line10",
      description: "Linha 10: Crie uma div com a classe 'content-container'.",
      hint: "<div class=\"content-container\"></div>",
      test: "class=\"content-container\""
    },
    {
      id: "line11",
      description: "Linha 11: Feche o body.",
      hint: "</body>",
      test: "</body>"
    },
    {
      id: "line12",
      description: "Linha 12: Feche o html.",
      hint: "</html>",
      test: "</html>"
    }
  ]
};
