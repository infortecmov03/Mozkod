
import type { TheoryLesson } from '../../types';

const ecosystemTitles = [
  "Fase 1: Composer Master: Plugins e Autoloaders Customizados",
  "Fase 1: PHPUnit de Elite: Testes Unitários e Data Providers",
  "Fase 1: Pest PHP: Testes Funcionais e Fluidez",
  "Fase 1: Mocking & Test Double Patterns",
  "Fase 1: Mutation Testing com Infection",
  "Fase 2: Domain Driven Design (DDD) em PHP: Entidades e Agregados",
  "Fase 2: CQRS & Event Sourcing: Arquitetura de Eventos",
  "Fase 2: Design Patterns em PHP: Creational (Factory, Builder)",
  "Fase 2: Design Patterns em PHP: Behavioral (Strategy, Observer)",
  "Fase 2: PSR Standards: A Constituição da Interoperabilidade",
  "Fase 3: Laravel Internals: Service Providers e Facades",
  "Fase 3: Symfony Internals: Event Dispatcher e Kernel",
  "Fase 3: Middlewares e a Pipeline Pattern",
  "Fase 3: Profiling Industrial: Xdebug e Blackfire",
  "Fase 3: Estratégias de Cache: Redis, Memcached e L2",
  "Fase 4: Varnish e Proxies Reversos de Alta Performance",
  "Fase 4: Database Sharding e Read/Write Splitting em PHP",
  "Fase 4: Message Queues: RabbitMQ e Laravel Queues",
  "Fase 4: Realtime Web: WebSockets e Mercure/Centrifugo",
  "Fase 4: PHP 8.4+: Property Hooks e a Nova Sintaxe",
  "Fase 4: Capstone II: Infraestrutura Cloud-Native PHP"
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
          No nível Master, o PHP não é apenas uma linguagem; é um <strong>ecossistema industrial</strong>. Esta trilha foca nos padrões de arquitetura e ferramentas que sustentam as maiores plataformas do mundo.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">Tópico Master: ${title}</h3>
        <p class="text-sm">Exploração profunda de como aplicar este conceito em sistemas que processam milhões de transações diárias.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-4 flex items-center gap-2">
            🚀 Visão de Arquiteto
          </h4>
          <p class="text-sm leading-relaxed">
            Dominar ${title.split(': ')[1]} é o que separa um desenvolvedor que usa frameworks de um engenheiro que desenha infraestruturas escaláveis e resilientes.
          </p>
        </div>
      </section>
    </div>
  `,
  quizId: `php-eco-mq${i + 1}`,
  enableInteractive: true
}));
