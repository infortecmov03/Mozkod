import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  // PILAR 1: Paradigma e Expressividade
  { id: "rb-m1", title: "Ruby Philosophy: Developer Happiness", content: "Entenda porquê a elegância do código é uma métrica de engenharia.", quizId: "rb-mq1" },
  { id: "rb-m2", title: "Blocks, Procs & Lambdas", content: "Domínio total sobre closures e execução diferida.", quizId: "rb-mq2" },
  { id: "rb-m3", title: "Everything is an Object", content: "A pureza absoluta do modelo de objetos do Ruby.", quizId: "rb-mq3" },
  { id: "rb-m4", title: "Mixins & Modules", content: "Composição de comportamento sobre herança múltipla.", quizId: "rb-mq4" },
  { id: "rb-m5", title: "Message Passing and Dispatch", content: "Como o Ruby resolve métodos dinamicamente.", quizId: "rb-mq5" },
  { id: "rb-m6", title: "Domain Specific Languages (DSL)", content: "Criando linguagens como o RSpec ou Rails.", quizId: "rb-mq6" },
  { id: "rb-m7", title: "Advanced Enumerable", content: "Manipulação de dados funcional de alto nível.", quizId: "rb-mq7" },

  // PILAR 2: Concorrência e Performance
  { id: "rb-m8", title: "Fibers and Async Ruby", content: "Concorrência leve e cooperativa para I/O bound.", quizId: "rb-mq8" },
  { id: "rb-m9", title: "Ractors: The GIL-free Future", content: "Paralelismo real entre múltiplos cores em Ruby 3.", quizId: "rb-mq9" },
  { id: "rb-m10", title: "GVL (Global VM Lock) Internals", content: "Como o Ruby gere threads do sistema operativo.", quizId: "rb-mq10" },
  { id: "rb-m11", title: "YJIT (Yet Another JIT)", content: "A revolução da performance do Shopify no motor Ruby.", quizId: "rb-mq11" },
  { id: "rb-m12", title: "ObjectSpace & Memory Profiling", content: "Identificando vazamentos de memória em apps Rails.", quizId: "rb-mq12" },
  { id: "rb-m13", title: "Compacting Garbage Collector", content: "Reduzindo a fragmentação de memória em sistemas long-running.", quizId: "rb-mq13" },
  { id: "rb-m14", title: "Performance Benchmarking (IPS)", content: "Medindo iterações por segundo cientificamente.", quizId: "rb-mq14" },

  // PILAR 3: Internals e Metaprogramação
  { id: "rb-m15", title: "Metaprogramming: Singleton Classes", content: "Acedendo à classe oculta de cada objeto.", quizId: "rb-mq15" },
  { id: "rb-m16", title: "Method Missing & Define Method", content: "Criação dinâmica de APIs em tempo de execução.", quizId: "rb-mq16" },
  { id: "rb-m17", title: "Refinements: Safe Monkey Patching", content: "Modificando classes base sem afetar o sistema global.", quizId: "rb-mq17" },
  { id: "rb-m18", title: "C Extensions: Writing NATIVE Gems", content: "Integrando Ruby com bibliotecas C para velocidade pura.", quizId: "rb-mq18" },
  { id: "rb-m19", title: "Abstract Syntax Tree (AST)", content: "Analisando o código fonte como uma estrutura de dados.", quizId: "rb-mq19" },
  { id: "rb-m20", title: "Rails Internals: ActiveSupport", content: "Explorando as extensões que tornam o Rails 'mágico'.", quizId: "rb-mq20" },
  { id: "rb-m21", title: "Projeto Final: Rails API Master", content: "Construção de uma app master com deploy no Fly.io.", quizId: "rb-mq21" }
];
