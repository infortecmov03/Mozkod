
import { lesson as l1 } from './theory/01-jvm-architecture';
import { lesson as l2 } from './theory/02-garbage-collection';
import { lesson as l3 } from './theory/03-virtual-threads';
import { lesson as l11 } from './theory/11-jmm-internals';
import { lesson as l21 } from './theory/21-graalvm-native';

const javaRemainingTitles = [
  "Records & Pattern Matching (Data-Oriented)", "Spring Boot 3 Internals", 
  "Hibernate Performance & L2 Cache", "Maven vs Gradle Build Internals",
  "Structured Concurrency (JEP 453)", "Atomic Classes & Lock-free Algorithms", 
  "Project Reactor & Reactive Streams", "Advanced Locking (Reentrant/ReadWrite)", 
  "NIO & Netty Event Loop Architecture", "Bytecode Instrumentation with ASM", 
  "Reflection & MethodHandles Performance", "Dynamic Proxies & AOP Internals",
  "ClassLoaders & Java Modules (Project Jigsaw)", "JIT Tiered Compilation Deep Dive", 
  "JVM Profiling with JFR", "Kubernetes Java Tuning & Sizing"
];

export const lessons = [
  l1, l2, l3,
  ...javaRemainingTitles.slice(0, 7).map((title, i) => ({
    id: `jv-m${i + 4}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>☕ Java Master: ${title}</h2><p>Engenharia de sistemas corporativos, otimização de runtime e concorrência moderna no ecossistema Java.</p></div>`,
    quizId: `jv-mq${i + 4}`
  })),
  l11,
  ...javaRemainingTitles.slice(7).map((title, i) => ({
    id: `jv-m${i + 12}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>☕ Java Master: ${title}</h2><p>Tópicos avançados de internals da JVM e padrões arquiteturais para alta disponibilidade.</p></div>`,
    quizId: `jv-mq${i + 12}`
  })),
  l21
];
