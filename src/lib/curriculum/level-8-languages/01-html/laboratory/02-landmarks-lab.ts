
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p2",
  language: "html",
  title: "Projeto Master: Marcos Arquiteturais (Landmarks)",
  description: "Defina as regiões principais do seu documento para acessibilidade.",
  statement: "No body, adicione as tags semânticas para o cabeçalho, conteúdo principal e rodapé.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: ``,
  detailedExplanation: `
    <h3>🏗️ Anatomia do Corpo</h3>
    <p>O seu projeto precisa de <strong>Landmarks</strong> para que tecnologias assistivas naveguem corretamente. Vamos adicionar os marcos globais.</p>
  `,
  objectives: [
    { id: "header", description: "Adicionar a tag <header>", test: "<header>" },
    { id: "main", description: "Adicionar a tag <main> com role='main'", test: "role=\"main\"" },
    { id: "footer", description: "Adicionar a tag <footer>", test: "<footer>" }
  ]
};
