
import { lesson as l1 } from './theory/01-records';
import { lesson as l8 } from './theory/08-virtual-threads';
import { lesson as l15 } from './theory/15-classloaders';

// Continuaremos a preencher os 21 temas conforme criados
export const lessons = [
  l1, 
  // ... mock lessons para completar os 21 e evitar erros de índice
  { id: "jv-m2", title: "Sealed Classes", content: "...", quizId: "jv-mq2" },
  { id: "jv-m3", title: "Pattern Matching", content: "...", quizId: "jv-mq3" },
  { id: "jv-m4", title: "Stream Internals", content: "...", quizId: "jv-mq4" },
  { id: "jv-m5", title: "Optional Patterns", content: "...", quizId: "jv-mq5" },
  { id: "jv-m6", title: "Lambda Internals", content: "...", quizId: "jv-mq6" },
  { id: "jv-m7", title: "Jigsaw", content: "...", quizId: "jv-mq7" },
  l8,
  { id: "jv-m9", title: "Structured Concurrency", content: "...", quizId: "jv-mq9" },
  { id: "jv-m10", title: "JMM", content: "...", quizId: "jv-mq10" },
  { id: "jv-m11", title: "Advanced Locking", content: "...", quizId: "jv-mq11" },
  { id: "jv-m12", title: "GC Tuning", content: "...", quizId: "jv-mq12" },
  { id: "jv-m13", title: "Reactive Reactor", content: "...", quizId: "jv-mq13" },
  { id: "jv-m14", title: "NIO Netty", content: "...", quizId: "jv-mq14" },
  l15,
  { id: "jv-m16", title: "Bytecode ASM", content: "...", quizId: "jv-mq16" },
  { id: "jv-m17", title: "Reflection MethodHandles", content: "...", quizId: "jv-mq17" },
  { id: "jv-m18", title: "Dynamic Proxies", content: "...", quizId: "jv-mq18" },
  { id: "jv-m19", title: "JIT Tiered Compilation", content: "...", quizId: "jv-mq19" },
  { id: "jv-m20", title: "JVM Profiling JFR", content: "...", quizId: "jv-mq20" },
  { id: "jv-m21", title: "GraalVM Native", content: "...", quizId: "jv-mq21" }
];
