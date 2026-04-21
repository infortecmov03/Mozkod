import { lesson as l1 } from './theory/01-interfaces-master';

export const lessons = [
  l1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `go-m${i + 2}`,
    title: [
      "Goroutines & The GMP Scheduler", "Channels & CSP Concurrency Model", "Error Handling: Defensivo vs Ofensivo",
      "Pointers & Escape Analysis", "Slice & Map Memory Internals", "Generics & Performance Trade-offs",
      "Context Propagation & Tracing", "Sync Package: Mutex & Atomics", "Networking: Sockets & TCP/UDP",
      "Go Assembly (Plan9) Basics", "CGO: Interop com C puro", "Reflection & Struct Tags",
      "Optimization: Profiling & Pprof", "Building CLI Tools with Cobra", "Distributed Systems: Raft/Paxos",
      "Memory Management: Scavenging", "Dependency Management: Go Modules", "Testing: Benchmarks & Fuzzing",
      "Compiler Internals & SSA", "Capstone: Distribuindo Cargas"
    ][i],
    content: "<p>Engenharia de Sistemas com Go.</p>",
    quizId: `go-mq${i + 2}`
  }))
];
