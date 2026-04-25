
import type { PracticeExercise } from '../../types';

// O Projeto Master é o "CWM High-Scale Event Server"
// Trilha 100% cumulativa com herança de código (isProjectPart: true)
const phpTitles = [
  "Fundação do Event Server", "Constructor Property Promotion", "Validadores de Evento",
  "Enums de Prioridade", "Zend Opcode Optimization", "Cycle Collection Audit",
  "PDO Transaction Layer", "Swoole Async Dispatcher", "Reflection Metadata Hook",
  "Fibers Scheduler", "RoadRunner Worker Bridge", "Raw Sockets Engine",
  "FFI Binary Parser", "Generics via Docblock Audit", "Hexagonal Port Mapping",
  "Dependency Container Setup", "PHPStan Level 9 Audit", "JIT Performance Bench",
  "Security: Sanitizer Filter", "gRPC Protocol Buffers", "Capstone PRODUCTION READY"
];

const phpTests = [
  "readonly class", "public string $id", "mixed", "enum", "opcache", "gc_collect_cycles",
  "beginTransaction", "Swoole\\", "getAttributes", "Fiber", "worker", "socket_create",
  "FFI::", "@param", "interface", "container", "PHPStan", "jit", "htmlspecialchars",
  "protobuf", "PRODUCTION READY"
];

export const practice = {
  php: phpTitles.map((title, i) => ({
    id: `php-p${i + 1}`,
    language: "php",
    title: `Projeto Master: ${title}`,
    description: "Construção cumulativa do High-Scale Event Server.",
    statement: `Implemente o requisito de ${title} no servidor.`,
    isProjectPart: true,
    template: `<?php\n\n// Checkpoint Aula ${i}\n// O código anterior foi carregado automaticamente.\n`,
    detailedExplanation: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-primary">🐘 Fase ${i + 1}: ${title}</h3>
        <p class="text-sm">Evolua a arquitetura do seu servidor de eventos utilizando o conceito de elite desta lição.</p>
        <div class="p-3 bg-muted rounded-xl border border-primary/20 text-xs">
          <strong>Requisito Técnico:</strong> Garante que o código contém a instrução <code>${phpTests[i]}</code> para passar na auditoria.
        </div>
      </div>
    `,
    objectives: [{ id: "obj", description: "Concluir requisito técnico de elite", test: phpTests[i] }]
  }))
};
