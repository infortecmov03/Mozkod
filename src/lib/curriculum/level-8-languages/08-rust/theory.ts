
import type { TheoryLesson } from '../../types';

const rustTitles = [
  // FASE 1: Fundamentos (1-4)
  "Fase 1: Ownership System: As Regras de Posse de Memória",
  "Fase 1: Borrowing, Referências e o Vigilante (Borrow Checker)",
  "Fase 1: Lifetimes: Garantindo a Validade das Referências",
  "Fase 1: Structs, Enums e Pattern Matching Poderoso",
  
  // FASE 2: Intermediário (5-9)
  "Fase 2: Collections de Elite: Vec, String e HashMap",
  "Fase 2: Iteradores: Abstrações de Custo Zero (Zero-cost)",
  "Fase 2: Traits: O Sistema de Interfaces e Derives",
  "Fase 2: Error Handling: Result, Option e o Operador ?",
  "Fase 2: Generics, Monomorphization e Const Generics",
  
  // FASE 3: Avançado (10-16)
  "Fase 3: Smart Pointers: Box, Rc, Arc e Mutabilidade Interior",
  "Fase 3: Concorrência Segura: Threads e Message Passing",
  "Fase 3: Async/Await e o Ecossistema do Runtime Tokio",
  "Fase 3: Unsafe Rust: Fronteiras, FFI e Raw Pointers",
  "Fase 3: Macros Declarativas (macro_rules!) de Alta Escala",
  "Fase 3: Procedural Macros: Atributos e Custom Derives",
  "Fase 3: Rust Internals: MIR, LLVM e Layout de Memória",
  
  // FASE 4: Especialização (17-21)
  "Fase 4: Web Dev de Alta Performance: Actix e Rocket",
  "Fase 4: Systems Programming: Embedded Rust e WASM",
  "Fase 4: CLI Tools de Elite com Clap e Serde",
  "Fase 4: Network Programming: TCP, QUIC e gRPC (Tonic)",
  "Fase 4: Capstone: Deploy de High-Perf Storage Engine"
];

export const lessons: TheoryLesson[] = rustTitles.map((title, i) => ({
  id: `rs-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🦀 Rust Master: ${title}</h2><p>Explore a segurança absoluta de memória e a performance de nível de sistema sem compromissos.</p></div>`,
  quizId: `rs-mq${i + 1}`
}));
