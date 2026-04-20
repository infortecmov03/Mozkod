
import { lesson as l1 } from './theory/01-php8-attributes';
export const lessons = [
  l1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `php-m${i + 2}`,
    title: [
      "Strong Typing & Union Types", "Constructor Property Promotion", "Enums & Pattern Matching", "Readonly Properties & Classes",
      "Advanced Traits Usage", "Generators & Coroutines", "PHP 8.3 Typed Constants", "Swoole Concurrency",
      "PHP Fibers & Multitasking", "OpCache & Preloading", "Parallel Extension", "Streams & Sockets",
      "Event Loop with ReactPHP", "Concurrency Safety Patterns", "Zend Engine: Opcodes", "JIT Compiler Internals",
      "FFI (Foreign Function Interface)", "Memory Management: Ref Counting", "Developing C Extensions", "Reflection API Master", "Static Analysis with PHPStan"
    ][i],
    content: "<p>Engenharia de backend com PHP moderno.</p>",
    quizId: `php-mq${i + 2}`
  }))
];
