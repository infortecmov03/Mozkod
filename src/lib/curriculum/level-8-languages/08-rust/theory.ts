import { lesson as l1 } from './theory/01-ownership-master';

export const lessons = [
  l1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `rs-m${i + 2}`,
    title: [
      "Borrow Checker & Lifetimes Deep Dive", "Smart Pointers: Box, Rc, Arc, RefCell", "Concurrency: Fearless Multithreading",
      "Traits & Generic Metaprogramming", "Macro System: Declarative vs Procedural", "Async/Await & Futures Internals",
      "Tokio Runtime & Non-blocking I/O", "Unsafe Rust & FFI Boundaries", "Memory Layout & Data Alignment",
      "Error Handling: Result & Error Trait", "Pattern Matching & Exhaustiveness", "Building WASM with Rust",
      "Compiler: MIR, HIR and LLVM IR", "Zero-cost Abstractions Analysis", "Optimization: LTO & SIMD",
      "Cargo Internals & Dependency Graph", "Design Patterns: Typestate & Newtype", "Embedded Rust & Bare Metal",
      "Security: Auditing & Sanity Checks", "Capstone: Zero-GC Storage Engine"
    ][i],
    content: "<p>Sistemas Críticos com Rust.</p>",
    quizId: `rs-mq${i + 2}`
  }))
];
