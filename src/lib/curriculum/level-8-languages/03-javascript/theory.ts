
import type { TheoryLesson } from '../../types';

const jsTitles = [
  "Fase 1: Variáveis, Hoisting e Escopo Profundo",
  "Fase 1: Tipos Primitivos, Coerção e Symbol",
  "Fase 1: Lógica, Loops e Truthy/Falsy de Elite",
  "Fase 1: Arrow Functions e Lexical Closures",
  "Fase 2: Arrays e Objetos: Manipulação de Memória",
  "Fase 2: DOM de Elite: Delegacia e Custom Events",
  "Fase 2: Performance: Debounce e Throttling Master",
  "Fase 2: Intersection e Resize Observers Industriais",
  "Fase 2: Debugging: Call Stack e Memory Snapshots",
  "Fase 3: Assincronia: Promises e Async/Await Internals",
  "Fase 3: Event Loop: Microtasks e a Fila de Tarefas",
  "Fase 3: POO: Prototypes, Classes e Mixins",
  "Fase 3: Funcional: Currying e Composição",
  "Fase 3: Módulos: ESM, Tree Shaking e CJS",
  "Fase 3: Browser APIs: Fetch, Storage e Streams",
  "Fase 4: Metaprogramação: Proxy, Reflect e Symbols",
  "Fase 4: Internals: V8, Hidden Classes e GC",
  "Fase 4: Paralelismo: Web Workers e Shared Memory",
  "Fase 4: Segurança: XSS, CSRF, CSP e Trusted Types",
  "Fase 4: Web Crypto: Hashing e Dados Sensíveis",
  "Fase 4: Capstone: Deploy de Framework MVC do Zero"
];

export const lessons: TheoryLesson[] = jsTitles.map((title, i) => ({
  id: `js-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ JavaScript Master: ${title}</h2><p>Trilha de especialização profunda no motor da web moderna.</p></div>`,
  quizId: `js-mq${i + 1}`
}));
