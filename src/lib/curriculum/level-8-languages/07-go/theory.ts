import { lesson as l1 } from './theory/01-interfaces-master';
import { lesson as l2 } from './theory/02-goroutines-scheduler';

const titles = [
  "Channels & CSP Concurrency Model", "Error Handling: Defensivo vs Ofensivo",
  "Pointers & Escape Analysis", "Slice & Map Memory Internals", "Generics & Performance Trade-offs",
  "Context Propagation & Tracing", "Sync Package: Mutex & Atomics", "Networking: Sockets & TCP/UDP",
  "Go Assembly (Plan9) Basics", "CGO: Interop com C puro", "Reflection & Struct Tags",
  "Optimization: Profiling & Pprof", "Building CLI Tools with Cobra", "Distributed Systems: Raft/Paxos",
  "Memory Management: Scavenging", "Dependency Management: Go Modules", "Testing: Benchmarks & Fuzzing",
  "Compiler Internals & SSA", "Capstone: Distribuindo Cargas"
];

export const lessons = [
  l1, l2,
  ...titles.map((title, i) => ({
    id: `go-m${i + 3}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐹 Go Master: ${title}</h2><p>Engenharia de sistemas distribuídos e concorrência de alta performance.</p></div>`,
    quizId: `go-mq${i + 3}`
  }))
];