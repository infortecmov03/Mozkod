
import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-php8-attributes';
import { lesson as l2 } from './theory/02-strong-typing-union-types';
import { lesson as l3 } from './theory/03-constructor-promotion';
import { lesson as l4 } from './theory/04-oop-advanced';
import { lesson as l5 } from './theory/05-zend-engine-internals';

const phpTitles = [
  "Fase 1: PHP 8 Attributes: Metadados Nativos de Elite",
  "Fase 1: Union Types e Tipagem Forte no PHP 8",
  "Fase 1: Constructor Property Promotion e Redução de Boilerplate",
  "Fase 1: Enums e Algebraic Data Types no PHP 8",
  "Fase 2: Zend Engine: Opcodes, AST e o Ciclo de Vida",
  "Fase 2: Gestão de Memória: Reference Counting e GC Internals",
  "Fase 2: PDO e Segurança: Prepared Statements e ACID",
  "Fase 2: Swoole: Concorrência Real e Servidores Assíncronos",
  "Fase 2: Reflection API: Introspecção de Classes e Atributos",
  "Fase 3: Fibers e Concorrência Cooperativa em PHP 8.1",
  "Fase 3: RoadRunner: PHP em Alta Escala com Workers de Go",
  "Fase 3: Sockets e Streams: Comunicação de Baixo Nível",
  "Fase 3: FFI: Chamando Funções C Nativa do PHP",
  "Fase 3: Generators: Iteração Massiva com Memória Constante",
  "Fase 3: Arquitetura Hexagonal em Projetos PHP",
  "Fase 4: Dependency Injection e Contentores de Serviço",
  "Fase 4: Análise Estática: PHPStan e Psalm de Nível 9",
  "Fase 4: JIT: Otimização de Silício e Benchmarking",
  "Fase 4: Segurança Avançada: RCE e Desserialização Insegura",
  "Fase 4: gRPC e Microserviços de Alta Disponibilidade",
  "Fase 4: Capstone: Deploy do High-Scale Event Server"
];

const sourceMap: Record<number, any> = {
  0: l1, 1: l2, 2: l3, 3: l4, 4: l5
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
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
            🐘 Engenharia PHP de Elite
          </h2>
          <p class="text-lg leading-relaxed opacity-90">
            Esta lição cobre o tópico avançado: <strong>${title.split(': ')[1]}</strong>. O foco está na performance, escalabilidade e segurança industrial.
          </p>
        </div>

        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">Visão Técnica</h3>
          <p class="text-sm leading-relaxed">No nível Master, entendemos que o PHP é uma linguagem compilada para Opcodes e que o uso de ferramentas como Swoole ou JIT altera radicalmente a performance do sistema.</p>
        </section>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Objetivo de Engenharia</h4>
          <p class="text-xs">Dominar os internals da linguagem para construir o <strong>CWM High-Scale Event Server</strong>, garantindo resiliência em ambientes de alta carga.</p>
        </div>
      </div>
    `,
    quizId: `php-mq${i + 1}`,
    enableInteractive: true
  };
});
