
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  // PILAR 1: Paradigma e Expressividade (01-07)
  { id: "jv-m1", title: "Modern Java: Records e Sealed Classes", content: "Modelagem de dados imutáveis e hierarquias restritas.", quizId: "jv-mq1" },
  { id: "jv-m2", title: "Pattern Matching para Instância e Switch", content: "Reduzindo verbosidade com extração de dados inteligente.", quizId: "jv-mq2" },
  { id: "jv-m3", title: "Functional Interfaces e Lambda Internals", content: "Como o Java implementa funções anónimas sob o capô.", quizId: "jv-mq3" },
  { id: "jv-m4", title: "Streams Paralelos e Performance", content: "Processamento de coleções massivas em múltiplos cores.", quizId: "jv-mq4" },
  { id: "jv-m5", title: "Optional e Null Safety", content: "Estratégias de engenharia para evitar NullPointerException.", quizId: "jv-mq5" },
  { id: "jv-m6", title: "Generics e Type Erasure", content: "Entendendo os limites da tipagem genérica em Java.", quizId: "jv-mq6" },
  { id: "jv-m7", title: "Modular System (Project Jigsaw)", content: "Encapsulamento forte para sistemas de larga escala.", quizId: "jv-mq7" },

  // PILAR 2: Concorrência e Performance (08-14)
  { id: "jv-m8", title: "Project Loom: Virtual Threads", content: "Milhões de threads com custo mínimo: a nova era do Java.", quizId: "jv-mq8" },
  { id: "jv-m9", title: "Structured Concurrency", content: "Gestão segura de tarefas assíncronas pai-filho.", quizId: "jv-mq9" },
  { id: "jv-m10", title: "Garbage Collection Deep Dive: G1 e ZGC", content: "Configuração e tuning de coletores para latência ultra-baixa.", quizId: "jv-mq10" },
  { id: "jv-m11", title: "Java Memory Model (JMM)", content: "Happens-before, visibilidade e barreiras de memória.", quizId: "jv-mq11" },
  { id: "jv-m12", title: "Non-blocking I/O (NIO.2)", content: "Comunicação assíncrona com canais e buffers.", quizId: "jv-mq12" },
  { id: "jv-m13", title: "Atomic Variables e Locks de Baixo Nível", content: "Sincronização eficiente sem bloqueios pesados.", quizId: "jv-mq13" },
  { id: "jv-m14", title: "JMH: Microbenchmarking de Precisão", content: "Como medir performance real evitando otimizações do JIT.", quizId: "jv-mq14" },

  // PILAR 3: Internals e Metaprogramação (15-21)
  { id: "jv-m15", title: "JVM Bytecode e JIT Compiler", content: "Otimizações em tempo de execução: Inlining e Escape Analysis.", quizId: "jv-mq15" },
  { id: "jv-m16", title: "ClassLoaders e Dinamismo", content: "Carregamento de classes em runtime e isolamento de dependências.", quizId: "jv-mq16" },
  { id: "jv-m17", title: "Java Reflection API de Alta Performance", content: "Uso de MethodHandles e VarHandles para reflexão rápida.", quizId: "jv-mq17" },
  { id: "jv-m18", title: "Annotation Processing em Compile-time", content: "Geração de código automática (Lombok, MapStruct).", quizId: "jv-mq18" },
  { id: "jv-m19", title: "Bytecode Instrumentation (ASM/ByteBuddy)", content: "Modificação de classes em tempo real para APMs e Profilers.", quizId: "jv-mq19" },
  { id: "jv-m20", title: "Project Panama: FFI e Vetores", content: "Ligação segura com código C e instruções SIMD nativas.", quizId: "jv-mq20" },
  { id: "jv-m21", title: "Projeto Final: Master Cloud API", content: "Microserviço reativo de alta escala com deploy em Railway.", quizId: "jv-mq21" }
];
