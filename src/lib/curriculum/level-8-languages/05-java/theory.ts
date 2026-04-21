
import type { TheoryLesson } from '../../types';

const javaTitles = [
  "Fase 1: Sintaxe, Tipos e Controle de Fluxo",
  "Fase 1: Arrays, StringBuilder e Métodos",
  "Fase 2: POO - Encapsulamento e Herança",
  "Fase 2: Polimorfismo e Abstração",
  "Fase 2: Interfaces e Enums Modernos",
  "Fase 2: Records (Java 14+) e Sealed Classes (Java 17+)",
  "Fase 3: Collections Framework Deep Dive",
  "Fase 3: Generics e Type Erasure",
  "Fase 3: Exceptions e Try-with-resources",
  "Fase 3: Streams API e Lambdas (Programação Funcional)",
  "Fase 4: Concorrência, Threads e Locks",
  "Fase 4: CompletableFuture e Executores",
  "Fase 4: Java I/O vs NIO (Channels & Buffers)",
  "Fase 4: Reflection e Runtime Annotations",
  "Fase 4: JVM Internals: GC (G1/ZGC) e JIT",
  "Fase 5: Spring Core (IoC e DI)",
  "Fase 5: Spring Boot e Persistence (JPA/Hibernate)",
  "Fase 5: Spring Security (JWT e OAuth2)",
  "Fase 5: Microserviços e Spring Cloud",
  "Fase 5: Testing: JUnit 5, Mockito e Testcontainers",
  "Fase 5: Capstone: Deploy de Sistema Bancário de Elite"
];

export const lessons: TheoryLesson[] = javaTitles.map((title, i) => ({
  id: `jv-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>☕ Java Master: ${title}</h2><p>Domínio da linguagem que move o mundo enterprise, focado em performance, escala e robustez.</p></div>`,
  quizId: `jv-mq${i + 1}`
}));
