import { lesson as l1 } from './theory/01-php8-attributes';
import { lesson as l2 } from './theory/02-strong-typing-union-types';

const titles = [
  "Constructor Property Promotion & DTOs", "Enums & Pattern Matching (Match Expression)",
  "Readonly Properties & Classes", "Advanced Traits & Horizontal Reuse",
  "Fibers: Concorrência Cooperativa em PHP", "Generators & Memory Efficient Processing",
  "OpCache, Preloading & JIT Compilation", "Swoole: Corrotinas e Concorrência Real",
  "Zend Engine: Opcodes e Ciclo de Vida", "Streams, Sockets e Low-level I/O",
  "Dependency Injection Containers (DIC) Internals", "Reflection API & Metaprogramação",
  "Security: Proteção contra SQLi, XSS e CSRF", "Arquitetura Hexagonal & Clean Architecture",
  "Testing: PHPUnit & Pest Design Patterns", "Static Analysis com PHPStan & Psalm",
  "FFI (Foreign Function Interface) com C", "Memory Management & Garbage Collection",
  "Dockerização de Apps PHP de Elite", "Capstone: High-Scale Event Server"
];

export const lessons = [
  l1, l2,
  ...titles.map((title, i) => ({
    id: `php-m${i + 3}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐘 PHP Master: ${title}</h2><p>Desenvolvimento moderno de backend e sistemas de larga escala.</p></div>`,
    quizId: `php-mq${i + 3}`
  }))
];