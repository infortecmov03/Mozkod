import { lesson as l1 } from './theory/01-ownership-master';
import { lesson as l2 } from './theory/02-borrow-checker-lifetimes';

const titles = [
  "Smart Pointers: Box, Rc, Arc, RefCell", "Concurrency: Fearless Multithreading",
  "Traits & Generic Metaprogramming", "Macro System: Declarative vs Procedural", "Async/Await & Futures Internals",
  "Tokio Runtime & Non-blocking I/O", "Unsafe Rust & FFI Boundaries", "Memory Layout & Data Alignment",
  "Error Handling: Result & Error Trait", "Pattern Matching & Exhaustiveness", "Building WASM with Rust",
  "Compiler: MIR, HIR and LLVM IR", "Zero-cost Abstractions Analysis", "Optimization: LTO & SIMD",
  "Cargo Internals & Dependency Graph", "Design Patterns: Typestate & Newtype", "Embedded Rust & Bare Metal",
  "Security: Auditing & Sanity Checks", "Capstone: Zero-GC Storage Engine"
];

export const lessons = [
  l1, l2,
  ...titles.map((title, i) => ({
    id: `rs-m${i + 3}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🦀 Rust Master: ${title}</h2><p>Sistemas críticos com foco em segurança de memória e performance extrema.</p></div>`,
    quizId: `rs-mq${i + 3}`
  }))
];