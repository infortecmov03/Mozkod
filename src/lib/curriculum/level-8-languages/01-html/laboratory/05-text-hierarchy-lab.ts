
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p5",
  language: "html",
  title: "Projeto Master: Hierarquia de Conteúdo",
  description: "Organize a informação seguindo a árvore de importância.",
  statement: "Dentro do <main>, crie um título h1 e pelo menos uma seção h2.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: ``,
  detailedExplanation: `
    <h3>📚 Estrutura de Leitura</h3>
    <p>Títulos não são para tamanho de letra, são para <strong>importância</strong>. Vamos garantir um outline de página perfeito.</p>
  `,
  objectives: [
    { id: "h1", description: "Ter exatamente um <h1> no projeto", test: "<h1>" },
    { id: "h2", description: "Ter pelo menos um <h2> para seções", test: "<h2>" }
  ]
};
