
import { lesson as l1 } from './theory/01-selectors';
export const lessons = [
  l1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `css-m${i + 2}`,
    title: [
      "Design Systems Architecture", "Utility-First Methodology", "CSS Variables & Design Tokens", "Component Isolation (CSS Modules)",
      "Naming Conventions (BEM/OOCSS)", "CSS-in-JS Internals", "Theming Engines", "GPU Acceleration & Compositing",
      "Paint & Reflow Optimization", "Core Web Vitals CSS", "Critical CSS Loading", "Font Loading Strategies",
      "Containment Property", "Cascade Layers (@layer)", "Subgrid & Complex Grids", "Container Queries",
      "Scroll-Driven Animations", "View Transitions API", "Color Mix & Color Spaces", "Advanced Math Functions", "Next-Gen Selectors"
    ][i],
    content: "<p>Conteúdo de alta performance CSS em desenvolvimento.</p>",
    quizId: `css-mq${i + 2}`
  }))
];
