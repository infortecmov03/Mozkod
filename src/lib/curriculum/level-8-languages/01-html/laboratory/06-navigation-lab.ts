
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p6",
  language: "html",
  title: "Projeto Master: Fluxo de Navegação",
  description: "Construa o menu de navegação semântico.",
  statement: "No <header>, adicione um <nav> contendo uma lista não-ordenada de links.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: ``,
  detailedExplanation: `
    <h3>🧭 Guiando o Utilizador</h3>
    <p>A navegação deve ser acessível. O leitor de ecrã deve identificar o bloco <code>&lt;nav&gt;</code> como o local de saltos da página.</p>
  `,
  objectives: [
    { id: "nav", description: "Encapsular links em <nav>", test: "<nav>" },
    { id: "ul", description: "Usar uma lista <ul> para os itens", test: "<ul>" },
    { id: "links", description: "Adicionar pelo menos 2 links <a>", test: "<a href=" }
  ]
};
