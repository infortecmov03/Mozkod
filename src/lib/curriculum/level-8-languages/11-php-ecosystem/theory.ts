import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-composer-master';
import { lesson as l2 } from './theory/02-phpunit-advanced';
import { lesson as l3 } from './theory/03-pest-php';
import { lesson as l4 } from './theory/04-mutation-testing';
import { lesson as l5 } from './theory/05-ddd-strategic';
import { lesson as l6 } from './theory/06-ddd-tactical';
import { lesson as l7 } from './theory/07-cqrs-event-sourcing';
import { lesson as l8 } from './theory/08-creational-patterns';
import { lesson as l9 } from './theory/09-behavioral-patterns';
import { lesson as l14 } from './theory/14-property-hooks';

const titles = [
  "Fase 1: Composer Master: Autoloaders, Scripts e Plugins",
  "Fase 1: PHPUnit Avançado: Mocks, Stubs e Data Providers",
  "Fase 1: Pest PHP: O Futuro dos Testes Funcionais",
  "Fase 1: Mutation Testing: Auditoria com Infection",
  "Fase 2: DDD Estratégico: Bounded Contexts e Linguagem Ubíqua",
  "Fase 2: DDD Tático: Entities, Value Objects e Aggregates",
  "Fase 2: CQRS e Event Sourcing: O Estado como História",
  "Fase 2: Design Patterns I: Padrões de Criação (Creational)",
  "Fase 2: Design Patterns II: Padrões Comportamentais (Behavioral)",
  "Fase 2: PSR Standards: A Constituição do PHP Moderno",
  "Fase 3: Dependency Injection e Contentores de Elite",
  "Fase 3: Framework Internals I: O Kernel do Laravel",
  "Fase 3: Framework Internals II: Symfony HttpKernel",
  "Fase 3: PHP 8.4+: Property Hooks e Asymmetric Visibility",
  "Fase 3: Profiling Industrial: Xdebug, Blackfire e Tideways",
  "Fase 3: Caching Estratégico: Redis, Memcached e L2",
  "Fase 4: Varnish e Proxies Reversos de Alta Escala",
  "Fase 4: Database Sharding e Read/Write Splitting",
  "Fase 4: Message Queues: RabbitMQ, Kafka e Resiliência",
  "Fase 4: PHP 8.4+: Novidades e Otimizações de Linguagem",
  "Fase 4: Capstone II: Deploy Cloud-Native em Larga Escala"
];

export const lessons: TheoryLesson[] = titles.map((title, i) => {
  const idNum = i + 1;
  const sourceMap: Record<number, any> = { 
    1: l1, 2: l2, 3: l3, 4: l4, 5: l5, 6: l6, 7: l7, 8: l8, 9: l9, 14: l14 
  };
  
  if (sourceMap[idNum]) return sourceMap[idNum];

  return {
    id: `php-eco-t${idNum}`,
    title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐘 Ecossistema PHP Master: ${title}</h2><p>Estudo aprofundado sobre padrões de arquitetura, qualidade e infraestrutura moderna.</p></div>`,
    quizId: `php-eco-mq${idNum}`,
    enableInteractive: true
  };
});
