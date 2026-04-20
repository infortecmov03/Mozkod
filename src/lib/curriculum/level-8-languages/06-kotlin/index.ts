
import type { KnowledgeArea, TheoryLesson } from '../../types';

const lessons: TheoryLesson[] = [
  { id: "kt-m1", title: "Kotlin Philosophy & Multiplatform", content: "<p>KMP e interoperabilidade total com Java.</p>", quizId: "kt-mq1" },
  { id: "kt-m2", title: "Null Safety & Type Inference", content: "<p>O fim do NullPointerException com tipos anláveis.</p>", quizId: "kt-mq2" },
  { id: "kt-m3", title: "Extension Functions & Properties", content: "<p>Expandindo classes sem herança.</p>", quizId: "kt-mq3" },
  { id: "kt-m4", title: "Coroutines: Fundamentos", content: "<p>Programação assíncrona não-bloqueante.</p>", quizId: "kt-mq4" },
  { id: "kt-m5", title: "Coroutines: Flows & Channels", content: "<p>Streams reactivos e comunicação entre coroutines.</p>", quizId: "kt-mq5" },
  { id: "kt-m6", title: "Functional Programming (Arrow)", content: "<p>Monads e conceitos funcionais puros em Kotlin.</p>", quizId: "kt-mq6" },
  { id: "kt-m7", title: "DSL Construction", content: "<p>Criando linguagens de domínio específico com Type-safe builders.</p>", quizId: "kt-mq7" },
  { id: "kt-m8", title: "Jetpack Compose Internals", content: "<p>Reatividade e desenho de UIs modernas no Android.</p>", quizId: "kt-mq8" },
  { id: "kt-m9", title: "Backend com Ktor", content: "<p>Micro-serviços leves e rápidos usando coroutines.</p>", quizId: "kt-mq9" },
  { 
    id: "kt-m10", 
    title: "Projeto Final: Ktor API & Deploy no Railway", 
    youtubeVideoId: "gI-qXk7XojA",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">📱 Kotlin Mastery Project</h2>
        <p>Cria um servidor de notificações com Ktor e publica-o usando <strong>Railway</strong> e GitHub Actions.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-primary">1. Repo & KTS</h3>
          <p class="text-sm text-muted-foreground">Sobe o código para o GitHub. Usa Kotlin Script (.kts) para o build.</p>
          <h3 class="font-bold text-primary">2. CI/CD Pipeline</h3>
          <p class="text-sm text-muted-foreground">Configura uma GitHub Action que corre os testes e gera o artefato a cada tag.</p>
        </div>
      </div>
    `, 
    quizId: "kt-mq10" 
  }
];

export const kotlinMaster: KnowledgeArea = {
  id: 'lang-kotlin-master',
  title: '06. Kotlin Master',
  description: 'Desenvolvimento moderno para Android e Backend robusto.',
  load: '40h',
  iconName: 'Smartphone',
  theory: lessons,
  practice: {
    kotlin: [
      {
        id: 'kt-p1',
        language: 'kotlin',
        title: 'Lab: Coroutines basic',
        description: 'Lançando tarefas assíncronas.',
        statement: 'Use launch(Dispatchers.IO) para uma tarefa.',
        template: 'scope.launch(Dispatchers.IO) { }',
        detailedExplanation: '<p>Dispatchers.IO é otimizado para operações de entrada/saída.</p>',
        objectives: [{ id: 'obj1', description: 'Usar launch', test: 'launch' }]
      }
    ]
  },
  quizzes: []
};
