import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p5",
  language: "html",
  title: "Projeto Master: Hierarquia e Seções",
  description: "Desenhe o mapa de leitura do seu conteúdo principal.",
  statement: "Estruture o interior da tag <main> usando seções e títulos hierárquicos.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: ``, // Herda do html-p4
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Árvore de Títulos</h3>
      <p class="text-sm">Vá para dentro da tag <code>&lt;main&gt;</code> e organize o conteúdo:</p>
      
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Envolva o conteúdo existente numa tag <code>&lt;section&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Abaixo do <code>&lt;h1&gt;</code>, adicione um <code>&lt;h2&gt;</code> com o título: "Sobre o Motor de Engenharia".</p>
        <p><strong>Ação 3:</strong> Adicione uma segunda <code>&lt;section&gt;</code> abaixo da primeira.</p>
        <p><strong>Ação 4:</strong> Dentro da segunda seção, adicione um <code>&lt;h2&gt;</code>: "Módulos de Especialização".</p>
        <p><strong>Ação 5:</strong> Dentro desta seção, use <code>&lt;h3&gt;</code> para listar: "Frontend", "Backend" e "DevOps".</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "sections", description: "Pelo menos 2 tags <section> no main", test: "<section>" },
    { id: "h2_check", description: "Pelo menos 2 tags <h2>", test: "<h2>" },
    { id: "h3_check", description: "Pelo menos 3 tags <h3>", test: "<h3>" }
  ]
};