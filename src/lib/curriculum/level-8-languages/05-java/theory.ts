
import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-jvm-architecture';
import { lesson as l2 } from './theory/02-garbage-collection';
import { lesson as l3 } from './theory/03-virtual-threads';
import { lesson as l4 } from './theory/04-oop-advanced';
import { lesson as l6 } from './theory/06-transactions-acid-deep';
import { lesson as l8 } from './theory/08-virtual-threads';
import { lesson as l11 } from './theory/11-jmm-internals';
import { lesson as l15 } from './theory/15-classloaders';
import { lesson as l21 } from './theory/21-graalvm-native';

const javaTitles = [
  "Fase 1: JVM Architecture, JIT e Tiered Compilation",
  "Fase 1: Garbage Collection: G1GC e Tuning de Memória",
  "Fase 1: Project Loom: Virtual Threads e Escala",
  "Fase 1: Java Moderno: Records e Sealed Classes",
  "Fase 2: Generics, Wildcards e Type Erasure",
  "Fase 2: Transações e Propriedades ACID",
  "Fase 2: Java NIO: Buffers, Channels e Selectors",
  "Fase 2: Concorrência: Locks, Mutex e Atomics",
  "Fase 2: JMX: Monitorização e Gestão de MBeans",
  "Fase 3: Paradigma Reativo: Flux e Mono (Reactor)",
  "Fase 3: JMM Internals: Visibilidade e Volatile",
  "Fase 3: Spring Security: Autenticação JWT e RBAC",
  "Fase 3: Resiliência: Circuit Breakers e Retries",
  "Fase 3: Testes de Integração com Testcontainers",
  "Fase 4: JVM ClassLoaders e Isolamento de Código",
  "Fase 4: Memória Off-heap e DirectBuffers",
  "Fase 4: GraalVM: Compilação Nativa e Reflexão",
  "Fase 4: Hierarquias Seladas e ADTs em Java",
  "Fase 4: Project Panama: Foreign Function Interface",
  "Fase 4: Low-Latency Tuning com ZGC",
  "Fase 4: Capstone: Deploy de Core Banking de Elite"
];

const sourceMap: Record<number, any> = {
  0: l1, 1: l2, 2: l3, 3: l4, 5: l6, 7: l8, 10: l11, 14: l15, 20: l21
};

export const lessons: TheoryLesson[] = javaTitles.map((title, i) => {
  if (sourceMap[i]) {
    return {
      ...sourceMap[i],
      id: `jv-m${i + 1}`,
      title: title,
      quizId: `jv-mq${i + 1}`,
      enableInteractive: true
    };
  }

  return {
    id: `jv-m${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>☕ Java Master: ${title}</h2><p>Estudo aprofundado da JVM e de arquiteturas corporativas de alta disponibilidade.</p></div>`,
    quizId: `jv-mq${i + 1}`,
    enableInteractive: true
  };
});
