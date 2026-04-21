
import { lesson as l1 } from './theory/01-implicit-interfaces';
import { lesson as l10 } from './theory/10-gmp-scheduler';
import { lesson as l15 } from './theory/15-escape-analysis';

const goMasterTitles = [
  "Composition over Inheritance with Structs", "Error Handling: Sentinels & Wrapping", 
  "Defer, Panic and Recover Internals", "Generics: Constraints & Performance", 
  "Slices and Maps Memory Internals", "Pointers vs Value Semantics", "Goroutines & CSP Model", 
  "Channels: Buffered vs Unbuffered Deep Dive", "Select Statement & Timeouts", 
  "Sincronização: Mutex, RWMutex & WaitGroup", "Context Propagation & Cancellation", 
  "Race Detection & Dynamic Analysis", "Compiler Optimizations & Inlining", 
  "Reflect Package & Metaprogramming", "Unsafe Package & CGO Interop", 
  "go:linkname & Runtime Internals", "Runtime Tracing and Profiling", "Go Assembly (Plan9)"
];

export const lessons = [
  l1,
  ...goMasterTitles.slice(0, 8).map((title, i) => ({
    id: `go-m${i + 2}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐹 Go Master: ${title}</h2><p>Eficiência e simplicidade em sistemas de larga escala.</p></div>`,
    quizId: `go-mq${i + 2}`
  })),
  l10,
  ...goMasterTitles.slice(8, 12).map((title, i) => ({
    id: `go-m${i + 11}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐹 Go Master: ${title}</h2><p>O poder da concorrência nativa e gestão de threads leves.</p></div>`,
    quizId: `go-mq${i + 11}`
  })),
  l15,
  ...goMasterTitles.slice(12).map((title, i) => ({
    id: `go-m${i + 16}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐹 Go Master: ${title}</h2><p>Performance interna do runtime e integração com baixo nível.</p></div>`,
    quizId: `go-mq${i + 16}`
  }))
];
