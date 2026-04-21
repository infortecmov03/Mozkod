
import { lesson as l1 } from './theory/01-interfaces-master';
import { lesson as l2 } from './theory/02-goroutines-scheduler';
import { lesson as l4 } from './theory/04-goroutines';
import { lesson as l10 } from './theory/10-gmp-scheduler';
import { lesson as l15 } from './theory/15-escape-analysis';

export const lessons = [
  l1, l2, 
  { id: "go-m3", title: "Channels & CSP Concurrency Model", content: "<p>Comunicação segura entre processos.</p>", quizId: "go-mq3" },
  l4,
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `go-m${i + 5}`,
    title: ["Error Handling: Defensivo", "Pointers & Value Semantics", "Slice & Map Internals", "Generics & Performance", "Context Propagation"][i],
    content: "<p>Tópico avançado de Go.</p>",
    quizId: `go-mq${i + 5}`
  })),
  l10,
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `go-m${i + 11}`,
    title: ["Sync Package", "Networking: Sockets", "Go Assembly", "CGO Interop"][i],
    content: "<p>Tópico de nível master.</p>",
    quizId: `go-mq${i + 11}`
  })),
  l15,
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `go-m${i + 16}`,
    title: ["Compiler Optimizations", "Reflection", "Profiling with Pprof", "CLI Tools Design", "Distributed Raft", "Capstone Milestone"][i],
    content: "<p>Engenharia de sistemas de alto desempenho.</p>",
    quizId: `go-mq${i + 16}`
  }))
];
