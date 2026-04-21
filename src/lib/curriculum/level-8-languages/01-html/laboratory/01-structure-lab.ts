
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p1",
  language: "html",
  title: "Laboratório Master: Estrutura Sem Bloqueio",
  description: "Crie a fundação de um documento otimizado.",
  statement: "Crie a estrutura básica de um documento HTML, definindo a língua como 'pt-MZ' e garantindo que o título seja 'Codworks Elite'.",
  isProjectPart: true, // Início do projeto master
  template: `<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
    <!-- O teu projeto começa aqui -->
  </body>
</html>`,
  detailedExplanation: `
    <h3>🚀 Estrutura de Elite</h3>
    <p>Um documento bem estruturado começa com a declaração correta da linguagem e metadados que permitem que o browser entenda o conteúdo antes mesmo de renderizar o CSS.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Definir lang como 'pt-MZ'",
      test: "lang=\"pt-MZ\""
    },
    {
      id: "obj2",
      description: "Definir o título como 'Codworks Elite'",
      test: "<title>Codworks Elite</title>"
    }
  ]
};
