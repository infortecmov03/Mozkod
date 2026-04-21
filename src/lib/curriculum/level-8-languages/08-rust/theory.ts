
import type { TheoryLesson } from '../../types';

const rustTitles = [
  "Fase 1: Ownership System e Regras de Posse",
  "Fase 1: Borrowing, Referências e Lifetimes",
  "Fase 1: Tipos de Dados, Enums e Pattern Matching",
  "Fase 2: Collections: Vec, String e HashMap",
  "Fase 2: Iteradores: Abstrações de Custo Zero",
  "Fase 2: Traits: Implementação e Derives",
  "Fase 2: Error Handling: Result, Option e o operador ?",
  "Fase 2: Generics e Const Generics",
  "Fase 3: Smart Pointers: Box, Rc e Arc",
  "Fase 3: Interior Mutability: RefCell e Cell",
  "Fase 3: Concorrência: Threads e Message Passing",
  "Fase 3: Shared State Concurrency (Mutex/RwLock)",
  "Fase 3: Async/Await e o Runtime Tokio",
  "Fase 3: Unsafe Rust e FFI (C Interop)",
  "Fase 3: Macros Declarativas (macro_rules!)",
  "Fase 3: Procedural Macros e Custom Derives",
  "Fase 4: Web Development com Actix e Rocket",
  "Fase 4: Systems Programming e WebAssembly",
  "Fase 4: CLI Tools com Clap e Performance",
  "Fase 4: Network Programming: TCP e QUIC",
  "Fase 4: Capstone: Deploy de Key-Value Store"
];

export const lessons: TheoryLesson[] = rustTitles.map((title, i) => ({
  id: `rs-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🦀 Rust Master: ${title}</h2><p>Segurança total de memória e performance de nível de sistema.</p></div>`,
  quizId: `rs-mq${i + 1}`
}));
