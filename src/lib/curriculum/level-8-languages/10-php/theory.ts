import { lesson as l1 } from './theory/01-php8-attributes';
import { lesson as l8 } from './theory/08-swoole-concurrency';
import { lesson as l15 } from './theory/15-zend-engine-internals';

export const lessons = [
  l1,
  { id: "php-m2", title: "Enums & Pattern Matching", content: "...", quizId: "php-mq2" },
  { id: "php-m3", title: "Readonly Properties & Classes", content: "...", quizId: "php-mq3" },
  { id: "php-m4", title: "Union & Intersection Types", content: "...", quizId: "php-mq4" },
  { id: "php-m5", title: "Advanced Traits usage", content: "...", quizId: "php-mq5" },
  { id: "php-m6", title: "Generators & Coroutines", content: "...", quizId: "php-mq6" },
  { id: "php-m7", title: "PHP 8.3 Typed Constants", content: "...", quizId: "php-mq7" },
  l8,
  { id: "php-m9", title: "PHP Fibers & Cooperative multitasking", content: "...", quizId: "php-mq9" },
  { id: "php-m10", title: "OpCache & Preloading", content: "...", quizId: "php-mq10" },
  { id: "php-m11", title: "Parallel extension", content: "...", quizId: "php-mq11" },
  { id: "php-m12", title: "Streams & Sockets", content: "...", quizId: "php-mq12" },
  { id: "php-m13", title: "Event Loop with ReactPHP/Amp", content: "...", quizId: "php-mq13" },
  { id: "php-m14", title: "Concurrency Safety Patterns", content: "...", quizId: "php-mq14" },
  l15,
  { id: "php-m16", title: "JIT Compiler Internals", content: "...", quizId: "php-mq16" },
  { id: "php-m17", title: "FFI (Foreign Function Interface)", content: "...", quizId: "php-mq17" },
  { id: "php-m18", title: "Memory Management: Ref Counting", content: "...", quizId: "php-mq18" },
  { id: "php-m19", title: "Developing C Extensions", content: "...", quizId: "php-mq19" },
  { id: "php-m20", title: "Reflection API Master", content: "...", quizId: "php-mq20" },
  { id: "php-m21", title: "Static Analysis with PHPStan", content: "...", quizId: "php-mq21" }
];