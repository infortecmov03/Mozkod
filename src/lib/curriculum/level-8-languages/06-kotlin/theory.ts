
import { lesson as l1 } from './theory/01-null-safety-engine';
import { lesson as l8 } from './theory/08-coroutines-suspension';
import { lesson as l15 } from './theory/15-compiler-plugins-ksp';

export const lessons = [
  l1,
  { id: "kt-m2", title: "Extension Functions & Properties", content: "...", quizId: "kt-mq2" },
  { id: "kt-m3", title: "DSL Construction", content: "...", quizId: "kt-mq3" },
  { id: "kt-m4", title: "Delegation Pattern", content: "...", quizId: "kt-mq4" },
  { id: "kt-m5", title: "Sealed Interfaces & Pattern Matching", content: "...", quizId: "kt-mq5" },
  { id: "kt-m6", title: "Inline Classes & Value Types", content: "...", quizId: "kt-mq6" },
  { id: "kt-m7", title: "Generics: Reified & Variance", content: "...", quizId: "kt-mq7" },
  l8,
  { id: "kt-m9", title: "Structured Concurrency", content: "...", quizId: "kt-mq9" },
  { id: "kt-m10", title: "Flows & Reactive Streams", content: "...", quizId: "kt-mq10" },
  { id: "kt-m11", title: "Channels & Select", content: "...", quizId: "kt-mq11" },
  { id: "kt-m12", title: "Shared Mutable State & Mutex", content: "...", quizId: "kt-mq12" },
  { id: "kt-m13", title: "Testing Coroutines", content: "...", quizId: "kt-mq13" },
  { id: "kt-m14", title: "KMP Concurrency", content: "...", quizId: "kt-mq14" },
  l15,
  { id: "kt-m16", title: "Kotlin Compiler (K2) Internals", content: "...", quizId: "kt-mq16" },
  { id: "kt-m17", title: "Bytecode Optimization", content: "...", quizId: "kt-mq17" },
  { id: "kt-m18", title: "Reflection vs Metadata", content: "...", quizId: "kt-mq18" },
  { id: "kt-m19", title: "Compose Compiler Internals", content: "...", quizId: "kt-mq19" },
  { id: "kt-m20", title: "Serialization Internals", content: "...", quizId: "kt-mq20" },
  { id: "kt-m21", title: "GraalVM Native with Kotlin", content: "...", quizId: "kt-mq21" }
];
