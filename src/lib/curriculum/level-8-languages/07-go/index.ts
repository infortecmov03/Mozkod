
import type { KnowledgeArea, TheoryLesson } from '../../types';

const lessons: TheoryLesson[] = [
  { id: "go-m1", title: "Go Philosophy & Tooling", content: "<p>Simplicidade, pragmatismo e a força da Standard Library.</p>", quizId: "go-mq1" },
  { id: "go-m2", title: "Pointers & Memory Efficiency", content: "<p>Gestão direta mas segura de memória sem aritmética de ponteiros perigosa.</p>", quizId: "go-mq2" },
  { id: "go-m3", title: "Interfaces e Tipagem Implícita", content: "<p>O poder do Duck Typing estático em Go.</p>", quizId: "go-mq3" },
  { id: "go-m4", title: "Goroutines: O Segredo da Concorrência", content: "<p>Threads leves geridas pelo runtime de Go.</p>", quizId: "go-mq4" },
  { id: "go-m5", title: "Channels & Select", content: "<p>Comunicação segura (CSP) entre processos concorrentes.</p>", quizId: "go-mq5" },
  { id: "go-m6", title: "Standard Library: Net/HTTP", content: "<p>Construindo servidores web de alta performance sem frameworks.</p>", quizId: "go-mq6" },
  { id: "go-m7", title: "Context Pattern", content: "<p>Gestão de cancelamento, timeouts e metadados entre chamadas.</p>", quizId: "go-mq7" },
  { id: "go-m8", title: "Generics em Go", content: "<p>Abstrações poderosas e seguras introduzidas no Go 1.18.</p>", quizId: "go-mq8" },
  { id: "go-m9", title: "Profiling & Performance Tuning", content: "<p>Uso de pprof para encontrar leaks e gargalos.</p>", quizId: "go-mq9" },
  { 
    id: "go-m10", 
    title: "Projeto Final: Micro-serviço Concorrente no Fly.io", 
    youtubeVideoId: "rXc_A7G43m0",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">☁️ Go Cloud Native Mastery</h2>
        <p>Cria um Web Scraper concorrente e publica-o como um serviço no <strong>Fly.io</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-blue-400">1. Go Modules & Git</h3>
          <p class="text-sm text-muted-foreground">Inicia o módulo com <code>go mod init</code>. Versiona no GitHub.</p>
          <h3 class="font-bold text-blue-400">2. Docker Multi-stage</h3>
          <p class="text-sm text-muted-foreground">Gera um binário estático e cria uma imagem Docker ultra-leve.</p>
          <h3 class="font-bold text-blue-400">3. Deploy Fly.io</h3>
          <p class="text-sm text-muted-foreground">Usa a CLI do Fly para lançar a app globalmente em segundos.</p>
        </div>
      </div>
    `, 
    quizId: "go-mq10" 
  }
];

export const goMaster: KnowledgeArea = {
  id: 'lang-go-master',
  title: '07. Go Master',
  description: 'Simplicidade, concorrência nativa e sistemas de cloud de alta performance.',
  load: '40h',
  iconName: 'Cloud',
  theory: lessons,
  practice: {
    go: [
      {
        id: 'go-p1',
        language: 'go',
        title: 'Lab: Goroutines',
        description: 'Executando código em paralelo.',
        statement: 'Use a palavra-chave "go" antes da função.',
        template: 'go minhaFuncao()',
        detailedExplanation: '<p>A palavra-chave go inicia uma tarefa leve concorrente.</p>',
        objectives: [{ id: 'obj1', description: 'Usar keyword go', test: 'go ' }]
      }
    ]
  },
  quizzes: []
};
