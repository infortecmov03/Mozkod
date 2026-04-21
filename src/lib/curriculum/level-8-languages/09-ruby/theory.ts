import { lesson as l1 } from './theory/01-blocks-procs-lambdas';
import { lesson as l2 } from './theory/02-everything-is-object';

export const lessons = [
  l1, l2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `rb-m${i + 3}`,
    title: [
      "Metaprogramação: method_missing & define_method", "Mixins, Modules & Prepend",
      "Object Model: Eigenclass & Singleton Classes", "Ruby 3.x: Ractors & Parallelism",
      "Fibers & Cooperative Concurrency", "Enumerable Deep Dive & Lazy Streams",
      "Memory Management: Compacting GC", "YJIT Internals & Optimization",
      "DSL Construction: A Arte do Ruby", "ActiveSupport: Por dentro da Magia",
      "Testing: RSpec & Minitest Design Patterns", "C-Extensions: Ligando Ruby ao C",
      "Security: SQLi e Sanitização em Ruby", "Profiling & Benchmarking",
      "GraalVM & TruffleRuby Future", "Gem Ecosystem & Dependency Resolvers",
      "Advanced Regex in Ruby", "Refinements & Monkey Patching Seguro",
      "Capstone: Expressive DSL Engine"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>💎 Ruby Master: Especialização Técnica</h2><p>Foco em expressividade, design de código e internals do interpretador MRI.</p></div>`,
    quizId: `rb-mq${i + 3}`
  }))
];
