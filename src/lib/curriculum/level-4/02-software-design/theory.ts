import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = Array.from({ length: 21 }, (_, i) => ({
  id: `des-t${i + 1}`,
  title: [
    "Princípios SOLID", "Clean Code & Refactoring", "Design Patterns: Creational",
    "Design Patterns: Structural", "Design Patterns: Behavioral", "Domain Driven Design (DDD)",
    "Arquitetura em Camadas", "Hexagonal Architecture (Ports & Adapters)", "Clean Architecture",
    "Microservices Fundamentals", "Event-Driven Architecture", "API Design & REST",
    "GraphQL vs gRPC", "Caching Strategies", "Messaging Queues",
    "Service Discovery", "API Gateways", "Circuit Breakers",
    "Saga Pattern", "CQRS Pattern", "Documentação de Arquitetura (ADRs)"
  ][i],
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📐 Design & Arquitetura</h2><p>Criando sistemas que resistem ao teste do tempo e da escala.</p></div>`,
  quizId: `des-q${i + 1}`
}));