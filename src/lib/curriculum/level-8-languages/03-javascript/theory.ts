import { lesson as l1 } from './theory/01-prototypal-inheritance';
import { lesson as l8 } from './theory/08-event-loop-internals';
import { lesson as l15 } from './theory/15-v8-hidden-classes';

export const lessons = [
  l1,
  { id: "js-m2", title: "Closures & Lexical Environment", content: "...", quizId: "js-mq2" },
  { id: "js-m3", title: "Functional Composition", content: "...", quizId: "js-mq3" },
  { id: "js-m4", title: "Proxy & Reflect", content: "...", quizId: "js-mq4" },
  { id: "js-m5", title: "Symbols & Metadata", content: "...", quizId: "js-mq5" },
  { id: "js-m6", title: "Iterators & Generators", content: "...", quizId: "js-mq6" },
  { id: "js-m7", title: "Modern Classes Internals", content: "...", quizId: "js-mq7" },
  l8,
  { id: "js-m9", title: "Web Workers & Parallelism", content: "...", quizId: "js-mq9" },
  { id: "js-m10", title: "Promise States & Internals", content: "...", quizId: "js-mq10" },
  { id: "js-m11", title: "MessageChannel API", content: "...", quizId: "js-mq11" },
  { id: "js-m12", title: "SharedArrayBuffer & Atomics", content: "...", quizId: "js-mq12" },
  { id: "js-m13", title: "Scheduling: requestIdleCallback", content: "...", quizId: "js-mq13" },
  { id: "js-m14", title: "Async Error Propagation", content: "...", quizId: "js-mq14" },
  l15,
  { id: "js-m16", title: "V8 Garbage Collection: Orinoco", content: "...", quizId: "js-mq16" },
  { id: "js-m17", title: "Ignition Interpreter", content: "...", quizId: "js-mq17" },
  { id: "js-m18", title: "TurboFan JIT Compiler", content: "...", quizId: "js-mq18" },
  { id: "js-m19", title: "Memory Leaks & Profiling", content: "...", quizId: "js-mq19" },
  { id: "js-m20", title: "WebAssembly Interop", content: "...", quizId: "js-mq20" },
  { id: "js-m21", title: "JS Engine Future: Signals", content: "...", quizId: "js-mq21" }
];