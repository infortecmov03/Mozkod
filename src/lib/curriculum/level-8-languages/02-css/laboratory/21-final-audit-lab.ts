
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p21",
  language: "html",
  title: "Projeto Master: Auditoria Final do Design System",
  description: "Consolide todos os conceitos aplicados.",
  statement: "Garante que o seu ficheiro CSS utiliza @layer, OKLCH, Container Queries e Animações GPU.",
  isProjectPart: true,
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    /* DESIGN SYSTEM MASTER FINALIZADO */
    @layer reset, base, components, utilities;
    
    @layer base {
      :root {
        --primary: oklch(60% 0.15 250);
        --bg: #0f172a;
      }
      body { background: var(--bg); color: white; }
    }
  </style>
</head>
<body>
  <h1>Status: Elite Software Engineer</h1>
</body>
</html>`,
  detailedExplanation: `<h3>🏆 Graduação CSS Master</h3><p>Parabéns! Criaste uma arquitetura de estilos que é performática, acessível e escalável para o mercado global.</p>`,
  objectives: [
    { id: "audit", description: "Mantenha o comentário de Design System Master.", test: "DESIGN SYSTEM MASTER" }
  ]
};
