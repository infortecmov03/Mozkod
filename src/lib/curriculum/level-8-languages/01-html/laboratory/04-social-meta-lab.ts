
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p4",
  language: "html",
  title: "Projeto Master: Social Graph (Open Graph)",
  description: "Prepare o seu projeto para partilhas virais em redes sociais.",
  statement: "Configure as meta tags 'og:title' e 'og:image' no head do documento.",
  isProjectPart: true,
  youtubeVideoId: "v4cd1O4zkGw",
  template: ``,
  detailedExplanation: `
    <h3>📱 Social Media Ready</h3>
    <p>Utilizamos o protocolo <strong>Open Graph</strong> para que o link do seu site apareça com imagem e título rico no WhatsApp, Facebook e LinkedIn.</p>
  `,
  objectives: [
    { id: "og_title", description: "Configurar meta og:title", test: "property=\"og:title\"" },
    { id: "og_image", description: "Configurar meta og:image", test: "property=\"og:image\"" }
  ]
};
