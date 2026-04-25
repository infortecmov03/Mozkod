import type { PracticeExercise } from '../../types';

const generateEcoLab = (idNum: number, title: string, testStr: string) => ({
  id: `php-eco-p${idNum}`,
  language: "php",
  title: `Projeto Master: ${title}`,
  description: "Aplicação prática de padrões enterprise no Event Server.",
  statement: `Implemente o requisito técnico de ${title} para o motor de ecossistema.`,
  isProjectPart: true,
  template: `<?php\n\n// HIGH-SCALE EVENT SERVER - MILESTONE ${idNum}\n// O código anterior foi herdado automaticamente.\n`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🏗️ Engenharia de Ecossistema</h3>
      <p class="text-sm">Consolide a arquitetura do seu servidor aplicando <strong>${title}</strong>.</p>
      <div class="p-3 bg-muted rounded-xl border border-primary/20 text-xs">
        <strong>Auditoria de Código:</strong> O motor verificará a presença da instrução <code>${testStr}</code>.
      </div>
    </div>
  `,
  objectives: [{ id: "obj", description: "Validar arquitetura industrial", test: testStr }]
});

const titles = [
  "Composer: Otimização de Autoload", 
  "PHPUnit: Mocking de Repositórios", 
  "Pest: Expectation API", 
  "Infection: Erradicação de Mutantes", 
  "DDD: Entidades e Value Objects", 
  "DDD: Aggregate Roots", 
  "Event Sourcing: Replay Logic", 
  "Design Patterns: Abstract Factory", 
  "Design Patterns: Strategy Dispatcher", 
  "PSR-11: Dependency Container", 
  "DI: Autowiring de Serviços", 
  "Laravel: Service Provider Hook", 
  "Symfony: HttpKernel Event", 
  "PHP 8.4: Property Hooks (set/get)", 
  "Xdebug: Step Debugging Log", 
  "Redis: L2 Cache Persistent", 
  "Varnish: VCL Edge Logic", 
  "Database: Sharding Key Audit", 
  "Queues: Backpressure Manager", 
  "PHP 8.4: array_find Performance", 
  "Capstone: PRODUCTION READY"
];

const tests = [
  "optimize-autoloader", 
  "createMock", 
  "expect(", 
  "infection", 
  "readonly class", 
  "AggregateRoot", 
  "applyEvent", 
  "factory", 
  "Strategy", 
  "ContainerInterface", 
  "autowire", 
  "register()", 
  "HttpKernel", 
  "set =>", 
  "xdebug", 
  "Redis", 
  "vcl", 
  "shard", 
  "Backpressure", 
  "array_find", 
  "PRODUCTION READY"
];

export const practice = {
  php: titles.map((t, i) => generateEcoLab(i + 1, t, tests[i]))
};