import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p1",
  language: "html",
  title: "Projeto Master: Injetando Interatividade",
  description: "Dê vida aos elementos que construiu no HTML e estilizou no CSS.",
  statement: "Adicione um bloco <script> no final do seu HTML e implemente a lógica de saudação dinâmica.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-yellow-500">⚡ O Cérebro do Projeto</h3>
      <p>Agora que tens a estrutura e o estilo, vamos usar o JavaScript para tornar o projeto vivo. O objetivo é capturar o clique do usuário e manipular o DOM de forma eficiente.</p>
    </div>
  `,
  objectives: [
    {
      id: "script_tag",
      description: "No final do <body>, adicione uma tag <script>.",
      hint: "<script></script>",
      test: "<script>"
    },
    {
      id: "event_listener",
      description: "Adicione um listener de clique a um botão do seu projeto.",
      hint: "document.querySelector('button').addEventListener('click', ...)",
      test: "addEventListener('click'"
    },
    {
      id: "dom_manipulation",
      description: "Mude o texto de um elemento quando o botão for clicado.",
      hint: "element.textContent = 'Olá!';",
      test: "textContent ="
    }
  ]
};
