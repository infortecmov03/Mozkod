import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-event-server-init-lab';
import { exercise as p4 } from './laboratory/04-enums-lab';

const phpTitles = [
  "Fundação do Event Server", 
  "Tipagem de Elite e Union Types", 
  "Constructor Property Promotion", 
  "Validadores de Evento com Enums",
  "Prioridades e Metadados", "Zend Opcode Optimization", "Cycle Collection Audit",
  "PDO Transaction Layer", "Swoole Async Dispatcher", "Reflection Metadata Hook",
  "Fibers Scheduler", "RoadRunner Worker Bridge", "Raw Sockets Engine",
  "FFI Binary Parser", "Generics via Docblock Audit", "Hexagonal Port Mapping",
  "Dependency Container Setup", "PHPStan Level 9 Audit", "JIT Performance Bench",
  "Security: Sanitizer Filter", "gRPC Protocol Buffers", "Capstone PRODUCTION READY"
];

const phpTests = [
  "readonly class", 
  "string|int", 
  "public string $traceId", 
  "enum EventStatus",
  "enum", "opcache", "gc_collect_cycles",
  "beginTransaction", "Swoole\\", "getAttributes", "Fiber", "worker", "socket_create",
  "FFI::", "@param", "interface", "container", "PHPStan", "jit", "htmlspecialchars",
  "protobuf", "PRODUCTION READY"
];

export const practice = {
  php: phpTitles.map((title, i) => {
    if (i === 0) return p1;
    if (i === 3) return p4;
    
    // Laboratório 9 (Index 9): Reflection Metadata Hook
    if (i === 9) {
      return {
        id: "php-p10",
        language: "php",
        title: "Projeto Master: Gancho de Metadados via Reflection",
        description: "Implemente o motor de descoberta de handlers utilizando introspecção.",
        statement: "Utilize o método getAttributes() para extrair a configuração do tópico de uma classe handler.",
        isProjectPart: true,
        template: `<?php

namespace App\\Core;

use ReflectionClass;

class Dispatcher {
    public function getTopic(string $className): string {
        $reflector = new ReflectionClass($className);
        // Ação 1: Obtenha o atributo EventHandler e instancie-o para retornar o tópico
        $attributes = $reflector->getAttributes(EventHandler::class);
        
        if (empty($attributes)) return "default";
        
        return $attributes[0]->newInstance()->topic;
    }
}`,
        detailedExplanation: `
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-primary">⚙️ O Cérebro do Dispatcher</h3>
            <p class="text-sm">O seu servidor de eventos precisa de saber "quem responde a quê". Em vez de mapas manuais, utilize a <strong>Reflection API</strong> para ler os atributos que criamos nos laboratórios anteriores.</p>
          </div>
        `,
        objectives: [
          { id: "reflection", description: "Instanciar ReflectionClass.", test: "new ReflectionClass" },
          { id: "getattr", description: "Chamar getAttributes() filtrando por EventHandler.", test: "getAttributes(EventHandler::class)" },
          { id: "instance", description: "Chamar newInstance() para ler a propriedade 'topic'.", test: "newInstance()->topic" }
        ]
      };
    }

    // Laboratórios 2 e 3 (Mantendo a coerência anterior)
    if (i === 1) {
      return {
        id: "php-p2",
        language: "php",
        title: "Projeto Master: Tipagem Robusta",
        description: "Aplique Union Types para gerir múltiplos formatos de entrada.",
        statement: "Atualize a assinatura do método 'dispatch' para aceitar 'string|int' como ID do evento.",
        isProjectPart: true,
        template: `<?php\n\n// Checkpoint anterior carregado\n// Adicione a tipagem ao método dispatch\n`,
        detailedExplanation: `<div class="space-y-4"><h3 class="text-xl font-bold text-primary">🛡️ Blindagem de Entrada</h3><p class="text-sm">Utilize <strong>Union Types</strong> para garantir que o motor aceite IDs híbridos sem falhas.</p></div>`,
        objectives: [{ id: "union", description: "Usar string|int na assinatura.", test: "string|int" }]
      };
    }

    if (i === 2) {
      return {
        id: "php-p3",
        language: "php",
        title: "Projeto Master: Redução de Boilerplate com Promotion",
        description: "Refatorize os metadados do evento.",
        statement: "Implemente a classe EventMetadata utilizando Constructor Property Promotion.",
        isProjectPart: true,
        template: `<?php\n\nnamespace App\\Core;\n\nuse DateTimeImmutable;\n\nreadonly class EventMetadata {\n    public function __construct(\n        public string $traceId,\n        public DateTimeImmutable $createdAt,\n    ) {}\n}`,
        detailedExplanation: `<div class="space-y-4"><h3 class="text-xl font-bold text-primary">🧹 Limpeza Arquitetural</h3><p class="text-sm">Use <strong>Constructor Promotion</strong> para um design de metadados limpo.</p></div>`,
        objectives: [{ id: "promotion", description: "Promover propriedades no construtor.", test: "public string $traceId" }]
      };
    }

    return {
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
          <p class="text-sm">Evolua a arquitetura do seu servidor de eventos.</p>
          <div class="p-3 bg-muted rounded-xl border border-primary/20 text-xs">
            <strong>Requisito Técnico:</strong> Deve conter a instrução <code>${phpTests[i]}</code>.
          </div>
        </div>
      `,
      objectives: [{ id: "obj", description: "Concluir requisito técnico de elite", test: phpTests[i] }]
    };
  })
};
