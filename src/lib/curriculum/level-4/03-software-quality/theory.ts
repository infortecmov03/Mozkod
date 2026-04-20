import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = Array.from({ length: 21 }, (_, i) => ({
  id: `qual-t${i + 1}`,
  title: [
    "A Pirâmide de Testes", "Unit Testing & Mocks", "Integration Testing",
    "E2E Testing (Playwright/Cypress)", "TDD: Test Driven Development", "BDD: Behavior Driven Development",
    "Performance & Load Testing", "Security Testing (SAST/DAST)", "Mutation Testing",
    "Test Coverage Metrics", "Visual Regression Testing", "Accessibility Auditing",
    "Contract Testing", "Chaos Engineering", "Observabilidade & Logs",
    "Monitorização Proativa", "Tracing Distribuído", "Gestão de Erros em Produção",
    "QA in DevOps Pipeline", "Zero Bug Policy", "Qualidade de Dados"
  ][i],
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🛡️ Software Quality</h2><p>Estratégias de garantia de qualidade para software mission-critical.</p></div>`,
  quizId: `qual-q${i + 1}`
}));