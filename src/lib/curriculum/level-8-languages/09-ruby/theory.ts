import { lesson as l1 } from './theory/01-blocks-procs-lambdas';
import { lesson as l2 } from './theory/02-metaprogramming-magic';

const titles = [
  "Object Model: Eigenclass & Singleton Classes", "Ruby 3.x: Ractors & Parallelism",
  "Fibers & Cooperative Concurrency", "Enumerable Deep Dive & Lazy Streams",
  "Memory Management: Compacting GC", "YJIT Internals & Optimization",
  "DSL Construction: A Arte do Ruby", "ActiveSupport: Por dentro da Magia",
  "Testing: RSpec & Minitest Design Patterns", "C-Extensions: Ligando Ruby ao C",
  "Security: SQLi e Sanitização em Ruby", "Profiling & Benchmarking",
  "GraalVM & TruffleRuby Future", "Gem Ecosystem & Dependency Resolvers",
  "Advanced Regex in Ruby", "Refinements & Monkey Patching Seguro",
  "Capstone: Expressive DSL Engine"
];

export const lessons = [
  l1, l2,
  ...titles.map((title, i) => ({
    id: `rb-m${i + 3}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>💎 Ruby Master: ${title}</h2><p>Especialização técnica em elegância e metaprogramação avançada.</p></div>`,
    quizId: `rb-mq${i + 3}`
  }))
];