
import { lesson as l1 } from './theory/01-selectors';
import { lesson as l2 } from './theory/02-cascade-layers';
import { lesson as l3 } from './theory/03-custom-properties';
import { lesson as l4 } from './theory/04-logical-properties';
import { lesson as l5 } from './theory/05-flexbox-mastery';
import { lesson as l6 } from './theory/06-subgrid-master';
import { lesson as l8 } from './theory/08-css-math';
import { lesson as l10 } from './theory/10-perf-animations';

const titles = [
  "Container Queries vs Media Queries",
  "Variable Fonts & Typography Perf",
  "Compositing & Blending Modes",
  "Glassmorphism & Backdrop Filters",
  "SVG Styling & Path Animation",
  "Architectures: BEM & Utility-first",
  "PostCSS & Build Tooling",
  "Performance: Critical CSS & FOUC",
  "CSS Houdini Paint API",
  "Pseudo-elements: ::slotted & ::part",
  "Scroll-driven Animations",
  "Anchor Positioning Future",
  "Advanced Color Spaces (LCH/OKLCH)"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6,
  { id: "css-m7", title: "Container Queries vs Media Queries", content: "<p>Exploração técnica profunda sobre responsividade baseada em componentes.</p>", quizId: "css-mq7" },
  l8,
  { id: "css-m9", title: "Variable Fonts & Typography Perf", content: "<p>Otimização de fontes e eixos de variação tipográfica.</p>", quizId: "css-mq9" },
  l10,
  ...titles.slice(2).map((title, i) => ({
    id: `css-m${i + 11}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🎨 CSS Engineering: ${title}</h2><p>Exploração de nível master sobre arquitetura de estilos e performance de renderização no browser.</p></div>`,
    quizId: `css-mq${i + 11}`
  }))
];
