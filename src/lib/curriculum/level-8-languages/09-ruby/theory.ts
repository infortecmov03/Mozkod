import { lesson as l1 } from './theory/01-blocks-procs-lambdas';
import { lesson as l2 } from './theory/02-everything-is-object';
import { lesson as l8 } from './theory/08-fibers-concurrency';
import { lesson as l9 } from './theory/09-ractors-parallelism';
import { lesson as l15 } from './theory/15-singleton-classes';

export const lessons = [
  l1, l2,
  { id: "rb-m3", title: "Mixins & Modules", content: "...", quizId: "rb-mq3" },
  { id: "rb-m4", title: "Message Passing", content: "...", quizId: "rb-mq4" },
  { id: "rb-m5", title: "DSL Patterns", content: "...", quizId: "rb-mq5" },
  { id: "rb-m6", title: "Enumerable Deep Dive", content: "...", quizId: "rb-mq6" },
  { id: "rb-m7", title: "Ruby Philosophy", content: "...", quizId: "rb-mq7" },
  l8, l9,
  { id: "rb-m10", title: "GVL Internals", content: "...", quizId: "rb-mq10" },
  { id: "rb-m11", title: "YJIT Engine", content: "...", quizId: "rb-mq11" },
  { id: "rb-m12", title: "Memory Profiling", content: "...", quizId: "rb-mq12" },
  { id: "rb-m13", title: "Compacting GC", content: "...", quizId: "rb-mq13" },
  { id: "rb-m14", title: "Benchmarking", content: "...", quizId: "rb-mq14" },
  l15,
  { id: "rb-m16", title: "method_missing", content: "...", quizId: "rb-mq16" },
  { id: "rb-m17", title: "Refinements", content: "...", quizId: "rb-mq17" },
  { id: "rb-m18", title: "C-Extensions", content: "...", quizId: "rb-mq18" },
  { id: "rb-m19", title: "AST & Parsing", content: "...", quizId: "rb-mq19" },
  { id: "rb-m20", title: "ActiveSupport Internals", content: "...", quizId: "rb-mq20" },
  { id: "rb-m21", title: "Sorbet & Static Ruby", content: "...", quizId: "rb-mq21" }
];