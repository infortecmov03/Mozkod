
import { lesson as l1 } from './theory/01-semantics';
// As lições 2 a 21 são importadas como objetos básicos para garantir o carregamento
// Em produção, cada uma teria seu ficheiro .ts dedicado na pasta /theory
export const lessons = [
  l1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `html-m${i + 2}`,
    title: [
      "SEO & Metadata Optimization", "SSR & Hydration Strategies", "Microdata & Schema.org", "Web Components Architecture",
      "Shadow DOM Internals", "Templating Engines", "ARIA Roles & Attributes", "Focus Management", "Screen Readers Engine",
      "Keyboard Navigation Patterns", "SVG Accessibility", "Form Validation A11y", "Multimedia Captions & Tracks",
      "Canvas Rendering Engine", "WebAssembly DOM Integration", "Resource Hints (Preload/Prefetch)", "Content Security Policy",
      "WebGPU Canvas Integration", "Service Workers & Offline HTML", "PWA Manifest & Installation"
    ][i],
    content: "<p>Conteúdo avançado de engenharia HTML em desenvolvimento.</p>",
    quizId: `html-mq${i + 2}`
  }))
];
