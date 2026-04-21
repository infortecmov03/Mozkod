
import type { TheoryLesson } from '../../types';

const goTitles = [
  "Fase 1: Pacotes, Imports e Variáveis",
  "Fase 1: Ponteiros, Structs e Slices",
  "Fase 1: Maps, Loops e Controle de Fluxo",
  "Fase 2: Interfaces Implícitas (Satisfação)",
  "Fase 2: Error Handling: Erros como Valores",
  "Fase 2: Defer, Panic e Recover (Resiliência)",
  "Fase 2: Goroutines: Concorrência de Baixo Custo",
  "Fase 2: Channels: Comunicação Segura",
  "Fase 2: Select e Multiplexação de Canais",
  "Fase 2: WaitGroups, Mutex e Atomic",
  "Fase 2: Context: Cancelamento e Deadlines",
  "Fase 3: Generics (Go 1.18+) e Constraints",
  "Fase 3: Reflection e Struct Tags",
  "Fase 3: Testing: Table-driven e Benchmarking",
  "Fase 3: Escape Analysis e Memory Optimization",
  "Fase 3: CGO: Chamando Código C",
  "Fase 4: Servidores HTTP e Middleware Patterns",
  "Fase 4: SQL, GORM e Migrations",
  "Fase 4: gRPC e Protocol Buffers",
  "Fase 4: Microserviços e Message Brokers (Kafka)",
  "Fase 4: Capstone: Deploy de API Cloud Native"
];

export const lessons: TheoryLesson[] = goTitles.map((title, i) => ({
  id: `go-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐹 Go Master: ${title}</h2><p>Simplicidade e performance para sistemas distribuídos e infraestrutura de nuvem.</p></div>`,
  quizId: `go-mq${i + 1}`
}));
