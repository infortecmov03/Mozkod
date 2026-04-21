
import { lesson as l1 } from './theory/01-null-safety-internals';
import { lesson as l2 } from './theory/02-extensions-delegates';
import { lesson as l8 } from './theory/08-coroutines-suspension';
import { lesson as l15 } from './theory/15-compiler-plugins-ksp';

export const lessons = [
  l1, l2,
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `kt-m${i + 3}`,
    title: ["Structured Concurrency", "Flows: Cold vs Hot", "Channels IPC", "Kotlin Multiplatform (KMP)", "Inline Classes"][i],
    content: "<p>Desenvolvimento moderno com Kotlin.</p>",
    quizId: `kt-mq${i + 3}`
  })),
  l8,
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `kt-m${i + 9}`,
    title: ["K2 Compiler Architecture", "Compose Internals", "Sealed Interfaces", "Generics: Reified", "DSL Construction", "MockK Patterns"][i],
    content: "<p>Engenharia de software de elite.</p>",
    quizId: `kt-mq${i + 9}`
  })),
  l15,
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `kt-m${i + 16}`,
    title: ["Memory: JVM vs Native", "Reflection API", "Java Interop Analysis", "Gradle DSL", "Serialization", "Capstone Milestone"][i],
    content: "<p>Domínio total do ecossistema Kotlin.</p>",
    quizId: `kt-mq${i + 16}`
  }))
];
