
import { lesson as l1 } from './theory/01-php8-attributes';
import { lesson as l2 } from './theory/02-strong-typing-union-types';
import { lesson as l3 } from './theory/03-constructor-promotion';
import { lesson as l4 } from './theory/04-oop-advanced';
import { lesson as l8 } from './theory/08-swoole-concurrency';
import { lesson as l15 } from './theory/15-zend-engine-internals';

export const lessons = [
  l1, l2, l3, l4,
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `php-m${i + 5}`,
    title: ["Enums & Match", "Readonly Properties", "Advanced Traits"][i],
    content: "<p>PHP Moderno de alta performance.</p>",
    quizId: `php-mq${i + 5}`
  })),
  l8,
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `php-m${i + 9}`,
    title: ["Fibers Concurrency", "Generators Memory", "OpCache JIT", "Streams & Sockets", "DI Containers", "Reflection Master"][i],
    content: "<p>Arquitetura de sistemas web.</p>",
    quizId: `php-mq${i + 9}`
  })),
  l15,
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `php-m${i + 16}`,
    title: ["Security: SQLi/XSS", "Hexagonal Arch", "Pest Testing", "Static Analysis", "FFI with C", "Capstone Milestone"][i],
    content: "<p>Desenvolvimento Backend de Elite.</p>",
    quizId: `php-mq${i + 16}`
  }))
];
