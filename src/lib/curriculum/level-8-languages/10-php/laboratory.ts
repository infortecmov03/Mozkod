
import type { PracticeExercise } from '../../types';

export const practice = {
  php: [
    {
      id: "php-p1",
      language: "php",
      title: "Projeto Master: Fundação do Event Server",
      description: "Inicie o motor com imutabilidade nativa.",
      statement: "Defina a classe Event como 'readonly' e implemente o construtor.",
      isProjectPart: true,
      template: `<?php\n\nreadonly class Event {\n    public function __construct(\n        public string $id,\n        public string $payload\n    ) {}\n}`,
      detailedExplanation: "<h3>🐘 Arquitetura PHP 8.2</h3><p>Iniciamos com <b>Readonly Classes</b> para garantir que um evento, uma vez disparado, não possa ser alterado na memória, garantindo a integridade do rasto de auditoria.</p>",
      objectives: [{ id: "ro", description: "Usar readonly class", test: "readonly class" }]
    },
    {
      id: "php-p2",
      language: "php",
      title: "Projeto Master: Constructor Promotion",
      description: "Otimize o boilerplate de serviços.",
      statement: "Refatorize o Dispatcher para usar Property Promotion.",
      isProjectPart: true,
      template: `<?php\n\nreadonly class Event {\n    public function __construct(public string $id, public string $payload) {}\n}\n\nclass Dispatcher {\n    public function __construct(\n        private Logger $logger\n    ) {}\n}`,
      detailedExplanation: "<h3>🚀 Performance de Escrita</h3><p>O <b>Constructor Property Promotion</b> permite declarar e inicializar propriedades num único passo, reduzindo o tamanho do ficheiro e a carga do parser.</p>",
      objectives: [{ id: "prom", description: "Usar private no argumento", test: "private Logger" }]
    },
    {
      id: "php-p3",
      language: "php",
      title: "Projeto Master: Enums de Estado",
      description: "Categorize eventos com tipos fortes.",
      statement: "Crie um Enum 'Status' com os casos PENDING e SUCCESS.",
      isProjectPart: true,
      template: `<?php\n\nenum Status: string {\n    case PENDING = 'pending';\n    case SUCCESS = 'success';\n}`,
      detailedExplanation: "<h3>💎 Tipagem Robusta</h3><p>Substitua strings mágicas por <b>Enums</b>. Isto permite que o compilador e o PHPStan validem a lógica de estados do servidor.</p>",
      objectives: [{ id: "enum", description: "Definir enum Status", test: "enum Status" }]
    },
    // ... Preenchendo os restantes labs com a estratégia de checkpoint (13-21)
    ...Array.from({ length: 18 }, (_, i) => {
      const idNum = i + 4;
      const tests = [
        "match", "Fiber", "readonly", "Attribute", "yield", "WeakMap", "...",
        "Swoole", "prepare", "readonly", "finally", "Reflection", "9",
        "jit", "FFI", "PSR", "inject", "STABLE"
      ];
      return {
        id: `php-p${idNum}`,
        language: "php",
        title: `Projeto Master Milestone ${idNum}`,
        description: "Evolução do High-Scale Event Server.",
        statement: "Implemente o incremento técnico desta fase.",
        isProjectPart: true,
        template: `<?php\n// O código anterior foi carregado automaticamente.\n// Prossiga com a implementação da Fase ${idNum}\n`,
        detailedExplanation: `<h3>⚡ Engenharia de Backend</h3><p>Nesta fase, integramos o conceito master número ${idNum} na infraestrutura do servidor.</p>`,
        objectives: [{ id: "obj", description: "Validar requisito técnico", test: tests[i] }]
      };
    })
  ]
};
