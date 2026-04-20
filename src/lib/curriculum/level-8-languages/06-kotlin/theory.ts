
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  { id: "kt-m1", title: "Kotlin Philosophy & Interop", content: "<p>Interoperabilidade total com Java e design moderno.</p>", quizId: "kt-mq1" },
  { id: "kt-m2", title: "Null Safety & Type System", content: "<p>O fim do NullPointerException via tipos anláveis.</p>", quizId: "kt-mq2" },
  { id: "kt-m3", title: "Extension Functions", content: "<p>Expandindo classes sem herança.</p>", quizId: "kt-mq3" },
  { id: "kt-m4", title: "Coroutines Fundamentos", content: "<p>Programação assíncrona não-bloqueante.</p>", quizId: "kt-mq4" },
  { id: "kt-m5", title: "Flows & Reactive Streams", content: "<p>Streams assíncronos frios e quentes em Kotlin.</p>", quizId: "kt-mq5" },
  { id: "kt-m6", title: "Kotlin Multiplatform (KMP)", content: "<p>Partilha de código entre Android, iOS e Web.</p>", quizId: "kt-mq6" },
  { id: "kt-m7", title: "DSL Construction", content: "<p>Criando linguagens de domínio específico seguras.</p>", quizId: "kt-mq7" },
  { id: "kt-m8", title: "Jetpack Compose Internals", content: "<p>Arquitetura de UI declarativa moderna.</p>", quizId: "kt-mq8" },
  { id: "kt-m9", title: "Backend com Ktor", content: "<p>Microserviços ultra-leves baseados em coroutines.</p>", quizId: "kt-mq9" },
  { 
    id: "kt-m10", 
    title: "Projeto Final: Ktor App & Deploy", 
    youtubeVideoId: "gI-qXk7XojA",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">📱 Kotlin Master Project</h2>
        <p>Cria um servidor de chat em tempo real com Ktor e publica-o.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-primary">1. Repo & Gradle</h3>
          <p class="text-sm">Configura o build.gradle.kts e versiona no GitHub.</p>
          <h3 class="font-bold text-primary">2. WebSockets</h3>
          <p class="text-sm">Implementa comunicação bi-direcional.</p>
          <h3 class="font-bold text-primary">3. Deploy Railway</h3>
          <p class="text-sm">Publica o servidor Ktor usando o Railway.</p>
        </div>
      </div>
    `, 
    quizId: "kt-mq10" 
  }
];
