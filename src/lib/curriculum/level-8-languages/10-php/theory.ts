import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  // PILAR 1: Paradigma e Expressividade
  { id: "php-m1", title: "PHP 8.x Revolution: Attributes", content: "Anotações nativas e metadados estruturados.", quizId: "php-mq1" },
  { id: "php-m2", title: "Strong Typing & Union Types", content: "Segurança de tipos profissional no motor dinâmico.", quizId: "php-mq2" },
  { id: "php-m3", title: "Constructor Property Promotion", content: "Código limpo e redução de boilerplate massiva.", quizId: "php-mq3" },
  { id: "php-m4", title: "Enums & Readonly Classes", content: "Modelagem de domínio robusta e imutável.", quizId: "php-mq4" },
  { id: "php-m5", title: "Advanced Fibers", content: "Primitivas de concorrência cooperativa nativas.", quizId: "php-mq5" },
  { id: "php-m6", title: "Generics via Static Analysis", content: "Como PHPStan/Psalm emulam genéricos de alta performance.", quizId: "php-mq6" },
  { id: "php-m7", title: "Closure Binding & Scopes", content: "Manipulação avançada de funções anónimas.", quizId: "php-mq7" },

  // PILAR 2: Concorrência e Performance
  { id: "php-m8", title: "Swoole & OpenSwoole", content: "PHP como servidor persistente de alta performance.", quizId: "php-mq8" },
  { id: "php-m9", title: "OpCache & Preloading", content: "Otimização do motor Zend para execução instantânea.", quizId: "php-mq9" },
  { id: "php-m10", title: "Parallel Extension", content: "Execução multi-thread real em PHP CLI.", quizId: "php-mq10" },
  { id: "php-m11", title: "Redis as Primary Cache", content: "Escalando sessões e dados para milhões de acessos.", quizId: "php-mq11" },
  { id: "php-m12", title: "I/O Multiplexing with Amp/ReactPHP", content: "Ecossistemas assíncronos orientados a eventos.", quizId: "php-mq12" },
  { id: "php-m13", title: "Just-In-Time (JIT) Compiler", content: "Explorando a aceleração de CPU do PHP 8.", quizId: "php-mq13" },
  { id: "php-m14", title: "Memory Profiling & GC Tuning", content: "Otimizando o ciclo de vida de objetos em larga escala.", quizId: "php-mq14" },

  // PILAR 3: Internals e Metaprogramação
  { id: "php-m15", title: "Zend Engine Architecture", content: "Como o PHP compila código em Opcodes.", quizId: "php-mq15" },
  { id: "php-m16", title: "PHP FFI (Foreign Function Interface)", content: "Acedendo a bibliotecas C diretamente do PHP.", quizId: "php-mq16" },
  { id: "php-m17", title: "Reflection API Master", content: "Construindo containers de injeção de dependência.", quizId: "php-mq17" },
  { id: "php-m18", title: "Writing C Extensions for PHP", content: "Expandindo o core da linguagem para performance máxima.", quizId: "php-mq18" },
  { id: "php-m19", title: "Laravel/Symfony Service Container", content: "Arquitetura interna de frameworks de elite.", quizId: "php-mq19" },
  { id: "php-m20", title: "Security: Binary Safety & Taint Analysis", content: "Proteção profunda contra injeção e ataques complexos.", quizId: "php-mq20" },
  { id: "php-m21", title: "Projeto Final: Swoole Real-time API", content: "Construção de uma API master com deploy profissional.", quizId: "php-mq21" }
];
