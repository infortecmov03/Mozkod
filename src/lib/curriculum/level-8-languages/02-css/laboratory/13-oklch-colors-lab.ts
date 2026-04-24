
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "css-p13",
  language: "html",
  title: "Projeto Master: Cores Modernas e color-mix()",
  description: "Implemente o novo padrão de cores e estados dinâmicos.",
  statement: "Utilize o oklch() para a cor primária e color-mix() para o estado de hover do botão.",
  isProjectPart: true,
  youtubeVideoId: "u044iM9xsTM",
  template: `<!DOCTYPE html>
<html lang="pt-MZ">
<head>
  <style>
    @layer base, components;
    @layer base {
      :root {
        /* Ação 1: Mude para oklch(60% 0.15 250) */
        --primary: oklch(60% 0.15 250);
      }
      body { background: #0f172a; color: white; }
    }
    @layer components {
      .btn {
        background: var(--primary);
        padding: 10px 20px;
        border: none;
        color: white;
        cursor: pointer;
        transition: 0.3s;
      }
      .btn:hover {
        /* Ação 2: Use color-mix para escurecer 20% */
        background: color-mix(in oklab, var(--primary), black 20%);
      }
    }
  </style>
</head>
<body>
  <button class="btn">Botão Master</button>
</body>
</html>`,
  detailedExplanation: `<h3>🌈 Mistura Atómica</h3><p>O <code>color-mix()</code> permite criar variações dinâmicas de cores diretamente no CSS, ideal para estados de hover ou bordas subtis.</p>`,
  objectives: [
    { id: "oklch", description: "Definir --primary como oklch", test: "oklch(" },
    { id: "cmix", description: "Usar color-mix no hover", test: "color-mix(" }
  ]
};
