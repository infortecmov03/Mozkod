import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-p1",
  language: "php",
  title: "Projeto Master PHP: High-Scale Event Server",
  description: "Inicie o servidor de eventos de alta performance.",
  statement: "Utilize o PHP 8.2+ para definir uma classe 'Event' imutável (readonly) e use Union Types no método de envio.",
  isProjectPart: true,
  template: `<?php

namespace App;

// Defina a classe Event aqui
readonly class Event {
    public function __construct(
        public string $type,
        public string|array $payload
    ) {}
}

class EventServer {
    public function dispatch(string|int $target): void {
        // Lógica de envio
    }
}`,
  detailedExplanation: `
    <h3>🚀 O Novo PHP</h3>
    <p>Neste projeto, vais construir um servidor de eventos capaz de lidar com milhares de conexões. O primeiro passo é garantir que as mensagens (Eventos) sejam imutáveis usando as novas <strong>Readonly Classes</strong> do PHP 8.2.</p>
  `,
  objectives: [
    {
      id: "readonly",
      description: "A classe Event deve ser declarada como 'readonly class'.",
      hint: "readonly class Event { ... }",
      test: "readonly class"
    },
    {
      id: "union_types",
      description: "Use Union Types (string|array) no atributo payload.",
      hint: "public string|array $payload",
      test: "string|array"
    }
  ]
};
