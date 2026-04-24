import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p2",
  language: "html",
  title: "Projeto Master: Marcos Arquiteturais (Inside Body)",
  description: "Organize as regiões principais do seu documento para acessibilidade industrial.",
  statement: "Adicione as tags de landmark dentro do seu body para estruturar o portal.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: ``, // Herda do html-p1
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Marcos Semânticos</h3>
      <p class="text-sm">Agora vamos evoluir o seu <code>&lt;body&gt;</code>. Remova o conteúdo temporário da aula anterior e adicione os marcos:</p>
      
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Dentro do <code>&lt;body&gt;</code>, adicione a tag <code>&lt;header&gt;</code> no topo.</p>
        <p><strong>Ação 2:</strong> Abaixo do header, adicione a tag <code>&lt;main role="main"&gt;</code>. Este será o container principal.</p>
        <p><strong>Ação 3:</strong> Mova o seu <code>&lt;h1&gt;</code> e <code>&lt;p&gt;</code> para DENTRO da tag <code>&lt;main&gt;</code>.</p>
        <p><strong>Ação 4:</strong> Antes de fechar o body, adicione a tag <code>&lt;footer&gt;</code> com o texto: <code>&lt;p&gt;&copy; 2024 Codworks Moz&lt;/p&gt;</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "header", description: "Adicionar <header> no topo do body", test: "<header>" },
    { id: "main", description: "Adicionar <main role=\"main\">", test: "<main role=\"main\">" },
    { id: "h1_move", description: "H1 deve estar dentro do main", test: "<main role=\"main\">\n    <h1>" },
    { id: "footer", description: "Adicionar <footer> com copyright", test: "<footer>" }
  ]
};