import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p1",
  language: "html",
  title: "Projeto Master: Design System e Variáveis Globais",
  description: "Inicie a camada visual do seu portal utilizando tokens de design.",
  statement: "Configure as variáveis de cor e o reset básico no cabeçalho do documento.",
  isProjectPart: true,
  youtubeVideoId: "v4cd1O4zkGw",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A academia de engenharia de elite de Moçambique.">
  <meta name="author" content="Master Engineer">
  <link rel="canonical" href="https://codworks.mz">
  <title>Codworks Master Studio</title>
</head>
<body>
  <header>
    <img src="hero.jpg" alt="Academia" fetchpriority="high">
    <nav aria-label="Menu Principal">
      <ul>
        <li><a href="#main-content">Home</a></li>
        <li><a href="#register">Inscrição</a></li>
      </ul>
    </nav>
  </header>
  <main id="main-content" role="main">
    <section>
      <h1>Bem-vindo ao Nível Master</h1>
      <p>A estrutura está validada.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Codworks Moz</p>
  </footer>
</body>
</html>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🎨 Iniciando o Design System</h3>
      <p class="text-sm">Um engenheiro master não usa cores fixas; ele usa <strong>Design Tokens</strong> (Custom Properties). Isto permite que o tema mude instantaneamente.</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> No <code>&lt;head&gt;</code>, adicione a tag <code>&lt;style&gt;</code>.</p>
        <p><strong>Ação 2:</strong> Defina <code>:root { --primary: #3b82f6; --bg: #0f172a; }</code>.</p>
        <p><strong>Ação 3:</strong> Aplique <code>body { background: var(--bg); color: white; }</code>.</p>
        <p><strong>Ação 4:</strong> Adicione um seletor <code>h1 { color: var(--primary); }</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "root_vars", description: "Definir variáveis --primary e --bg no :root", test: "--primary: #3b82f6" },
    { id: "body_style", description: "Aplicar background usando a variável", test: "background: var(--bg)" },
    { id: "h1_color", description: "Estilizar h1 com a cor primária", test: "h1 { color: var(--primary)" }
  ]
};
