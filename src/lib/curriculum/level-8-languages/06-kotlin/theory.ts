import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  // PILAR 1: Paradigma e Expressividade
  { id: "kt-m1", title: "Kotlin Philosophy & Interop", content: "Design pragmático e convivência perfeita com o ecossistema Java.", quizId: "kt-mq1" },
  { id: "kt-m2", title: "Type System & Null Safety", content: "Como o Kotlin eliminou o erro de um bilião de dólares.", quizId: "kt-mq2" },
  { id: "kt-m3", title: "Extension Functions & Properties", content: "Expandindo APIs de terceiros sem herança.", quizId: "kt-mq3" },
  { id: "kt-m4", title: "Sealed Classes & Data Objects", content: "Modelagem de dados moderna e exaustiva.", quizId: "kt-mq4" },
  { id: "kt-m5", title: "DSL Construction & Lambdas with Receiver", content: "Criando linguagens de domínio específico poderosas.", quizId: "kt-mq5" },
  { id: "kt-m6", title: "Delegated Properties", content: "Reutilização de lógica de getters e setters.", quizId: "kt-mq6" },
  { id: "kt-m7", title: "Inline Classes & Performance", content: "Abstrações de tipos com custo de runtime zero.", quizId: "kt-mq7" },

  // PILAR 2: Concorrência e Performance
  { id: "kt-m8", title: "Coroutines: Suspending Functions", content: "Fundamentos da programação não-bloqueante.", quizId: "kt-mq8" },
  { id: "kt-m9", title: "Coroutine Scopes & Structured Concurrency", content: "Gestão segura do ciclo de vida de tarefas assíncronas.", quizId: "kt-mq9" },
  { id: "kt-m10", title: "Channels & Select Expression", content: "Comunicação entre coroutines baseada no modelo CSP.", quizId: "kt-mq10" },
  { id: "kt-m11", title: "Flows: Cold & Hot Streams", content: "Processamento de fluxos de dados assíncronos (StateFlow/SharedFlow).", quizId: "kt-mq11" },
  { id: "kt-m12", title: "Concurrency Debugging", content: "Identificando deadlocks e vazamentos em coroutines.", quizId: "kt-mq12" },
  { id: "kt-m13", title: "Memory Management on Android/JVM", content: "Otimização de heap para apps móveis de alta performance.", quizId: "kt-mq13" },
  { id: "kt-m14", title: "Multiplatform (KMP) Architecture", content: "Partilhando lógica de negócio entre iOS e Android.", quizId: "kt-mq14" },

  // PILAR 3: Internals e Metaprogramação
  { id: "kt-m15", title: "Kotlin Compiler (K2) Architecture", content: "Como o novo frontend do compilador acelera a build.", quizId: "kt-mq15" },
  { id: "kt-m16", title: "Symbol Processing (KSP)", content: "A evolução das anotações: geração de código eficiente.", quizId: "kt-mq16" },
  { id: "kt-m17", title: "Reflection vs Introspection", content: "Manipulando metadados no JVM e Native.", quizId: "kt-mq17" },
  { id: "kt-m18", title: "Kotlin/Native & Memory Model", content: "Como o Kotlin corre sem JVM em sistemas nativos.", quizId: "kt-mq18" },
  { id: "kt-m19", title: "Bytecode Generation & Inlining", content: "Análise do código gerado para otimização extrema.", quizId: "kt-mq19" },
  { id: "kt-m20", title: "GraalVM & Ahead-of-Time (AOT)", content: "Compilando Kotlin para binários nativos de arranque instantâneo.", quizId: "kt-mq20" },
  { id: "kt-m21", title: "Projeto Final: Multiplatform App", content: "Construção de uma app KMP com deploy master.", quizId: "kt-mq21" }
];
