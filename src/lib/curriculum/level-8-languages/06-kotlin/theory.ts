
import type { TheoryLesson } from '../../types';

const kotlinTitles = [
  // FASE 1: Fundamentos (1-4)
  "Fase 1: Sintaxe Concisa, Type Inference e Null Safety",
  "Fase 1: Data Classes e String Templates de Elite",
  "Fase 1: Ranges, Progressions e Estruturas de Controlo",
  "Fase 1: When Expressions e Pattern Matching Nativo",
  
  // FASE 2: Intermediário (5-9)
  "Fase 2: Funções Especiais: Default, Named e Infix",
  "Fase 2: Operator Overloading e Extension Functions",
  "Fase 2: Higher-order Functions e Inline Performance",
  "Fase 2: Collections Framework: Immutable vs Mutable",
  "Fase 2: POO Kotlin: Sealed Classes e Companion Objects",
  
  // FASE 3: Avançado (10-15)
  "Fase 3: Delegation: Class Delegation e Property Delegates",
  "Fase 3: Coroutines Master: Suspensão e Contextos",
  "Fase 3: Structured Concurrency e Scopes de Execução",
  "Fase 3: Channels e Flow: Streams Assíncronas",
  "Fase 3: Generics Avançado: Reified, In e Out",
  "Fase 3: Building DSLs e Scope Functions (let, apply)",
  
  // FASE 4: Especialização Android & Backend (16-21)
  "Fase 4: Kotlin Multiplatform (KMP) e Compose",
  "Fase 4: Android Lifecycle, ViewModel e Navigation",
  "Fase 4: Persistência com Room e Networking com Retrofit",
  "Fase 4: Injeção de Dependência com Hilt e Dagger",
  "Fase 4: Clean Architecture, MVVM e MVI em Kotlin",
  "Fase 4: Capstone: Deploy de Sync Engine Multiplataforma"
];

export const lessons: TheoryLesson[] = kotlinTitles.map((title, i) => ({
  id: `kt-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📱 Kotlin Master: ${title}</h2><p>Exploração profunda da linguagem que revolucionou o Android e o desenvolvimento de sistemas seguros e expressivos.</p></div>`,
  quizId: `kt-mq${i + 1}`
}));
