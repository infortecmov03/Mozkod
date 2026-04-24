import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p3",
  language: "html",
  title: "Projeto Master: SEO Técnico e Autoridade",
  description: "Prepare o seu projeto para ser uma autoridade nos motores de busca.",
  statement: "Adicione os metadados de visibilidade na seção <head>.",
  isProjectPart: true,
  youtubeVideoId: "v4cd1O4zkGw",
  template: ``, // Herda do html-p2
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Visibilidade</h3>
      <p class="text-sm">Vamos agora trabalhar o seu <code>&lt;head&gt;</code> para atrair o Google:</p>
      
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Abaixo da meta viewport, adicione a <code>&lt;meta name="description" content="..."&gt;</code> com um texto chamativo.</p>
        <p><strong>Ação 2:</strong> Abaixo da description, adicione a tag <code>&lt;meta name="author" content="Seu Nome"&gt;</code>.</p>
        <p><strong>Ação 3:</strong> Adicione o link canonical: <code>&lt;link rel="canonical" href="https://codworks.mz"&gt;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "meta_desc", description: "Meta description configurada", test: "name=\"description\"" },
    { id: "meta_author", description: "Meta author configurada", test: "name=\"author\"" },
    { id: "canonical", description: "Link rel='canonical' presente", test: "rel=\"canonical\"" }
  ]
};