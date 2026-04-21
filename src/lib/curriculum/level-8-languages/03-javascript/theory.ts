
import { lesson as l1 } from './theory/01-event-loop';

const jsMasterTitles = [
  "Prototypal Inheritance Deep Dive", "Closures & Lexical Environment", "Functional Composition & HOCs", 
  "Proxy & Reflect Metaprogramming", "Symbols & Metadata", "Iterators & Generators Internals", 
  "Modern Classes & Private Fields", "Web Workers & Threading", "Promise States & Internals", 
  "MessageChannel API", "SharedArrayBuffer & Atomics", "Scheduling: requestIdleCallback",
  "Async Error Propagation", "V8 Hidden Classes & ICs", "V8 Garbage Collection (Orinoco)", 
  "Ignition Interpreter", "TurboFan JIT Compiler", "Memory Leaks & Heap Profiling", 
  "WebAssembly Interop", "Signals & Reactive Engines"
];

export const lessons = [
  l1,
  ...jsMasterTitles.map((title, i) => ({
    id: `js-m${i + 2}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ JS Master: ${title}</h2><p>Análise interna do motor V8 e padrões avançados da linguagem para sistemas de alta performance.</p></div>`,
    quizId: `js-mq${i + 2}`
  }))
];
