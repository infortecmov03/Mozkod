import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p4",
  language: "html",
  title: "Projeto Master: Social Graph (Open Graph)",
  description: "Configure a identidade visual do seu projeto para partilhas sociais.",
  statement: "Adicione as tags de Open Graph e Twitter Cards no <head>.",
  isProjectPart: true,
  youtubeVideoId: "v4cd1O4zkGw",
  template: ``, // Herda do html-p3
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Partilha Viral</h3>
      <p class="text-sm">Adicione os seguintes metadados sociais logo abaixo do link canonical:</p>
      
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Adicione <code>&lt;meta property="og:title" content="Codworks Master Project"&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Adicione <code>&lt;meta property="og:type" content="website"&gt;</code>.</p>
        <p><strong>Ação 3:</strong> Adicione <code>&lt;meta property="og:image" content="cover.jpg"&gt;</code>.</p>
        <p><strong>Ação 4:</strong> Adicione <code>&lt;meta name="twitter:card" content="summary_large_image"&gt;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "og_title", description: "Meta og:title configurada", test: "property=\"og:title\"" },
    { id: "og_image", description: "Meta og:image configurada", test: "property=\"og:image\"" },
    { id: "tw_card", description: "Twitter Card configurado", test: "name=\"twitter:card\"" }
  ]
};