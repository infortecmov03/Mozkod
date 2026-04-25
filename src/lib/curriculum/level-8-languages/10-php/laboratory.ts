import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-event-server-init-lab';
import { exercise as p4 } from './laboratory/04-enums-lab';
import { exercise as p13 } from './laboratory/13-ffi-binary-parser-lab';

const phpTitles = [
  "Fundação do Event Server", 
  "Tipagem de Elite e Union Types", 
  "Constructor Property Promotion", 
  "Validadores de Evento com Enums",
  "Prioridades e Metadados", "Zend Opcode Optimization", "Cycle Collection Audit",
  "PDO Transaction Layer", "Swoole Async Dispatcher", "Reflection Metadata Hook",
  "Fibers Scheduler", "RoadRunner Worker Bridge", "Raw Sockets Engine",
  "FFI Binary Parser", "Hexagonal Port Mapping", "Dependency Container Setup", 
  "PHPStan Level 9 Audit", "JIT Performance Bench",
  "Security: Sanitizer Filter", "gRPC Protocol Buffers", "Capstone PRODUCTION READY"
];

const phpTests = [
  "readonly class", 
  "string|int", 
  "public string $traceId", 
  "enum EventStatus",
  "enum", "opcache", "gc_collect_cycles",
  "beginTransaction", "Swoole\\", "getAttributes", "Fiber", "worker", "socket_create",
  "FFI::", "interface", "container", "PHPStan", "jit", "htmlspecialchars",
  "protobuf", "PRODUCTION READY"
];

export const practice = {
  php: phpTitles.map((title, i) => {
    if (i === 0) return p1;
    if (i === 3) return p4;
    if (i === 13) return p13;
    
    // Laboratório 16 (Index 16): PHPStan Level 9 Audit
    if (i === 16) {
      return {
        id: "php-p17",
        language: "php",
        title: "Projeto Master: Auditoria PHPStan Nível 9",
        description: "Aplique o rigor máximo de tipos no motor de eventos.",
        statement: "Adicione anotações @template e realize o narrowing de um tipo 'mixed' para 'Event'.",
        isProjectPart: true,
        template: `<?php

namespace App\\Core;

/**
 * Ação 1: Adicione @template T of Event
 * @template T of Event
 */
class Auditor {
    /**
     * Ação 2: Receba mixed e valide se é instância de Event
     */
    public function audit(mixed $data): void {
        if ($data instanceof Event) {
            echo "Auditando evento: " . $data->id;
        }
    }
}`,
        detailedExplanation: `
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-primary">🔬 Auditoria Estática de Elite</h3>
            <p class="text-sm">O seu motor deve ser à prova de falhas. Utilize anotações de <strong>Generics</strong> (<button>@template</button>) para que o <button>PHPStan</button> consiga rastrear o tipo exato dos eventos dentro das coleções.</p>
          </div>
        `,
        objectives: [
          { id: "template", description: "Utilizar anotação @template.", test: "@template" },
          { id: "narrowing", description: "Realizar narrowing com instanceof.", test: "instanceof Event" }
        ]
      };
    }

    // Laboratório 14 (Index 14): Hexagonal Port Mapping
    if (i === 14) {
      return {
        id: "php-p15",
        language: "php",
        title: "Projeto Master: Mapeamento de Portas Hexagonais",
        description: "Defina o contrato de persistência do motor de forma agnóstica.",
        statement: "Implemente the interface 'EventStore' (Porta) e o adaptador 'DatabaseStore' que a satisfaz.",
        isProjectPart: true,
        template: `<?php

namespace App\\Core\\Ports;

use App\\Core\\Entities\\Event;

// Ação 1: Defina a Porta (Interface)
interface EventStore {
    public function save(Event $event): void;
}

namespace App\\Infrastructure\\Adapters;

use App\\Core\\Ports\\EventStore;
use App\\Core\\Entities\\Event;

// Ação 2: Implemente o Adaptador
class DatabaseStore implements EventStore {
    public function save(Event $event): void {
        // Lógica de persistência real (ex: PDO) aqui
        echo "Evento persistido via Adaptador SQL";
    }
}`,
        detailedExplanation: `
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-primary">⬢ Engenharia de Desacoplamento</h3>
            <p class="text-sm">O seu motor de eventos não deve saber que o MySQL existe. Ele deve saber apenas que existe algo capaz de <code>save()</code> um evento. Ao criar a interface <button>EventStore</button> no namespace de <b>Ports</b>, você cria a fronteira arquitetural de elite.</p>
          </div>
        `,
        objectives: [
          { id: "port_def", description: "Definir a interface de Porta.", test: "interface EventStore" },
          { id: "adapter_impl", description: "Implementar o adaptador satisfazendo a porta.", test: "implements EventStore" }
        ]
      };
    }

    // Laboratório 10 (Index 10): Fibers Scheduler
    if (i === 10) {
      return {
        id: "php-p11",
        language: "php",
        title: "Projeto Master: Escalonador de Tarefas com Fibers",
        description: "Implemente a suspensão e retoma de processos de sincronização.",
        statement: "Utilize a classe 'Fiber' para pausar a execução de uma tarefa e retomá-la injetando um ID de transação.",
        isProjectPart: true,
        template: `<?php\n\nnamespace App\\Core;\n\nuse Fiber;\n\nclass TaskRunner {\n    public function execute(): void {\n        $fiber = new Fiber(function(): void {\n            $id = Fiber::suspend("WAITING");\n            echo "Processando transação: " . $id;\n        });\n\n        $status = $fiber->start();\n        if ($status === "WAITING") {\n            $fiber->resume("TX-101");\n        }\n    }\n}`,
        detailedExplanation: `<div class="space-y-4"><h3 class="text-xl font-bold text-primary">⚙️ O Ciclo de Suspensão</h3><p class="text-sm">O seu servidor precisa lidar com esperas de rede sem travar. Utilize as <button>Fibers</button> para criar pontos de paragem inteligentes.</p></div>`,
        objectives: [
          { id: "fiber_init", description: "Instanciar nova Fiber.", test: "new Fiber" },
          { id: "suspend_call", description: "Utilizar Fiber::suspend().", test: "Fiber::suspend" },
          { id: "resume_call", description: "Retomar execução com resume().", test: "->resume(" }
        ]
      };
    }

    // Laboratório 9 (Index 9): Reflection Metadata Hook
    if (i === 9) {
      return {
        id: "php-p10",
        language: "php",
        title: "Projeto Master: Gancho de Metadados via Reflection",
        description: "Implemente o motor de descoberta de handlers utilizando introspecção.",
        statement: "Utilize o método getAttributes() para extrair a configuration do tópico de uma classe handler.",
        isProjectPart: true,
        template: `<?php\n\nnamespace App\\Core;\n\nuse ReflectionClass;\n\nclass Dispatcher {\n    public function getTopic(string $className): string {\n        $reflector = new ReflectionClass($className);\n        $attributes = $reflector->getAttributes(EventHandler::class);\n        if (empty($attributes)) return "default";\n        return $attributes[0]->newInstance()->topic;\n    }\n}`,
        detailedExplanation: `<div class="space-y-4"><h3 class="text-xl font-bold text-primary">⚙️ O Cérebro do Dispatcher</h3><p class="text-sm">Utilize a <strong>Reflection API</strong> para ler os atributos que criamos nos laboratórios anteriores.</p></div>`,
        objectives: [
          { id: "reflection", description: "Instanciar ReflectionClass.", test: "new ReflectionClass" },
          { id: "getattr", description: "Chamar getAttributes().", test: "getAttributes" }
        ]
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
