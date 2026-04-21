import { lesson as l1 } from './theory/01-null-safety-internals';

export const lessons = [
  l1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `kt-m${i + 2}`,
    title: [
      "Extension Functions & Property Delegates", "Coroutines: Suspension Points", "Structured Concurrency & Scopes",
      "Flows: Cold vs Hot Streams", "Channels & Inter-process Comm", "Kotlin Multiplatform (KMP) Arch",
      "KSP: Symbol Processing Master", "K2 Compiler Architecture", "Compose Internals & Recomposition",
      "Inline Classes & Value Types", "Sealed Interfaces & ADTs", "Generics: Reified & Variance",
      "DSL Construction Patterns", "Testing: MockK & Coroutine Test", "Memory: JVM vs Native GC",
      "Reflection & Metadata API", "Java Interop: Bytecode Analysis", "Gradle Kotlin DSL & Tooling",
      "Serialization & ProtoBuf", "Capstone: Cloud Native Kotlin"
    ][i],
    content: "<p>Especialização técnica em Kotlin Moderno.</p>",
    quizId: `kt-mq${i + 2}`
  }))
];
