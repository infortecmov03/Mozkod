
import { lesson as l1 } from './theory/01-sdlc';
import { lesson as l2 } from './theory/02-scrum-agile';

export const lessons = [
  l1, l2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `se-t${i + 3}`,
    title: [
      "Kanban & Lean", "Extreme Programming (XP)", "V-Model", "Spiral Model",
      "Requisitos de Negócio vs Técnicos", "User Stories & Backlog", "Estimativas (Story Points)",
      "DevOps Philosophy", "Continuous Integration (CI)", "Continuous Deployment (CD)",
      "Code Review Patterns", "Pair Programming", "Gestão de Débito Técnico",
      "SRE (Site Reliability Engineering)", "Change Management", "Stakeholder Communication",
      "Incident Management", "Post-mortems", "Ética Profissional"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🏗️ Processos de Software</h2><p>Metodologias para entregar valor com qualidade e previsibilidade.</p></div>`,
    quizId: `se-q${i + 3}`
  }))
];
