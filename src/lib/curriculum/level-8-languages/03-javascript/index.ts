
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-interactivity-lab';
import { exercise as p2 } from './laboratory/02-mutation-observer-lab';

// Helper para gerar o resto da trilha prática (3-21) com o padrão de elite
const generateLabPlaceholder = (id: number, title: string) => ({
  id: `js-p${id}`,
  language: "html",
  title: `Projeto Master: ${title}`,
  description: "Evolução do motor de interatividade do portal.",
  statement: "Implemente a funcionalidade avançada no script do projeto.",
  isProjectPart: true,
  template: `<!-- Snapshot da aula ${id-1} -->`,
  detailedExplanation: `<h3>🚀 Engenharia de Interatividade</h3><p>Fase ${id} do projeto master.</p>`,
  objectives: [{ id: "obj", description: "Concluir requisito", test: "script" }]
});

const titles = [
  "Custom Events", "Web Workers", "AbortController", "Proxy Validation", 
  "Intl API", "Intersection Observer", "Sanitizer API", "Streams API", 
  "Web Crypto", "History API Routing", "Drag and Drop", "Hardware Awareness", 
  "Web Audio", "Permissions API", "Atomics & Shared Memory", "Wasm Interop", 
  "Beacon Telemetry", "Trusted Types", "IndexedDB Persistence"
];

export const javascriptKA: KnowledgeArea = {
  id: 'lang-javascript',
  title: '03. JavaScript Master',
  description: 'Profundidade técnica na linguagem da web: de motores a metaprogramação.',
  load: '50h',
  iconName: 'Zap',
  theory: lessons,
  practice: {
    html: [
      p1, p2,
      ...titles.map((t, i) => generateLabPlaceholder(i + 3, t))
    ]
  },
  quizzes: quizzes
};
