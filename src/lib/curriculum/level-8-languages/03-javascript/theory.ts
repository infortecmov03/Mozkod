import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-prototypal-inheritance';
import { lesson as l2 } from './theory/02-event-loop-internals';
import { lesson as l3 } from './theory/03-closures-memory';
import { lesson as l4 } from './theory/04-proxies-metaprogramming';
import { lesson as l5 } from './theory/05-abort-signals';
import { lesson as l6 } from './theory/06-esm-tree-shaking';
import { lesson as l7 } from './theory/07-web-workers';
import { lesson as l9 } from './theory/09-debouncing-throttling';
import { lesson as l14 } from './theory/14-streams-api';

const jsTitles = [
  "Fase 1: Prototypal Inheritance Internals",
  "Fase 1: Event Loop: Microtasks vs Macrotasks",
  "Fase 1: Closures e Gestão de Memória Profunda",
  "Fase 1: Metaprogramação: Proxies e Reflect",
  "Fase 2: Advanced Async: AbortController e Sinais",
  "Fase 2: JavaScript Modules (ESM) & Tree Shaking",
  "Fase 2: Web Workers: Paralelismo Real no Browser",
  "Fase 2: Observers APIs: Mutation, Intersection e Resize",
  "Fase 2: Performance: Debouncing e Throttling de Elite",
  "Fase 3: Promises Internals: Wakers e Microtask Queue",
  "Fase 3: V8 Engines: Hidden Classes e Inline Caching",
  "Fase 3: Programação Funcional: Currying e Composição",
  "Fase 3: Web Crypto API: Segurança de Dados Nativa",
  "Fase 3: Streams API: Processamento de Dados Massivos",
  "Fase 3: Sanitização e Proteção contra XSS",
  "Fase 4: Service Workers e a App Shell Architecture",
  "Fase 4: Shadow DOM: Event Retargeting e Encapsulamento",
  "Fase 4: Custom Events e Comunicação Desacoplada",
  "Fase 4: Intl API: Internacionalização e Localização",
  "Fase 4: History API: Roteamento de SPAs do Zero",
  "Fase 4: Capstone: Auditoria de Performance e Segurança"
];

const lessonsSource: Record<number, any> = {
  0: l1, 1: l2, 2: l3, 3: l4, 4: l5, 5: l6, 6: l7, 8: l9, 13: l14
};

export const lessons: TheoryLesson[] = jsTitles.map((title, i) => {
  if (lessonsSource[i]) {
    return {
      ...lessonsSource[i],
      title: title,
      id: `js-m${i + 1}`,
      quizId: `js-mq${i + 1}`,
      enableInteractive: true
    };
  }

  return {
    id: `js-m${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ JavaScript Master: ${title}</h2><p>Estudo aprofundado dos internals da linguagem e APIs modernas do browser para escala industrial.</p></div>`,
    quizId: `js-mq${i + 1}`,
    enableInteractive: true
  };
});
