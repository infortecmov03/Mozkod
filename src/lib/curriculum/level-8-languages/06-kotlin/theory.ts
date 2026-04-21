
import type { TheoryLesson } from '../../types';

const kotlinTitles = [
  "Fase 1: Sintaxe Concisa e Null Safety",
  "Fase 1: Data Classes e When Expressions",
  "Fase 2: Extension Functions e Operator Overloading",
  "Fase 2: Higher-order Functions e Inline Classes",
  "Fase 2: POO: Sealed Classes e Companion Objects",
  "Fase 2: Delegation (by) e Property Wrappers",
  "Fase 2: Collections e Sequences (Lazy Evaluation)",
  "Fase 3: Coroutines: Fundamentos e Suspensão",
  "Fase 3: Structured Concurrency e Scopes",
  "Fase 3: Channels e Flow (Cold vs Hot Streams)",
  "Fase 3: Generics: Reified e Variance (In/Out)",
  "Fase 3: Building DSLs e Scope Functions",
  "Fase 3: Kotlin Multiplatform (KMP) Mobile",
  "Fase 4: Android Lifecycle e ViewModel",
  "Fase 4: Jetpack Compose: UI Declarativa",
  "Fase 4: Persistência com Room e Networking com Retrofit",
  "Fase 4: Injeção de Dependência com Hilt/Koin",
  "Fase 4: Android Clean Architecture e MVI",
  "Fase 4: Unit Testing com MockK e Turbine",
  "Fase 4: Performance e Profiling em Android",
  "Fase 4: Capstone: Deploy de App Multiplataforma"
];

export const lessons: TheoryLesson[] = kotlinTitles.map((title, i) => ({
  id: `kt-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📱 Kotlin Master: ${title}</h2><p>Da sintaxe moderna ao desenvolvimento Android e multiplataforma de alta performance.</p></div>`,
  quizId: `kt-mq${i + 1}`
}));
