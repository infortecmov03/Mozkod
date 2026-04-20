
import { lesson as l1 } from './theory/01-event-loop';
export const lessons = [
  l1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `js-m${i + 2}`,
    title: [
      "Prototypal Inheritance Deep Dive", "Closures & Lexical Environment", "Functional Composition", "Proxy & Reflect",
      "Symbols & Metadata", "Iterators & Generators", "Modern Classes Internals", "Web Workers & Parallelism",
      "Promise States & Internals", "MessageChannel API", "SharedArrayBuffer & Atomics", "Scheduling: requestIdleCallback",
      "Async Error Propagation", "V8 Hidden Classes", "V8 Garbage Collection", "Ignition Interpreter",
      "TurboFan JIT Compiler", "Memory Leaks & Profiling", "WebAssembly Interop", "Signals & Reactive Engines"
    ][i],
    content: "<p>Exploração profunda do motor JavaScript.</p>",
    quizId: `js-mq${i + 2}`
  }))
];
