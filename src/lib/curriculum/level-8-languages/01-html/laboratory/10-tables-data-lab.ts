
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p10",
  language: "html",
  title: "Projeto Master: Auditoria de Dados Tabulares",
  description: "Crie uma tabela de logs acessível.",
  statement: "Implemente uma tabela com thead, tbody e use o atributo 'scope' nas células de cabeçalho.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: ``,
  detailedExplanation: `
    <h3>📊 Dados Multidimensionais</h3>
    <p>O atributo <code>scope="col"</code> diz ao leitor de ecrã que o cabeçalho se aplica a toda a coluna. É a base da acessibilidade de dados.</p>
  `,
  objectives: [
    { id: "thead", description: "Utilizar a tag <thead>", test: "<thead>" },
    { id: "scope", description: "Usar scope='col' nos <th>", test: "scope=\"col\"" }
  ]
};
