import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p2",
  language: "html",
  title: "Projeto Master: Cascade Layers (@layer)",
  description: "Organize a prioridade de estilos de forma arquitetural.",
  statement: "Crie a hierarquia de camadas para proteger o seu Design System.",
  isProjectPart: true,
  youtubeVideoId: "gI-qXk7XojA",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <meta charset="UTF-8">
  <title>Codworks Master Studio</title>
  <style>
    :root {
      --primary: #3b82f6;
      --bg: #0f172a;
    }
    body {
      background: var(--bg);
      color: white;
      font-family: sans-serif;
    }
    h1 { color: var(--primary); }
  </style>
</head>
<body>
  <main role="main">
    <h1>Bem-vindo ao Nível Master</h1>
  </main>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🧱 Blindando a Cascata</h3>
      <p class="text-sm">Utilize <code>@layer</code> para garantir que estilos de base não sobrescrevam componentes específicos, independentemente da especificidade do seletor.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> No topo do <code>&lt;style&gt;</code>, declare <code>@layer reset, base, components;</code>.</p>
        <p><strong>Ação 2:</strong> Envolva as regras do body e h1 dentro de <code>@layer base { ... }</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "layer_decl", description: "Declarar a ordem das camadas no topo", test: "@layer reset, base, components" },
    { id: "layer_base", description: "Mover estilos para a camada 'base'", test: "@layer base {" }
  ]
};
