
import { lesson as l1 } from './theory/01-jvm-architecture';
import { lesson as l2 } from './theory/02-garbage-collection';
import { lesson as l3 } from './theory/03-virtual-threads';

const javaTitles = [
  // FASE 1: Fundamentos
  "Fase 1: Sintaxe, Primitivos e Controle de Fluxo",
  "Fase 1: Arrays e Strings (StringBuilder)",
  "Fase 1: Métodos, Sobrecarga e Pacotes",
  
  // FASE 2: POO
  "Fase 2: POO: Encapsulamento e Herança",
  "Fase 2: Polimorfismo e Abstração",
  "Fase 2: Interfaces e Enums",
  "Fase 2: Records (Java 14+) e Sealed Classes (Java 17+)",
  
  // FASE 3: Intermediário
  "Fase 3: Collections Framework Deep Dive",
  "Fase 3: Generics e Type Erasure",
  "Fase 3: Exceptions e Try-with-resources",
  "Fase 3: Streams API e Lambdas (Funcional)",
  
  // FASE 4: Avançado
  "Fase 4: Concorrência e Threads Tradicionais",
  "Fase 4: CompletableFuture e Executores",
  "Fase 4: Java I/O vs NIO (Buffers & Channels)",
  "Fase 4: Reflection e Runtime Annotations",
  "Fase 4: JVM Internals: GC e JIT Tuning",
  
  // FASE 5: Enterprise
  "Fase 5: Spring Boot 3 e Injeção de Dependência",
  "Fase 5: Persistência com JPA/Hibernate",
  "Fase 5: Segurança com JWT e OAuth2",
  "Fase 5: Microserviços e Spring Cloud",
  "Fase 5: Capstone: Deploy de Core Banking de Elite"
];

export const lessons = javaTitles.map((title, i) => {
  let baseLesson;
  if (i === 0) baseLesson = l1;
  else if (i === 15) baseLesson = l2;
  else if (i === 12) baseLesson = l3;
  else {
    baseLesson = {
      content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>☕ Java Master: ${title}</h2><p>Estudo aprofundado seguindo os padrões da indústria enterprise global.</p></div>`,
    };
  }

  return {
    ...baseLesson,
    id: `jv-m${i + 1}`,
    title: title,
    quizId: `jv-mq${i + 1}`
  };
});
