import { lesson as l1 } from './theory/01-selectors';
import { lesson as l2 } from './theory/02-cascade-layers';
import { lesson as l3 } from './theory/03-custom-properties';

const titles = [
  "Box Model Internals & Logical Properties", "Flexbox Mastery: Intrinsic Sizing",
  "Grid & Subgrid Master", "Container Queries vs Media Queries",
  "CSS Math: clamp(), min(), max()", "Variable Fonts & Typography Perf",
  "High Perf Animations (Compositor)", "Compositing & Blending Modes",
  "Glassmorphism & Backdrop Filters", "SVG Styling & Path Animation",
  "Architectures: BEM & Utility-first", "PostCSS & Build Tooling",
  "Performance: Critical CSS & FOUC", "CSS Houdini Paint API",
  "Pseudo-elements: ::slotted & ::part", "Scroll-driven Animations",
  "Anchor Positioning Future", "Advanced Color Spaces (LCH/OKLCH)"
];

export const lessons = [
  l1, l2, l3,
  ...titles.map((title, i) => ({
    id: `css-m${i + 4}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🎨 CSS Engineering: ${title}</h2><p>Exploração de nível master sobre arquitetura de estilos e performance de renderização no browser.</p></div>`,
    quizId: `css-mq${i + 4}`
  }))
];
