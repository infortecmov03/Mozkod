import { lesson as l1 } from './theory/01-jvm-architecture';

export const lessons = [
  l1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `jv-m${i + 2}`,
    title: [
      "Garbage Collection Tuning (ZGC & G1)", "Project Loom: Virtual Threads",
      "Spring Boot 3 & GraalVM Native", "Hibernate Performance & L2 Cache",
      "Java Memory Model (JMM) Profundo", "Reactive Streams com Project Reactor",
      "Security: JWT & OAuth2 Internals", "Microserviços com Spring Cloud",
      "Kubernetes para Desenvolvedores Java", "Testing: JUnit 5 & Testcontainers",
      "Bytecode Manipulation com ASM", "Reflexão e MethodHandles",
      "Design Patterns Modernos em Java", "Gestão de Memória Off-heap",
      "NIO & Netty Architecture", "API Design com OpenApi 3",
      "Observabilidade: Micrometer & Prometheus", "Arquitetura Hexagonal em Java",
      "Concurrency: Locks, Atomics e Mutexes", "Capstone: Deploy de Sistema Bancário"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>☕ Java Master: Engenharia de Sistemas</h2><p>Foco em arquitetura corporativa, performance de runtime e sistemas distribuídos.</p></div>`,
    quizId: `jv-mq${i + 2}`
  }))
];