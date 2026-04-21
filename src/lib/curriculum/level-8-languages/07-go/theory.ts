
import type { TheoryLesson } from '../../types';

const goTitles = [
  // FASE 1: Fundamentos (1-4)
  "Fase 1: Pacotes, Imports e Gestão de Módulos",
  "Fase 1: Variáveis, Constantes e Type Inference (:=)",
  "Fase 1: Ponteiros e Semântica de Memória",
  "Fase 1: Arrays vs Slices: A Ciência do Redimensionamento",
  
  // FASE 2: Intermediário (5-11)
  "Fase 2: Structs e Composição sobre Herança",
  "Fase 2: Interfaces Implícitas e Duck Typing Estático",
  "Fase 2: Error Handling: Erros como Valores de Primeira Classe",
  "Fase 2: Defer, Panic e Recover: Padrões de Resiliência",
  "Fase 2: Goroutines: Concorrência de Ultra-Baixo Custo",
  "Fase 2: Channels: Buffered vs Unbuffered Communication",
  "Fase 2: Select, WaitGroups e Sincronização de Grupo",
  
  // FASE 3: Avançado (12-16)
  "Fase 3: Context: Propagação, Cancelamento e Deadlines",
  "Fase 3: Generics (Go 1.18+), Constraints e Any",
  "Fase 3: Reflection (reflect) e Struct Tags para JSON/ORM",
  "Fase 3: Testing: Table-driven, Benchmarks e Fuzzing",
  "Fase 3: Performance: Escape Analysis e Pprof Profiling",
  
  // FASE 4: Web & Cloud Native (17-21)
  "Fase 4: CGO: Chamando Bibliotecas C com Performance",
  "Fase 4: Servidores HTTP, Middleware e WebSockets",
  "Fase 4: SQL Nativo, GORM e Estratégias de Migração",
  "Fase 4: gRPC, Protocol Buffers e Microserviços Cloud",
  "Fase 4: Capstone: Deploy de Distributed Task Engine"
];

export const lessons: TheoryLesson[] = goTitles.map((title, i) => ({
  id: `go-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐹 Go Master: ${title}</h2><p>Domine a linguagem da infraestrutura moderna, focada em simplicidade, velocidade e escalabilidade massiva.</p></div>`,
  quizId: `go-mq${i + 1}`
}));
