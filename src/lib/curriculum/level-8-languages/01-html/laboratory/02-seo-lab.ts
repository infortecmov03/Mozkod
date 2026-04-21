
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p2",
  language: "html",
  title: "Lab Master: Configurando Open Graph",
  description: "Otimize a partilha social da sua página.",
  statement: "Adicione a meta tag de imagem do Open Graph (og:image) apontando para 'logo.png'.",
  template: `<!-- Adicione os metadados abaixo -->
<head>
  <meta property="og:title" content="Codworks Moz" />
  
</head>`,
  detailedExplanation: `<h3>🖼️ Visual Social</h3><p>A tag <code>og:image</code> garante que, quando o teu link for partilhado, uma imagem atrativa apareça, aumentando o CTR (Click-Through Rate).</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Inserir meta tag og:image",
      test: "og:image"
    },
    {
      id: "obj2",
      description: "Apontar para logo.png",
      test: "logo.png"
    }
  ]
};
