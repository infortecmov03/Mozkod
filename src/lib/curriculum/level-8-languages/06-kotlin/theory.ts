import { lesson as l1 } from './theory/01-null-safety-internals';
import { lesson as l2 } from './theory/02-extensions-delegates';

const titles = [
  "Coroutines: Suspension Points", "Structured Concurrency & Scopes",
  "Flows: Cold vs Hot Streams", "Channels & Inter-process Comm", "Kotlin Multiplatform (KMP) Arch",
  "KSP: Symbol Processing Master", "K2 Compiler Architecture", "Compose Internals & Recomposition",
  "Inline Classes & Value Types", "Sealed Interfaces & ADTs", "Generics: Reified & Variance",
  "DSL Construction Patterns", "Testing: MockK & Coroutine Test", "Memory: JVM vs Native GC",
  "Reflection & Metadata API", "Java Interop: Bytecode Analysis", "Gradle Kotlin DSL & Tooling",
  "Serialization & ProtoBuf", "Capstone: Cloud Native Kotlin"
];

export const lessons = [
  l1, l2,
  ...titles.map((title, i) => ({
    id: `kt-m${i + 3}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🚀 Kotlin Master: ${title}</h2><p>Especialização técnica em desenvolvimento moderno e multiplataforma.</p></div>`,
    quizId: `kt-mq${i + 3}`
  }))
];