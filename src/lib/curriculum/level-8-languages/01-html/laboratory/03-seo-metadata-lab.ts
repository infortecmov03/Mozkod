
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p3",
  language: "html",
  title: "Projeto Master: Autoridade e SEO Técnico",
  description: "Configure os metadados vitais para os motores de busca.",
  statement: "Adicione a meta description e a tag canonical na seção <head>.",
  isProjectPart: true,
  youtubeVideoId: "v4cd1O4zkGw",
  template: ``,
  detailedExplanation: `
    <h3>🚀 Visibilidade Digital</h3>
    <p>Um site Master deve ser encontrável. Vamos dizer ao Google qual é a descrição do nosso projeto e qual a URL preferencial.</p>
  `,
  objectives: [
    { id: "desc", description: "Meta description configurada", test: "name=\"description\"" },
    { id: "canonical", description: "Link rel='canonical' configurado", test: "rel=\"canonical\"" }
  ]
};
