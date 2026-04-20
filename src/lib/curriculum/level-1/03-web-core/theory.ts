
import { lesson as l1 } from './theory/01-estrutura-html';
import { lesson as l2 } from './theory/02-css-seletores';
import { lesson as l3 } from './theory/03-css-box-model';
import { lesson as l4 } from './theory/04-css-flexbox';
import { lesson as l5 } from './theory/05-css-grid';
import { lesson as l6 } from './theory/06-responsividade';
import { lesson as l7 } from './theory/07-formularios';
import { lesson as l8 } from './theory/08-publicacao-web';

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8,
  ...Array.from({ length: 13 }, (_, i) => ({
    id: `web-t${i + 9}`,
    title: [
      "Semântica & SEO", "Variáveis CSS (Custom Properties)", "Tipografia & Web Fonts",
      "Otimização de Imagens", "Transições & Animações", "Z-Index & Stacking Context",
      "Fundamentos de SVG", "Metodologias CSS (BEM)", "Motores de Renderização",
      "CSS Crítico & Performance", "ARIA & Acessibilidade Básica", "Seletores Modernos (:has, :is)",
      "Container Queries"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🌐 Engenharia Web</h2><p>Tópico avançado sobre o desenvolvimento de interfaces modernas e performantes.</p></div>`,
    quizId: `web-q${i + 9}`
  }))
];
