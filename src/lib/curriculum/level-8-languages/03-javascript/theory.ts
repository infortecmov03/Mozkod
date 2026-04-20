import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  // PILAR 1: Paradigma e Expressividade
  { id: "js-m1", title: "Prototypal Inheritance & Prototype Chain", content: "Domínio profundo da herança baseada em protótipos vs classes.", quizId: "js-mq1" },
  { id: "js-m2", title: "Closures e Lexical Environments", content: "Como o JS gere o escopo e a persistência de variáveis na memória.", quizId: "js-mq2" },
  { id: "js-m3", title: "High-Order Functions & Composition", content: "Criação de abstrações poderosas através de composição funcional.", quizId: "js-mq3" },
  { id: "js-m4", title: "The 'this' Keyword & Execution Context", content: "Mastery total sobre context binding (call, apply, bind).", quizId: "js-mq4" },
  { id: "js-m5", title: "Functional Programming Patterns", content: "Imutabilidade, pureza e currying no ecossistema moderno.", quizId: "js-mq5" },
  { id: "js-m6", title: "OOP Design Patterns em JS", content: "Implementação de Factory, Singleton e Observer de forma idiomática.", quizId: "js-mq6" },
  { id: "js-m7", title: "Advanced ESNext & Proxy API", content: "Uso de Proxies para intercetar comportamentos fundamentais de objetos.", quizId: "js-mq7" },

  // PILAR 2: Concorrência e Performance
  { id: "js-m8", title: "Event Loop: Microtasks vs Macrotasks", content: "Entenda a prioridade de execução entre Promises e Timers.", quizId: "js-mq8" },
  { id: "js-m9", title: "Web Workers & Parallelism", content: "Execução multi-thread real no navegador para tarefas pesadas.", quizId: "js-mq9" },
  { id: "js-m10", title: "SharedArrayBuffer & Atomics", content: "Gestão de memória partilhada entre threads de forma segura.", quizId: "js-mq10" },
  { id: "js-m11", title: "Async/Await Implementation", content: "Como os geradores e promessas simulam o comportamento síncrono.", quizId: "js-mq11" },
  { id: "js-m12", title: "Node.js Event Loop (Libuv)", content: "A arquitetura de I/O não-bloqueante por trás do servidor.", quizId: "js-mq12" },
  { id: "js-m13", title: "Streams API (Readable/Writable)", content: "Processamento eficiente de volumes massivos de dados.", quizId: "js-mq13" },
  { id: "js-m14", title: "Scheduling & RequestIdleCallback", content: "Otimização de tarefas para frames suaves (60fps).", quizId: "js-mq14" },

  // PILAR 3: Internals e Metaprogramação
  { id: "js-m15", title: "V8 Engine: JIT & TurboFan", content: "Como o motor do Chrome otimiza o código em tempo de execução.", quizId: "js-mq15" },
  { id: "js-m16", title: "Hidden Classes & Inline Caching", content: "Escrevendo código 'monomórfico' para máxima performance.", quizId: "js-mq16" },
  { id: "js-m17", title: "Garbage Collection: Orinoco Engine", content: "Gestão de memória: Mark-and-Sweep e Compactação.", quizId: "js-mq17" },
  { id: "js-m18", title: "Metaprogramming with Reflect", content: "Manipulação de objetos e metadados em runtime.", quizId: "js-mq18" },
  { id: "js-m19", title: "Symbols & Well-Known Symbols", content: "Criação de propriedades privadas e hooks de sistema.", quizId: "js-mq19" },
  { id: "js-m20", title: "Memory Leaks & Heap Snapshots", content: "Diagnóstico e resolução de vazamentos de memória reais.", quizId: "js-mq20" },
  { id: "js-m21", title: "Projeto Final: High-Perf JS App", content: "Construção de uma aplicação master com deploy na Vercel.", quizId: "js-mq21" }
];
