
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  { id: "go-m1", title: "Go Philosophy & Tooling", content: "<p>Simplicidade e a Standard Library poderosa.</p>", quizId: "go-mq1" },
  { id: "go-m2", title: "Pointers & Memory", content: "<p>Gestão eficiente de memória em Go.</p>", quizId: "go-mq2" },
  { id: "go-m3", title: "Interfaces & Duck Typing", content: "<p>Tipagem implícita e polimorfismo.</p>", quizId: "go-mq3" },
  { id: "go-m4", title: "Goroutines: Concorrência Nativa", content: "<p>Como Go gere milhões de threads leves.</p>", quizId: "go-mq4" },
  { id: "go-m5", title: "Channels & CSP Model", content: "<p>Comunicação segura entre processos concorrentes.</p>", quizId: "go-mq5" },
  { id: "go-m6", title: "Standard Library Net/HTTP", content: "<p>Servidores web de alta performance sem frameworks.</p>", quizId: "go-mq6" },
  { id: "go-m7", title: "Context & Timeouts", content: "<p>Gestão de ciclo de vida de pedidos.</p>", quizId: "go-mq7" },
  { id: "go-m8", title: "Generics em Go", content: "<p>Abstrações seguras com Go 1.18+.</p>", quizId: "go-mq8" },
  { id: "go-m9", title: "Performance Profiling", content: "<p>Uso de pprof para otimização.</p>", quizId: "go-mq9" },
  { 
    id: "go-m10", 
    title: "Projeto Final: Scraper Concorrente e Deploy", 
    youtubeVideoId: "rXc_A7G43m0",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">☁️ Go Cloud Master</h2>
        <p>Cria um Web Scraper paralelo e publica no <strong>Fly.io</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-blue-400">1. Go Modules</h3>
          <p class="text-sm">Inicia com go mod init.</p>
          <h3 class="font-bold text-blue-400">2. Docker Multi-stage</h3>
          <p class="text-sm">Gera um binário estático pequeno.</p>
          <h3 class="font-bold text-blue-400">3. Deploy Fly.io</h3>
          <p class="text-sm">Lança a app globalmente via CLI.</p>
        </div>
      </div>
    `, 
    quizId: "go-mq10" 
  }
];
