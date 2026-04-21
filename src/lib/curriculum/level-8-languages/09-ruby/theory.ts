
import type { TheoryLesson } from '../../types';

const rubyTitles = [
  "Fase 1: Tudo é Objeto e Sintaxe Flexível",
  "Fase 1: Symbols, Blocos e Interpolação",
  "Fase 2: Módulos, Mixins e Namespacing",
  "Fase 2: Enumerables Poderosos (Map, Reduce)",
  "Fase 2: Metaprogramação: method_missing",
  "Fase 2: Metaprogramação: define_method e eval",
  "Fase 2: Blocks, Procs e Lambdas",
  "Fase 3: Concorrência: Threads e Ractors (Ruby 3)",
  "Fase 3: Fibers e Async Event Loops",
  "Fase 3: Ruby Internals: Garbage Collection",
  "Fase 3: Object Model: Eigenclasses",
  "Fase 3: Testing com RSpec (BDD)",
  "Fase 3: DSL Creation e Chaining",
  "Fase 4: Ruby on Rails: MVC e ActiveRecord",
  "Fase 4: Rails APIs e Serializers",
  "Fase 4: Frontends com Hotwire e Turbo",
  "Fase 4: Background Jobs e Caching",
  "Fase 4: Performance e YJIT Otimização",
  "Fase 4: Segurança em Apps Rails",
  "Fase 4: Gem Ecosystem e Publicação",
  "Fase 4: Capstone: Deploy de E-commerce com Rails"
];

export const lessons: TheoryLesson[] = rubyTitles.map((title, i) => ({
  id: `rb-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>💎 Ruby Master: ${title}</h2><p>Elegância e produtividade extrema para o desenvolvedor moderno.</p></div>`,
  quizId: `rb-mq${i + 1}`
}));
