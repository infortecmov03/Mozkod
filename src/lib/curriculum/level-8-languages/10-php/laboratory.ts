
import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-event-server-init-lab';

const titles = [
  "Readonly & Union Types", "Constructor Promotion", "Enums de Estado",
  "Match Expressions", "Fibers Concurrency", "DNF Types Accuracy",
  "Attributes Metadata", "Generators Memory", "WeakMaps GC",
  "First-class Callables", "Swoole Async", "PDO Prepared",
  "Readonly Properties", "Finally Resiliency", "Reflection Audit",
  "PHPStan Level 9", "JIT Configuration", "FFI Native Bridge",
  "PSR-15 Middlewares", "DI Auto-wiring", "Final Capstone"
];

const tests = [
  "readonly class", "__construct(private", "enum EventCategory",
  "match ($category)", "Fiber::suspend()", "(HasId&HasName)|null",
  "#[AsEventListener]", "yield ", "$cache[",
  "...", "Swoole\\Http\\Server", "->prepare(",
  "public readonly string", "finally {", "new ReflectionClass",
  "level: 9", "opcache.jit_buffer_size", "FFI::cdef",
  "implements MiddlewareInterface", "EventStore $store", "PRODUCTION READY"
];

export const practice = {
  php: titles.map((title, i) => {
    if (i === 0) return p1;
    return {
      id: `php-p${i + 1}`,
      language: "php",
      title: `Projeto Master: ${title}`,
      description: "Construção cumulativa do High-Scale Event Server.",
      statement: `Implemente o requisito de ${title} no motor.`,
      isProjectPart: true,
      template: `<?php\n// Checkpoint Aula ${i}\n// O código anterior foi herdado.\n`,
      detailedExplanation: `<h3>🐘 Fase ${i + 1}: ${title}</h3><p>Evolua a arquitetura do seu servidor PHP Master com este conceito avançado.</p>`,
      objectives: [{ id: "obj", description: "Concluir requisito técnico", test: tests[i] }]
    };
  })
};
