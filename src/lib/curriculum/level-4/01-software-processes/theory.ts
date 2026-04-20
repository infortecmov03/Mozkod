import { lesson as l1 } from './theory/01-sdlc';
import { lesson as l2 } from './theory/02-scrum-agile';

export const lessons = [
  l1, l2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `se-t${i + 3}`,
    title: [
      "Kanban & Lean Manufacturing", "Extreme Programming (XP)", "V-Model & Spiral",
      "Engenharia de Requisitos", "User Stories & Backlog Grooming", "Técnicas de Estimativa",
      "Cultura DevOps", "CI/CD Pipelines", "Continuous Deployment Strategies",
      "Code Review & Pair Programming", "Gestão de Débito Técnico", "SRE: Site Reliability Engineering",
      "Gestão de Mudança", "Comunicação com Stakeholders", "Incident Management",
      "Post-mortems Técnicos", "Documentação de Sistemas", "Ética na Engenharia", "Compliance & Normas ISO"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🏗️ Processos de Software</h2><p>Domínio das metodologias que garantem a entrega de software profissional.</p></div>`,
    quizId: `se-q${i + 3}`
  }))
];
