import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-null-safety-master';
import { lesson as l2 } from './theory/02-extensions-delegates';

const kotlinTitles = [
  "Fase 1: Null Safety Internals e o Type System",
  "Fase 1: Extension Functions e Property Delegation",
  "Fase 1: Sealed Hierarchies e Pattern Matching (When)",
  "Fase 1: Functional Programming e Collections Framework",
  "Fase 2: Inline Classes e Otimização de Performance",
  "Fase 2: Coroutines Master: Suspensão e Scopes",
  "Fase 2: Structured Concurrency e Job Management",
  "Fase 2: Suspension Internals: A Máquina de Estados",
  "Fase 2: Flow API: Cold Streams e Operadores",
  "Fase 3: StateFlow e SharedFlow: Hot Streams",
  "Fase 3: Channels e Padrões de Comunicação",
  "Fase 3: Coroutine Context e Dispatchers",
  "Fase 3: Exception Handling e Supervision",
  "Fase 3: Kotlin Multiplatform (KMP) Architecture",
  "Fase 3: Kotlinx Serialization e Protocolos Binários",
  "Fase 4: Dependency Injection: Padrões de Elite",
  "Fase 4: KSP e Geração de Código em Compilação",
  "Fase 4: Reflection e Introspecção (kotlin-reflect)",
  "Fase 4: Advanced Generics: Variância e Reified",
  "Fase 4: Construindo DSLs Type-safe",
  "Fase 4: Capstone: Deploy do Sync Engine Multiplataforma"
];

const sourceMap: Record<number, any> = {
  0: l1, 1: l2
};

export const lessons: TheoryLesson[] = kotlinTitles.map((title, i) => {
  if (sourceMap[i]) {
    return {
      ...sourceMap[i],
      id: `kt-m${i + 1}`,
      title: title,
      quizId: `kt-mq${i + 1}`,
      enableInteractive: true
    };
  }

  return {
    id: `kt-m${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📱 Kotlin Master: ${title}</h2><p>Estudo aprofundado da linguagem para Android, Backend e Multiplataforma com rigor industrial.</p></div>`,
    quizId: `kt-mq${i + 1}`,
    enableInteractive: true
  };
});
