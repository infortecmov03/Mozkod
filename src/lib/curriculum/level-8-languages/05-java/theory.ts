
import { lesson as l1 } from './theory/01-jvm-architecture';
import { lesson as l2 } from './theory/02-garbage-collection';
import { lesson as l3 } from './theory/03-virtual-threads';
import { lesson as l11 } from './theory/11-jmm-internals';

export const lessons = [
  l1, l2, l3,
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `jv-m${i + 4}`,
    title: [
      "Spring Boot 3 & GraalVM Native", "Hibernate Performance & L2 Cache",
      "Reactive Streams com Project Reactor", "Security: JWT & OAuth2 Internals",
      "Microserviços com Spring Cloud", "Kubernetes para Desenvolvedores Java",
      "Testing: JUnit 5 & Testcontainers"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>☕ Java Master: Especialização Técnica</h2><p>Tópico avançado sobre arquitetura corporativa e sistemas distribuídos.</p></div>`,
    quizId: `jv-mq${i + 4}`
  })),
  l11,
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `jv-m${i + 12}`,
    title: [
      "Bytecode Manipulation com ASM", "Reflexão e MethodHandles",
      "Design Patterns Modernos em Java", "Gestão de Memória Off-heap",
      "NIO & Netty Architecture", "API Design com OpenApi 3",
      "Observabilidade: Micrometer & Prometheus", "Arquitetura Hexagonal em Java",
      "Concurrency: Locks, Atomics e Mutexes", "Capstone: Deploy de Sistema Bancário"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>☕ Java Master: Engenharia de Baixo Nível</h2><p>Foco em performance de runtime e manipulação de recursos do sistema.</p></div>`,
    quizId: `jv-mq${i + 12}`
  }))
];
