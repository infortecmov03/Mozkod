
import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-prototypal-inheritance';
import { lesson as l2 } from './theory/02-event-loop-internals';
import { lesson as l3 } from './theory/03-closures-memory';
import { lesson as l4 } from './theory/04-proxies-metaprogramming';
import { lesson as l5 } from './theory/05-abort-signals';
import { lesson as l6 } from './theory/06-esm-tree-shaking';
import { lesson as l7 } from './theory/07-web-workers';
import { lesson as l8 } from './theory/14-streams-api'; // Reutilizando a lógica de Streams para o lugar correto
import { lesson as l9 } from './theory/09-debouncing-throttling';
import { lesson as l10 } from './theory/10-xss-sanitization';

const jsTitles = [
  "Fase 1: Prototypal Inheritance: A Alma do JavaScript",
  "Fase 1: Event Loop Deep Dive: Microtasks vs Macrotasks",
  "Fase 1: Closures e Memória: O Escopo Léxico Profundo",
  "Fase 1: Metaprogramação: Proxies e Reflect API",
  "Fase 2: Advanced Async: AbortController e Sinais",
  "Fase 2: JavaScript Modules (ESM) & Tree Shaking",
  "Fase 2: Web Workers: Paralelismo Real no Browser",
  "Fase 2: Streams API: Processamento de Dados Massivos",
  "Fase 2: Performance: Debouncing e Throttling Master",
  "Fase 3: Security: Sanitização e Proteção contra XSS",
  "Fase 3: Ecossistema: Transpilers e o futuro do TC39",
  "Fase 3: Gestão de Memória: Heap, Stack e GC Internals",
  "Fase 3: Programação Funcional: Currying e Composição",
  "Fase 3: Web Crypto API: Segurança de Dados Nativa",
  "Fase 3: V8 Internals: Hidden Classes e Inline Caching",
  "Fase 4: Service Workers e Interceção de Rede",
  "Fase 4: Shadow DOM Interactivity e Event Retargeting",
  "Fase 4: Custom Events e Comunicação Desacoplada",
  "Fase 4: Intl API: Internacionalização de Elite",
  "Fase 4: History API: Roteamento de SPAs do Zero",
  "Fase 4: Capstone: Deploy de Portal Dinâmico de Elite"
];

const lessonsSource: Record<number, any> = {
  0: l1, 1: l2, 2: l3, 3: l4, 4: l5, 5: l6, 6: l7, 7: l8, 8: l9, 9: l10
};

export const lessons: TheoryLesson[] = jsTitles.map((title, i) => {
  if (lessonsSource[i]) {
    return {
      ...lessonsSource[i],
      title: title,
      id: `js-m${i + 1}`,
      quizId: `js-mq${i + 1}`
    };
  }

  return {
    id: `js-m${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ JavaScript Master: ${title}</h2><p>Exploração profunda das APIs modernas do browser e otimizações de motor V8 para engenharia de alta escala.</p></div>`,
    quizId: `js-mq${i + 1}`,
    enableInteractive: true
  };
});
