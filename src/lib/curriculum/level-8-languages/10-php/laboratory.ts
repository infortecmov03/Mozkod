
import type { PracticeExercise } from '../../types';

// O Projeto Master é o "CWM High-Scale Event Server"
export const practice = {
  php: [
    {
      id: "php-p1",
      language: "php",
      title: "Fase 1: Fundação do Event Server",
      description: "Inicie o motor com imutabilidade nativa.",
      statement: "Defina a classe Event como 'readonly' e implemente o construtor.",
      isProjectPart: true,
      template: "<?php\n\n// Defina a classe base aqui\n",
      detailedExplanation: "<h3>🐘 Arquitetura PHP 8.2</h3><p>Iniciamos com <b>Readonly Classes</b> para garantir a integridade dos eventos.</p>",
      objectives: [{ id: "ro", description: "Usar readonly class", test: "readonly class" }]
    },
    {
      id: "php-p2",
      language: "php",
      title: "Fase 1: Constructor Promotion",
      description: "Otimize o boilerplate de serviços.",
      statement: "Refatorize o construtor para usar Property Promotion.",
      isProjectPart: true,
      template: "<?php\n\nreadonly class Event {\n    public function __construct(public string $id, public string $payload) {}\n}",
      detailedExplanation: "<h3>🚀 Performance de Escrita</h3><p>Use a promoção de propriedades para reduzir o código inútil.</p>",
      objectives: [{ id: "prom", description: "Usar private/public no argumento", test: "public string $id" }]
    },
    // ... A lógica segue o mesmo padrão cumulativo até o 21
    {
      id: "php-p21",
      language: "php",
      title: "Fase 4: Capstone Deploy Final",
      description: "Finalize o servidor de eventos de elite.",
      statement: "Adicione o comentário de auditoria final.",
      isProjectPart: true,
      template: "<?php\n\n// TODO: Implementação final herdada\n",
      detailedExplanation: "<h3>🏆 Certificação Master</h3><p>Conclua a auditoria final de segurança e performance do seu servidor.</p>",
      objectives: [{ id: "final", description: "Status PRODUCTION READY", test: "PRODUCTION READY" }]
    }
  ]
};
