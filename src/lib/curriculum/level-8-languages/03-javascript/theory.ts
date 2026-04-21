
import { lesson as l1 } from './theory/01-prototypal-inheritance';
import { lesson as l2 } from './theory/02-event-loop-internals';
import { lesson as l3 } from './theory/03-closures-memory';
import { lesson as l4 } from './theory/04-proxies-metaprogramming';
import { lesson as l5 } from './theory/05-abort-signals';
import { lesson as l6 } from './theory/06-esm-tree-shaking';
import { lesson as l7 } from './theory/07-web-workers';
import { lesson as l8 } from './theory/08-event-loop-internals';
import { lesson as l9 } from './theory/09-debouncing-throttling';
import { lesson as l10 } from './theory/10-xss-sanitization';
import { lesson as l11 } from './theory/11-transpilers-tc39';
import { lesson as l12 } from './theory/12-gc-internals';
import { lesson as l13 } from './theory/13-currying-composition';
import { lesson as l14 } from './theory/14-streams-api';
import { lesson as l15 } from './theory/15-v8-hidden-classes';
import { lesson as l16 } from './theory/16-web-crypto';
import { lesson as l17 } from './theory/17-service-workers-network';
import { lesson as l18 } from './theory/18-shadow-dom-interactivity';
import { lesson as l19 } from './theory/19-custom-events';
import { lesson as l20 } from './theory/20-intl-api';
import { lesson as l21 } from './theory/21-capstone-fullstack';

export const lessons = [
  // FASE 1: Fundamentos (1-4)
  { id: "js-f1-1", title: "Fase 1: Variáveis, Hoisting e Escopo", content: "<p>Diferenças entre var, let e const. O conceito de elevação (hoisting).</p>", quizId: "js-mq1" },
  { id: "js-f1-2", title: "Fase 1: Tipos Primitivos e Coerção", content: "<p>String, Number, BigInt, Boolean, Undefined, Null e Symbol.</p>", quizId: "js-mq2" },
  { id: "js-f1-3", title: "Fase 1: Lógica, Loops e Truthy/Falsy", content: "<p>Estruturas de decisão e iteração (for...of, for...in).</p>", quizId: "js-mq3" },
  { id: "js-f1-4", title: "Fase 1: Arrow Functions e Closures Básicas", content: "<p>A sintaxe moderna e a captura de contexto léxico.</p>", quizId: "js-mq4" },

  // FASE 2: Intermediário (5-9)
  { id: "js-f2-5", title: "Fase 2: Arrays e Objetos Avançados", content: "<p>Map, Filter, Reduce e a desestruturação de dados.</p>", quizId: "js-mq5" },
  { id: "js-f2-6", title: "Fase 2: Manipulação DOM e Eventos", content: "<p>Seletores de elite e delegação de eventos para performance.</p>", quizId: "js-mq6" },
  { ...l9, title: "Fase 2: Performance: Debounce e Throttling" },
  { id: "js-f2-8", title: "Fase 2: Intersection e Resize Observers", content: "<p>Monitorização inteligente de visibilidade e tamanho de componentes.</p>", quizId: "js-mq8" },
  { id: "js-f2-9", title: "Fase 2: Debugging e Tratamento de Erros", content: "<p>Try/Catch/Finally e o uso avançado da Console API.</p>", quizId: "js-mq9" },

  // FASE 3: Avançado (10-15)
  { ...l2, title: "Fase 3: Assincronia: Promises e Async/Await" },
  { ...l8, title: "Fase 3: Event Loop: Microtasks e Macrotasks" },
  { ...l1, title: "Fase 3: POO: Prototypes e Classes ES6+" },
  { ...l13, title: "Fase 3: Currying e Funções de Alta Ordem" },
  { ...l6, title: "Fase 3: ESM Modules e Tree Shaking" },
  { ...l20, title: "Fase 3: Browser APIs: Fetch, Storage e IndexedDB" },

  // FASE 4: Expert (16-21)
  { ...l4, title: "Fase 4: Metaprogramação: Proxy e Reflect" },
  { ...l12, title: "Fase 4: Memory Leaks e Garbage Collection" },
  { ...l7, title: "Fase 4: Web Workers e Paralelismo" },
  { ...l10, title: "Fase 4: Segurança: XSS, CSRF e CSP" },
  { ...l16, title: "Fase 4: Web Crypto e Dados Sensíveis" },
  { ...l21, title: "Fase 4: Capstone: Framework MVC do Zero" }
];
