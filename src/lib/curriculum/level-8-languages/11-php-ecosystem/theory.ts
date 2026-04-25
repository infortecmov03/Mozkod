import type { TheoryLesson } from '../../types';

const ecosystemTitles = [
  "Fase 1: Composer Master: Autoloaders e Scripts",
  "Fase 1: PHPUnit Avançado: Mocks, Stubs e Providers",
  "Fase 1: Pest PHP: Testes Funcionais e Fluidez",
  "Fase 1: Mutation Testing: Auditoria com Infection",
  "Fase 1: Static Analysis: PHPStan e Psalm Nível 9",
  "Fase 2: Arquitetura Hexagonal: Ports & Adapters",
  "Fase 2: Domain Driven Design (DDD) em PHP",
  "Fase 2: CQRS e Event Sourcing: Sistemas de Eventos",
  "Fase 2: Design Patterns I: Padrões de Criação",
  "Fase 2: Design Patterns II: Padrões Comportamentais",
  "Fase 2: PSR Standards: A Constituição do PHP",
  "Fase 3: Dependency Injection e Contentores de Elite",
  "Fase 3: Framework Internals I: O Kernel do Laravel",
  "Fase 3: Framework Internals II: Symfony HttpKernel",
  "Fase 3: PHP 8.4+: Property Hooks e Asymmetric Visibility",
  "Fase 3: Profiling Industrial: Xdebug e Blackfire",
  "Fase 3: Caching Estratégico: Redis, Memcached e L2",
  "Fase 4: Varnish e Proxies Reversos de Alta Escala",
  "Fase 4: Database Sharding e Read/Write Splitting",
  "Fase 4: Message Queues: RabbitMQ e Resiliência",
  "Fase 4: Capstone II: Deploy Cloud-Native em Larga Escala"
];

export const lessons: TheoryLesson[] = ecosystemTitles.map((title, i) => ({
  id: `php-eco-t${i + 1}`,
  title: title,
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🐘 Ecossistema Profissional PHP
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Dominar o ecossistema é o que separa um desenvolvedor que usa ferramentas de um engenheiro que desenha <strong>soluções industriais</strong>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">Tópico Master: ${title}</h3>
        <p class="text-sm">Exploração profunda de como aplicar este conceito em sistemas que processam milhões de transações diárias, garantindo o desacoplamento e a estabilidade.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-4 flex items-center gap-2">
            🚀 Visão de Arquiteto
          </h4>
          <p class="text-sm leading-relaxed">
            Esta lição foca na <strong>manutenibilidade de longo prazo</strong> e na capacidade de escalar equipas e código simultaneamente.
          </p>
        </div>
      </section>
    </div>
  `,
  quizId: `php-eco-mq${i + 1}`,
  enableInteractive: true
}));
