import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  // PILAR 1: Paradigma e Expressividade
  { id: "rs-m1", title: "Ownership & Borrowing Deep Dive", content: "A alma do Rust: como garantir segurança sem GC.", quizId: "rs-mq1" },
  { id: "rs-m2", title: "Lifetimes and Variance", content: "Entendendo como o compilador valida referências no tempo.", quizId: "rs-mq2" },
  { id: "rs-m3", title: "Trait System & Orphan Rules", content: "Polimorfismo e abstração de comportamento poderosa.", quizId: "rs-mq3" },
  { id: "rs-m4", title: "Advanced Pattern Matching", content: "Desestruturação complexa e guardas de controlo de fluxo.", quizId: "rs-mq4" },
  { id: "rs-m5", title: "Declarative & Proc Macros", content: "Metaprogramação: código que gera código em tempo de compilação.", quizId: "rs-mq5" },
  { id: "rs-m6", title: "Generics & Monomorphization", content: "Performance de zero-cost abstraction em tipos genéricos.", quizId: "rs-mq6" },
  { id: "rs-m7", title: "Error Handling (Result/Option)", content: "Robustez extrema eliminando o conceito de null.", quizId: "rs-mq7" },

  // PILAR 2: Concorrência e Performance
  { id: "rs-m8", title: "Async/Await & Executors", content: "Como o Rust gere tarefas assíncronas sem um runtime fixo.", quizId: "rs-mq8" },
  { id: "rs-m9", title: "The Send and Sync Traits", content: "Garantindo segurança multi-thread a nível de tipos.", quizId: "rs-mq9" },
  { id: "rs-m10", title: "Pinning & Future Internals", content: "Como objetos que não podem mudar de lugar na memória funcionam.", quizId: "rs-mq10" },
  { id: "rs-m11", title: "Rayon & Work Stealing", content: "Paralelismo de dados massivo de forma segura.", quizId: "rs-mq11" },
  { id: "rs-m12", title: "Channels & Atomics", content: "Comunicação entre threads e operações atómicas de hardware.", quizId: "rs-mq12" },
  { id: "rs-m13", title: "Lock-free Data Structures", content: "Construindo coleções concorrentes sem bloqueios pesados.", quizId: "rs-mq13" },
  { id: "rs-m14", title: "Zero-copy Deserialization", content: "Alta performance no processamento de dados (Serde).", quizId: "rs-mq14" },

  // PILAR 3: Internals e Metaprogramação
  { id: "rs-m15", title: "Unsafe Rust: Quando e Como", content: "Acedendo ao hardware e subvertendo o borrow checker com segurança.", quizId: "rs-mq15" },
  { id: "rs-m16", title: "FFI (Foreign Function Interface)", content: "Integração total com bibliotecas em C e C++.", quizId: "rs-mq16" },
  { id: "rs-m17", title: "Memory Layout & Alignment", content: "Entendendo como o Rust dispõe os dados na RAM física.", quizId: "rs-mq17" },
  { id: "rs-m18", title: "Custom Allocators", content: "Controlando como a memória é pedida ao sistema operativo.", quizId: "rs-mq18" },
  { id: "rs-m19", title: "MIR, LLVM & Compilation Pipeline", content: "A jornada do código fonte até o binário otimizado.", quizId: "rs-mq19" },
  { id: "rs-m20", title: "SIMD Instructions in Rust", content: "Explorando paralelismo de hardware ao nível do bit.", quizId: "rs-mq20" },
  { id: "rs-m21", title: "Projeto Final: Systems Engine", content: "Construção de um motor de processamento nativo.", quizId: "rs-mq21" }
];
