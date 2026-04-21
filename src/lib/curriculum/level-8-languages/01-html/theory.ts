
import { lesson as l1 } from './theory/01-semantics';
import { lesson as l2 } from './theory/02-seo-metadata';
import { lesson as l3 } from './theory/03-ssr-hydration';
import { lesson as l4 } from './theory/04-web-components';

const htmlMasterTitles = [
  "Web Components Architecture", "Shadow DOM Internals", "Custom Elements Lifecycle",
  "Templating Engines Internals", "ARIA Roles & State Management", "Focus Management & Tab Index", 
  "Screen Readers Engine Interop", "Keyboard Navigation Patterns", "SVG Accessibility & Optimization", 
  "Advanced Form Validation A11y", "Multimedia Captions & Tracks", "Canvas Rendering Engine Basics", 
  "WebAssembly DOM Integration", "Resource Hints (Preload/Prefetch)", "Content Security Policy (CSP)", 
  "WebGPU Canvas Integration", "Service Workers & Offline HTML"
];

export const lessons = [
  l1, l2, l3, l4,
  ...htmlMasterTitles.slice(3).map((title, i) => ({
    id: `html-m${i + 5}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🏗️ HTML Master: ${title}</h2><p>Exploração profunda sobre como a estrutura semântica e as APIs do browser definem a performance e acessibilidade da web moderna.</p></div>`,
    quizId: `html-mq${i + 5}`
  }))
];
