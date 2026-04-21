
import { lesson as l1 } from './theory/01-prototypal-inheritance';
import { lesson as l2 } from './theory/02-event-loop-internals';
import { lesson as l3 } from './theory/03-closures-memory';
import { lesson as l4 } from './theory/04-proxies-metaprogramming';
import { lesson as l5 } from './theory/05-abort-signals';
import { lesson as l8 } from './theory/08-event-loop-internals';
import { lesson as l15 } from './theory/15-v8-hidden-classes';

export const lessons = [
  l1, l2, l3, l4, l5,
  ...Array.from({ length: 2 }, (_, i) => ({
    id: `js-m${i + 6}`,
    title: [
      "JavaScript Modules (ESM) & Tree Shaking",
      "Web Workers: Paralelismo Real no Browser"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ JS Engineering: Arquitetura</h2><p>Exploração técnica sobre o comportamento interno da linguagem.</p></div>`,
    quizId: `js-mq${i + 6}`
  })),
  l8,
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `js-m${i + 9}`,
    title: [
      "Performance: Debouncing e Throttling Master", "Security: Sanitização e Proteção contra XSS",
      "Ecossistema: Transpilers e o futuro do TC39", "Gestão de Memória: Heap, Stack e GC Internals",
      "Currying e Composição de Funções", "Streams API: Processamento de Dados Massivos"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ JS Engineering: Performance</h2><p>Otimização de recursos e segurança no cliente e servidor.</p></div>`,
    quizId: `js-mq${i + 9}`
  })),
  l15,
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `js-m${i + 16}`,
    title: [
      "Web Crypto API: Segurança de Dados Nativa", "Service Workers e Interceção de Rede",
      "Shadow DOM Interactivity", "Custom Events e Comunicação desacoplada",
      "Intl API: Internacionalização de Elite", "Capstone Milestone: Full Stack JS"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ JS Engineering: APIs Modernas</h2><p>Uso de APIs avançadas do browser para sistemas complexos.</p></div>`,
    quizId: `js-mq${i + 16}`
  }))
];
