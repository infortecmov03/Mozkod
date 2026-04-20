import { lesson as l1 } from './theory/01-php8-attributes';
import { lesson as l2 } from './theory/02-strong-typing-union-types';
import { lesson as l3 } from './theory/03-constructor-promotion';
import { lesson as l4 } from './theory/04-oop-advanced';

export const lessons = [
  l1, l2, l3, l4,
  { id: "php-m5", title: "Enums & Readonly", content: "...", quizId: "php-mq5" },
  { id: "php-m6", title: "Generics via Static Analysis", content: "...", quizId: "php-mq6" },
  { id: "php-m7", title: "Modern PHP Standards (PSR)", content: "...", quizId: "php-mq7" },
  { id: "php-m8", title: "Swoole & Real Concurrency", content: "...", quizId: "php-mq8" },
  { id: "php-m9", title: "Fibers & Cooperative multitasking", content: "...", quizId: "php-mq9" },
  { id: "php-m10", title: "OpCache & Preloading", content: "...", quizId: "php-mq10" },
  { id: "php-m11", title: "Profiling with XHProf", content: "...", quizId: "php-mq11" },
  { id: "php-m12", title: "Memory Leak Detection", content: "...", quizId: "php-mq12" },
  { id: "php-m13", title: "Zend Engine Internals", content: "...", quizId: "php-mq13" },
  { id: "php-m14", title: "Opcodes & JIT", content: "...", quizId: "php-mq14" },
  { id: "php-m15", title: "FFI (Foreign Function Interface)", content: "...", quizId: "php-mq15" },
  { id: "php-m16", title: "Developing C Extensions", content: "...", quizId: "php-mq16" },
  { id: "php-m17", title: "Reflection API Master", content: "...", quizId: "php-mq17" },
  { id: "php-m18", title: "Metaprogramming with __call", content: "...", quizId: "php-mq18" },
  { id: "php-m19", title: "Dependency Injection Containers", content: "...", quizId: "php-mq19" },
  { id: "php-m20", title: "Security: Timing Attacks & Logic", content: "...", quizId: "php-mq20" },
  { id: "php-m21", title: "Master Project: High Scale API", content: "...", quizId: "php-mq21" }
];