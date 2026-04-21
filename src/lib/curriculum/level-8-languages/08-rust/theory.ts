
import { lesson as l1 } from './theory/01-ownership-master';
import { lesson as l2 } from './theory/02-borrow-checker-lifetimes';
import { lesson as l3 } from './theory/03-lifetimes-variance';
import { lesson as l8 } from './theory/08-async-await-wakers';
import { lesson as l15 } from './theory/15-mir-compilation';

export const lessons = [
  l1, l2, l3,
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `rs-m${i + 4}`,
    title: ["Smart Pointers (Box/Rc/Arc)", "Traits & Static Dispatch", "Macro System", "Fearless Concurrency"][i],
    content: "<p>Engenharia de sistemas com Rust.</p>",
    quizId: `rs-mq${i + 4}`
  })),
  l8,
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `rs-m${i + 9}`,
    title: ["Tokio Runtime", "Unsafe Rust", "Memory Layout", "Error Handling (Result/Error)", "Pattern Matching", "WASM with Rust"][i],
    content: "<p>Especialização técnica profunda.</p>",
    quizId: `rs-mq${i + 9}`
  })),
  l15,
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `rs-m${i + 16}`,
    title: ["Zero-cost Abstractions", "Optimization: LTO", "Cargo Internals", "Bare Metal Rust", "Auditing & Security", "Capstone Milestone"][i],
    content: "<p>O 1% da engenharia global.</p>",
    quizId: `rs-mq${i + 16}`
  }))
];
