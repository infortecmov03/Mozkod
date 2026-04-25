import type { TheoryLesson } from '../../types';

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

export const lessons: TheoryLesson[] = phpTitles.map((title, i) => ({
  id: `php-m${i + 1}`,
  title: title,
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🐘 PHP Master: ${title.split(': ')[1]}</h2>
        <p class="text-lg leading-relaxed opacity-90">
          Bem-vindo à engenharia de alta fidelidade. Nesta lição, exploramos os detalhes profundos do <strong>${title.split(': ')[1]}</strong>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">Visão Técnica Master</h3>
        <p class="text-sm leading-relaxed">
          O desenvolvimento de sistemas de larga escala em PHP exige o domínio do motor de execução. Entender o custo de cada operação e como o interpretador otimiza o código na memória é o que separa um programador de um arquiteto.
        </p>
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
           <h4 class="font-bold text-indigo-400 mb-2">🚀 O Objetivo desta Lição</h4>
           <p class="text-xs opacity-70">
             Garantir a integridade, performance e segurança do <strong>High-Scale Event Server</strong>, o projeto central desta trilha.
           </p>
        </div>
      </section>
    </div>
  `,
  quizId: `php-mq${i + 1}`,
  enableInteractive: true
}));
