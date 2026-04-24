
import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-php8-attributes';
import { lesson as l2 } from './theory/02-strong-typing-union-types';
import { lesson as l3 } from './theory/03-constructor-promotion';
import { lesson as l4 } from './theory/04-oop-advanced';
import { lesson as l8 } from './theory/08-swoole-concurrency';
import { lesson as l15 } from './theory/15-zend-engine-internals';

const phpTitles = [
  "Fase 1: PHP 8 Moderno: Atributos e Metadados",
  "Fase 1: Tipagem de Elite: Union, Intersection e DNF",
  "Fase 1: Constructor Promotion e Imutabilidade",
  "Fase 1: Enums e Algebraic Data Types",
  "Fase 2: Zend Engine: Opcodes e Ciclo de Vida",
  "Fase 2: Gestão de Memória: Reference Counting e Cycles",
  "Fase 2: PDO Master: Segurança e Transações ACID",
  "Fase 2: SPL Internals e Estruturas de Performance",
  "Fase 2: Reflection API e Introspecção Dinâmica",
  "Fase 3: Concorrência Cooperativa com Fibers",
  "Fase 3: Swoole & RoadRunner: Quebrando o CGI",
  "Fase 3: Sockets e Streams de Baixo Nível",
  "Fase 3: FFI: Invocando C e Rust do PHP",
  "Fase 3: Generators e Eficiência de Memória",
  "Fase 4: Arquitetura Hexagonal e DDD com PHP",
  "Fase 4: Dependency Injection e Auto-wiring",
  "Fase 4: Static Analysis: PHPStan Nível 9",
  "Fase 4: OpCache Tuning e JIT Performance",
  "Fase 4: Security: Proteção contra RCE e Injeção",
  "Fase 4: Microserviços com gRPC e PHP",
  "Fase 4: Capstone: Deploy de Event Server de Elite"
];

const sourceMap: Record<number, any> = {
  0: l1, 1: l2, 2: l3, 3: l4, 7: l8, 14: l15
};

export const lessons: TheoryLesson[] = phpTitles.map((title, i) => {
  if (sourceMap[i]) {
    return {
      ...sourceMap[i],
      id: `php-m${i + 1}`,
      title: title,
      quizId: `php-mq${i + 1}`,
      enableInteractive: true
    };
  }

  return {
    id: `php-m${i + 1}`,
    title: title,
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🐘 PHP Master: ${title}</h2>
          <p class="text-lg leading-relaxed opacity-90">
            Nesta fase avançada, exploramos como o PHP escala para milhões de pedidos usando arquiteturas modernas e o motor da Zend VM.
          </p>
        </div>
        <section class="p-6 bg-card border rounded-2xl">
          <h3 class="text-xl font-bold mb-4 text-accent">Engenharia de Backend Industrial</h3>
          <p class="text-sm leading-relaxed">
            O foco aqui é o <strong>Throughput</strong> e a <strong>Resiliência</strong>. Aprenderás a configurar o ambiente de produção, otimizar o OpCache e garantir que as transações do banco de dados seguem o padrão ACID sob alta concorrência.
          </p>
        </section>
      </div>
    `,
    quizId: `php-mq${i + 1}`,
    enableInteractive: true
  };
});
