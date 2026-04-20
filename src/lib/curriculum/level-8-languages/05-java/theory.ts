
import { lesson as l1 } from './theory/01-jvm-internals';

export const lessons = [
  l1,
  { id: "jv-m2", title: "Garbage Collection Tuning", content: "<p>Deep dive nos algoritmos G1, ZGC e Shenandoah.</p>", quizId: "jv-mq2" },
  { id: "jv-m3", title: "Multithreading & Virtual Threads", content: "<p>Project Loom e a nova era da concorrência em Java.</p>", quizId: "jv-mq3" },
  { id: "jv-m4", title: "Spring Boot 3 Architecture", content: "<p>Injeção de dependências, AOP e Auto-configuration.</p>", quizId: "jv-mq4" },
  { id: "jv-m5", title: "Hibernate & JPA Performance", content: "<p>Otimização de queries, cache de Nível 2 e Lazy Loading.</p>", quizId: "jv-mq5" },
  { id: "jv-m6", title: "Reactive Java (Project Reactor)", content: "<p>Programação não-bloqueante com Mono e Flux.</p>", quizId: "jv-mq6" },
  { id: "jv-m7", title: "Microservices com Spring Cloud", content: "<p>Service Discovery, Gateway e Circuit Breakers.</p>", quizId: "jv-mq7" },
  { id: "jv-m8", title: "Security & OAuth2", content: "<p>Implementação de JWT e fluxos seguros com Spring Security.</p>", quizId: "jv-mq8" },
  { id: "jv-m9", title: "Native Java com GraalVM", content: "<p>Compilação AOT para imagens nativas ultra-rápidas.</p>", quizId: "jv-mq9" },
  { 
    id: "jv-m10", 
    title: "Projeto Final: Micro-serviço e Deploy Railway", 
    youtubeVideoId: "rXc_A7G43m0",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🏗️ Java Enterprise Master</h2>
        <p>Cria uma API REST robusta com Spring Boot e faz o deploy no <strong>Railway</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-orange-500">1. Maven & GitHub</h3>
          <p class="text-sm">Configura o pom.xml e sobe o código para o GitHub.</p>
          <h3 class="font-bold text-orange-500">2. Dockerization</h3>
          <p class="text-sm">Cria um Dockerfile multi-stage para otimizar o tamanho da imagem.</p>
          <h3 class="font-bold text-orange-500">3. Deploy Railway</h3>
          <p class="text-sm">Conecta o repo ao Railway e configura a base de dados PostgreSQL.</p>
        </div>
      </div>
    `, 
    quizId: "jv-mq10" 
  }
];
