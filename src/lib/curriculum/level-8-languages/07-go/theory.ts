
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  // PILAR 1: Paradigma e Expressividade (01-07)
  { id: "go-m1", title: "Interfaces Implícitas e Polimorfismo", content: "O 'Duck Typing' estático do Go e como desenhar abstrações limpas.", quizId: "go-mq1" },
  { id: "go-m2", title: "Composição vs Herança", content: "Uso de Embedded Structs para reutilização de código idiomática.", quizId: "go-mq2" },
  { id: "go-m3", title: "Error Handling Idiomático", content: "Porquê 'if err != nil' é superior a exceções em engenharia.", quizId: "go-mq3" },
  { id: "go-m4", title: "Defer, Panic e Recover", content: "Gestão robusta do fluxo de execução e pânicos.", quizId: "go-mq4" },
  { id: "go-m5", title: "Generics em Go 1.18+", content: "Abstrações de tipos seguras sem perda de performance.", quizId: "go-mq5" },
  { id: "go-m6", title: "Slices e Maps: Anatomia Interna", content: "Como o Go gere arrays dinâmicos e tabelas hash.", quizId: "go-mq6" },
  { id: "go-m7", title: "Pointers e Pass-by-value", content: "Entendendo quando usar ponteiros para evitar cópias desnecessárias.", quizId: "go-mq7" },

  // PILAR 2: Concorrência e Performance (08-14)
  { id: "go-m8", title: "Goroutines e o Modelo CSP", content: "Não comunique partilhando memória; partilhe memória comunicando.", quizId: "go-mq8" },
  { id: "go-m9", title: "Channels: Buffered vs Unbuffered", content: "Sincronização e buffering para fluxos de dados.", quizId: "go-mq9" },
  { id: "go-m10", title: "O Escalonador GMP", content: "Como o runtime do Go mapeia M goroutines em N threads do SO.", quizId: "go-mq10" },
  { id: "go-m11", title: "Select e Timeouts", content: "Controlo de fluxo concorrente e gestão de cancelamento.", quizId: "go-mq11" },
  { id: "go-m12", title: "Race Detection e Sync Package", content: "Identificação de condições de corrida e uso de Mutex/WaitGroups.", quizId: "go-mq12" },
  { id: "go-m13", title: "Context e Propagation", content: "Propagação de sinais de cancelamento e prazos em redes.", quizId: "go-mq13" },
  { id: "go-m14", title: "Go GC Pacer e Memory Profiling", content: "Entendendo o Garbage Collector concorrente do Go.", quizId: "go-mq14" },

  // PILAR 3: Internals e Metaprogramação (15-21)
  { id: "go-m15", title: "Escape Analysis", content: "Como o compilador decide entre Stack ou Heap para variáveis.", quizId: "go-mq15" },
  { id: "go-m16", title: "Inlining e Compiler Optimizations", content: "Escrevendo código que o compilador consegue otimizar.", quizId: "go-mq16" },
  { id: "go-m17", title: "Reflect Package e Metaprogramação", content: "Inspecionando tipos e valores em tempo de execução.", quizId: "go-mq17" },
  { id: "go-m18", title: "Unsafe Package e Cgo", content: "Acedendo a memória diretamente e integrando com bibliotecas C.", quizId: "go-mq18" },
  { id: "go-m19", title: "Linkname e Runtime Internals", content: "Acedendo a funções privadas do runtime (Uso avançado).", quizId: "go-mq19" },
  { id: "go-m20", title: "Assembly em Go", content: "Escrevendo funções em Plan9 Assembly para performance extrema.", quizId: "go-mq20" },
  { id: "go-m21", title: "Projeto Final: Gateway de API de Alta Performance", content: "Sistema distribuído real com deploy em Fly.io.", quizId: "go-mq21" }
];
