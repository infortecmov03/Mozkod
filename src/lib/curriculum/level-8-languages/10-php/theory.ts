
import type { TheoryLesson } from '../../types';

const phpTitles = [
  "Fase 1: PHP 8 Moderno: Atributos, Match e JIT",
  "Fase 1: Tipagem de Elite: Union, Intersection e DNF Types",
  "Fase 1: Constructor Promotion e Readonly Classes",
  "Fase 1: Enums e Algebraic Data Types no PHP",
  "Fase 2: Zend Engine: Opcodes, AST e Lifecycle",
  "Fase 2: Gestão de Memória: Reference Counting e Cycles",
  "Fase 2: PDO Master: Segurança e Transações ACID",
  "Fase 2: SPL Internals: Estruturas de Dados de Alta Performance",
  "Fase 2: Reflection API e Introspecção de Metadados",
  "Fase 3: Concorrência Cooperativa com Fibers",
  "Fase 3: Swoole & RoadRunner: Quebrando o Limite do FPM",
  "Fase 3: Streams e Network Sockets de Baixo Nível",
  "Fase 3: FFI: Invocando C e Rust diretamente do PHP",
  "Fase 3: Generators: Processamento Massivo de Dados",
  "Fase 4: Arquitetura Hexagonal e DDD com PHP",
  "Fase 4: Dependency Injection e Auto-wiring Internals",
  "Fase 4: Static Analysis: PHPStan Nível 9 e Psalm",
  "Fase 4: Performance: OpCache Tuning e Preloading",
  "Fase 4: Security: Proteção contra RCE e LFI/RFI",
  "Fase 4: Microserviços com gRPC e PHP",
  "Fase 4: Capstone: Deploy de High-Scale Event Server"
];

export const lessons: TheoryLesson[] = phpTitles.map((title, i) => ({
  id: `php-m${i + 1}`,
  title: title,
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🐘 Engenharia de Backend de Larga Escala
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O PHP moderno (8.x) é uma linguagem de alta performance. Nesta trilha Master, abandonamos o "PHP de scripts" para focar em <strong>Engenharia de Sistemas</strong>, concorrência e segurança de nível bancário.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">Tópico Master: ${title}</h3>
        <p class="text-sm">Exploração profunda dos mecanismos internos que permitem ao PHP servir milhões de pedidos simultâneos.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-4">🚀 Visão do Arquiteto</h4>
          <p class="text-sm leading-relaxed">
            Dominar o PHP Master exige entender a <strong>Zend VM</strong> e como os <strong>Opcodes</strong> são gerados. Ao final desta trilha, você será capaz de projetar infraestruturas <i>Cloud Native</i> resilientes e seguras.
          </p>
        </div>
      </section>
    </div>
  `,
  quizId: `php-mq${i + 1}`,
  enableInteractive: true
}));
