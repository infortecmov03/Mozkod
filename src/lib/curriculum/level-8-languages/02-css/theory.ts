
import { lesson as l1 } from './theory/01-selectors';

const cssMasterTitles = [
  "Design Systems Architecture", "Utility-First Methodology", "CSS Variables & Design Tokens", 
  "Component Isolation (CSS Modules)", "Naming Conventions (BEM/OOCSS)", "CSS-in-JS Internals", 
  "Theming Engines & Dark Mode", "GPU Acceleration & Compositing", "Paint & Reflow Optimization", 
  "Core Web Vitals CSS Impact", "Critical CSS Loading", "Font Loading Strategies",
  "Containment Property", "Cascade Layers (@layer)", "Subgrid & Complex Grids", 
  "Container Queries & Micro-layouts", "Scroll-Driven Animations", "View Transitions API", 
  "Color Mix & HDR Color Spaces", "Advanced Math Functions (clamp/calc)", "Next-Gen CSS Selectors"
];

export const lessons = [
  l1,
  ...cssMasterTitles.map((title, i) => ({
    id: `css-m${i + 2}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🎨 CSS Master: ${title}</h2><p>Técnicas avançadas de estilização, performance de renderização e arquitetura de componentes visuais em larga escala.</p></div>`,
    quizId: `css-mq${i + 2}`
  }))
];
