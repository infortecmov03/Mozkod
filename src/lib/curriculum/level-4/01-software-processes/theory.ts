import { lesson as l1 } from './theory/01-sdlc';
import { lesson as l2 } from './theory/02-agile-manifesto';

const titles = [
  "SDLC Master: Arquitetura do Ciclo de Vida",
  "Manifesto Ágil: Colaboração sobre Processos",
  "Scrum Framework: Papéis e Sprints",
  "Kanban: Gestão de Fluxo e WIP Limits",
  "Engenharia de Requisitos: Funcionais e Não-Funcionais",
  "User Stories e o Critério INVEST",
  "Estimativa: Fibonacci e Story Points",
  "Cultura DevOps: CAMS Model",
  "Pipelines CI/CD: Automação Total",
  "Estratégias de Deploy: Blue/Green e Canary",
  "Code Review e Pair Programming",
  "Gestão de Débito Técnico",
  "SRE: Site Reliability Engineering",
  "Error Budgets e SLOs",
  "Gestão de Incidentes e Resposta",
  "Post-mortems Blame-free",
  "Documentação de Arquitetura (ADRs)",
  "Ética Profissional e Responsabilidade",
  "Liderança Técnica e Mentoria",
  "Software Engineering na Era da IA",
  "Capstone: Auditoria de Processo Completa"
];

export const lessons = titles.map((title, i) => {
  if (i === 0) return { ...l1, title };
  if (i === 1) return { ...l2, title };
  
  return {
    id: `se-t${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚙️ Software Processes: ${title}</h2><p>Estudo aprofundado dos processos industriais de engenharia de software para escala global.</p></div>`,
    quizId: `se-q${i + 1}`
  };
});
