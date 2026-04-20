import { lesson as l1 } from './theory/01-jvm-architecture';
import { lesson as l2 } from './theory/02-garbage-collection';
import { lesson as l3 } from './theory/03-virtual-threads';
import { lesson as l11 } from './theory/11-jmm-internals';
import { lesson as l21 } from './theory/21-graalvm-native';

export const lessons = [
  l1, l2, l3,
  { id: "jv-m4", title: "Records & Pattern Matching", content: "...", quizId: "jv-mq4" },
  { id: "jv-m5", title: "Spring Boot 3 Internals", content: "...", quizId: "jv-mq5" },
  { id: "jv-m6", title: "Hibernate Performance", content: "...", quizId: "jv-mq6" },
  { id: "jv-m7", title: "Maven/Gradle Build Internals", content: "...", quizId: "jv-mq7" },
  { id: "jv-m8", title: "Structured Concurrency", content: "...", quizId: "jv-mq8" },
  { id: "jv-m9", title: "Atomic Classes & CAS", content: "...", quizId: "jv-mq9" },
  { id: "jv-m10", title: "Project Reactor (Reactive)", content: "...", quizId: "jv-mq10" },
  l11,
  { id: "jv-m12", title: "Advanced Locking (Reentrant)", content: "...", quizId: "jv-mq12" },
  { id: "jv-m13", title: "NIO & Netty Architecture", content: "...", quizId: "jv-mq13" },
  { id: "jv-m14", title: "Bytecode ASM Instrumentation", content: "...", quizId: "jv-mq14" },
  { id: "jv-m15", title: "Reflection & MethodHandles", content: "...", quizId: "jv-mq15" },
  { id: "jv-m16", title: "Dynamic Proxies & AOP", content: "...", quizId: "jv-mq16" },
  { id: "jv-m17", title: "ClassLoaders & Modules", content: "...", quizId: "jv-mq17" },
  { id: "jv-m18", title: "JIT Tiered Compilation", content: "...", quizId: "jv-mq18" },
  { id: "jv-m19", title: "JVM Profiling (JFR)", content: "...", quizId: "jv-mq19" },
  { id: "jv-m20", title: "Kubernetes Java Tuning", content: "...", quizId: "jv-mq20" },
  l21
];