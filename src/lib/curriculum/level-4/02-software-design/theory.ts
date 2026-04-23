import { lesson as l1 } from './theory/01-solid-principles';
import { lesson as l2 } from './theory/02-clean-code';
import { lesson as l3 } from './theory/03-creational-patterns';
import { lesson as l4 } from './theory/04-structural-patterns';
import { lesson as l5 } from './theory/05-behavioral-patterns';

const titles = [
  "Domain Driven Design (DDD)", "Arquitetura em Camadas", 
  "Hexagonal Architecture (Ports & Adapters)", "Clean Architecture",
  "Microservices Fundamentals", "Event-Driven Architecture", "API Design & REST",
  "GraphQL vs gRPC", "Caching Strategies", "Messaging Queues",
  "Service Discovery", "API Gateways", "Circuit Breakers",
  "Saga Pattern", "CQRS Pattern", "Documentação de Arquitetura (ADRs)"
];

const remainingLessons = titles.map((title, i) => ({
  id: `des-t${i + 6}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📐 Design & Arquitetura: ${title}</h2><p>Criando sistemas que resistem ao teste do tempo e da escala global.</p></div>`,
  quizId: `des-mq${i + 6}`
}));

export const lessons = [l1, l2, l3, l4, l5, ...remainingLessons];
