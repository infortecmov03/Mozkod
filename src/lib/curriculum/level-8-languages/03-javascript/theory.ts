import { lesson as l1 } from './theory/01-prototypal-inheritance';
import { lesson as l2 } from './theory/02-event-loop-internals';

const jsTitles = [
  "V8 Internals: Hidden Classes & Inline Caching",
  "Closures & Memory: O Escopo Léxico Profundo",
  "Metaprogramação: Proxies e Reflect API",
  "Advanced Async: AbortController e Sinais",
  "JavaScript Modules (ESM) & Tree Shaking",
  "Web Workers: Paralelismo Real no Browser",
  "Performance: Debouncing e Throttling Master",
  "Security: Sanitização e Proteção contra XSS",
  "Ecossistema: Transpilers e o futuro do TC39",
  "Gestão de Memória: Heap, Stack e GC Internals",
  "Currying e Composição de Funções",
  "Streams API: Processamento de Dados Massivos",
  "Web Crypto API: Segurança de Dados Nativa",
  "Service Workers e Interceção de Rede",
  "Shadow DOM Interactivity",
  "Custom Events e Comunicação desacoplada",
  "Intl API: Internacionalização de Elite",
  "Regex Engine e Performance de Padrões",
  "JavaScript em Ambientes Non-Browser (Node/Bun)"
];

export const lessons = [
  l1, l2,
  ...jsTitles.map((title, i) => ({
    id: `js-m${i + 3}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ JS Engineering: ${title}</h2><p>Exploração técnica de nível master sobre o comportamento interno da linguagem e performance extrema.</p></div>`,
    quizId: `js-mq${i + 3}`
  }))
];
