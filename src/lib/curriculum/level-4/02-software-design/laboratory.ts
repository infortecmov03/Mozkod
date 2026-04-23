import type { PracticeExercise } from '../../types';

// Gerador de laboratórios de design para os 21 tópicos
const generateDesignLab = (idNum: number, title: string, testStr: string) => ({
  id: `des-p${idNum}`,
  language: "typescript",
  title: `Laboratório: ${title}`,
  description: "Implementação de padrões e princípios de design.",
  statement: `Aplique o conceito de ${title} no editor.`,
  template: `// Implemente ${title}\n`,
  detailedExplanation: `<div class='space-y-4'><h3>🏗️ Arquitetura de Código</h3><p>O objetivo é criar uma estrutura que respeite o padrão ${title}.</p></div>`,
  objectives: [{ id: "obj1", description: `Implementar ${title}`, test: testStr }]
});

const titles = [
  "SOLID SRP", "Clean Code", "Factory Pattern", "Adapter Pattern", 
  "Strategy Pattern", "DDD Bounded Context", "Layered Separation", 
  "Hexagonal Ports", "Clean Onion", "Microservices Discovery", 
  "Event Bus", "REST Semantics", "gRPC Proto", "LRU Cache", 
  "Message Consumer", "Service Registry", "API Gateway Logic", 
  "Circuit Breaker", "Saga Compensate", "CQRS Read Model", "ADR Record"
];

const tests = [
  "interface", "function", "factory", "adapter", 
  "strategy", "domain", "layer", 
  "port", "entity", "service", 
  "event", "get", "proto", "cache", 
  "queue", "registry", "gateway", 
  "breaker", "saga", "query", "adr"
];

export const practice = {
  typescript: titles.map((title, i) => generateDesignLab(i + 1, title, tests[i]))
};
