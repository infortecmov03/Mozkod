
import { lesson as l1 } from './theory/01-blocks-procs-lambdas';
import { lesson as l2 } from './theory/02-metaprogramming-magic';
import { lesson as l8 } from './theory/08-fibers-concurrency';
import { lesson as l9 } from './theory/09-ractors-parallelism';
import { lesson as l15 } from './theory/15-singleton-classes';

export const lessons = [
  l1, l2,
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `rb-m${i + 3}`,
    title: ["Object Model: Eigenclass", "Enumerable & Streams", "Memory: Compacting GC", "YJIT Internals", "DSL Construction"][i],
    content: "<p>A arte do código Ruby.</p>",
    quizId: `rb-mq${i + 3}`
  })),
  l8, l9,
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `rb-m${i + 10}`,
    title: ["ActiveSupport Internals", "RSpec Patterns", "C-Extensions", "Security Best Practices", "Profiling"][i],
    content: "<p>Metaprogramação e performance.</p>",
    quizId: `rb-mq${i + 10}`
  })),
  l15,
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `rb-m${i + 16}`,
    title: ["GraalVM Ruby", "Gem Ecosystem", "Regex Master", "Refinements", "KISS Principles", "Capstone Milestone"][i],
    content: "<p>Software centrado no humano.</p>",
    quizId: `rb-mq${i + 16}`
  }))
];
