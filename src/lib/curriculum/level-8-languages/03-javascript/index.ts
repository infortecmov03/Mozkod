
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-interactivity-lab';
import { exercise as p2 } from './laboratory/02-mutation-observer-lab';
import { exercise as p3 } from './laboratory/03-custom-events-lab';
import { exercise as p4 } from './laboratory/04-abort-controller-lab';
import { exercise as p21 } from './laboratory/21-capstone-js-lab';

// Helper para gerar a trilha prática intermediária com o padrão de elite
const generateLabPlaceholder = (id: number, title: string) => ({
  id: `js-p${id}`,
  language: "html",
  title: `Projeto Master: ${title}`,
  description: "Evolução do motor de interatividade do portal.",
  statement: "Implemente a funcionalidade avançada no script do projeto.",
  isProjectPart: true,
  template: `<!-- Snapshot da aula ${id-1} -->`,
  detailedExplanation: `<h3>🚀 Engenharia de Interatividade</h3><p>Fase ${id} do projeto master: ${title}.</p>`,
  objectives: [{ id: "obj", description: "Concluir requisito", test: "script" }]
});

const titles = [
  "Web Workers & Paralelismo", "Proxy Validation Layer", "Intl Localization", 
  "Intersection Observer", "Sanitizer Security", "Streams Data Processing", 
  "Web Crypto Hashing", "History API Routing", "Drag and Drop API", 
  "Hardware/Battery Awareness", "Web Audio Feedback", "Permissions Handling", 
  "SharedArrayBuffer Sync", "Wasm Interop Bridge", "Beacon Telemetry", 
  "Trusted Types Policy", "IndexedDB Storage"
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
      p1, p2, p3, p4,
      ...titles.map((t, i) => generateLabPlaceholder(i + 5, t)),
      p21
    ]
  },
  quizzes: quizzes
};
