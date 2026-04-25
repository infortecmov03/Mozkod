
import type { PracticeExercise } from '../../types';

const generateEcoLab = (idNum: number, title: string, testStr: string) => ({
  id: `php-eco-p${idNum}`,
  language: "php",
  title: `Laboratório Master: ${title}`,
  description: "Aplicação prática de padrões enterprise.",
  statement: `Implemente o requisito de ${title} no motor de ecossistema.`,
  isProjectPart: true,
  template: "<?php\n\n// Ecosystem Milestone " + idNum + "\n",
  detailedExplanation: "<h3>🏗️ Engenharia de Ecossistema</h3><p>Validação do padrão " + title + " em larga escala.</p>",
  objectives: [{ id: "obj", description: "Validar arquitetura", test: testStr }]
});

const titles = [
  "Composer Script", "Data Provider", "Pest Expectation", "Mock Object", 
  "Infection Config", "Domain Entity", "Command Bus", "Abstract Factory", 
  "Strategy Pattern", "PSR-11 Container", "Service Provider", "Kernel Event", 
  "Middleware Pipe", "Xdebug Trace", "Redis Cache", "VCL Logic", 
  "Shard Key", "Queue Worker", "WebSocket Auth", "Property Hook", "CLOUD READY"
];

const tests = [
  "scripts", "@dataProvider", "expect(", "createMock", 
  "infection", "Entity", "Command", "interface", 
  "Strategy", "ContainerInterface", "register()", "dispatchEvent", 
  "Middleware", "xdebug", "Redis", "vcl", 
  "shard", "Job", "Pusher", "get =>", "CLOUD READY"
];

export const practice = {
  php: titles.map((t, i) => generateEcoLab(i + 1, t, tests[i]))
};
