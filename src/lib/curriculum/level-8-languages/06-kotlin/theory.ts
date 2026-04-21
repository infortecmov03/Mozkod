
import { lesson as l1 } from './theory/01-null-safety-engine';
import { lesson as l8 } from './theory/08-coroutines-suspension';
import { lesson as l15 } from './theory/15-compiler-plugins-ksp';

const kotlinMasterTitles = [
  "Extension Functions & Property Delegates", "DSL Construction with Lambda Receivers", 
  "Delegation Pattern: Class vs Property", "Sealed Interfaces & Data Classes Internals", 
  "Inline Classes & Value Types (Project Valhalla)", "Generics: Reified, Variance & Covariance", 
  "Structured Concurrency & Job Lifecycle", "Flows & Cold/Hot Streams", "Channels & Select Expressions", 
  "Shared Mutable State & Mutex", "Testing Coroutines & Dispatchers", "KMP: Kotlin Multiplatform Architecture", 
  "Kotlin Compiler (K2) Internals", "Bytecode & Metadata Inspection", "Compose Compiler & Recomposition", 
  "Serialization & ProtoBuf Internals", "GraalVM Native Image with Kotlin", "Contract API: Compiler Hints"
];

export const lessons = [
  l1,
  ...kotlinMasterTitles.slice(0, 6).map((title, i) => ({
    id: `kt-m${i + 2}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📱 Kotlin Master: ${title}</h2><p>Dominando as funcionalidades expressivas e seguras da linguagem para mobile e backend.</p></div>`,
    quizId: `kt-mq${i + 2}`
  })),
  l8,
  ...kotlinMasterTitles.slice(6, 12).map((title, i) => ({
    id: `kt-m${i + 9}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📱 Kotlin Master: ${title}</h2><p>Concorrência massiva e gestão de fluxos de dados com Coroutines.</p></div>`,
    quizId: `kt-mq${i + 9}`
  })),
  l15,
  ...kotlinMasterTitles.slice(12).map((title, i) => ({
    id: `kt-m${i + 16}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📱 Kotlin Master: ${title}</h2><p>Arquitetura do compilador K2 e integração nativa de alta performance.</p></div>`,
    quizId: `kt-mq${i + 16}`
  }))
];
