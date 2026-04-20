import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  {
    id: "sec-t1",
    title: "Fundamentos de Segurança e Criptografia",
    content: `<div class="space-y-4">
      <h2 class="text-2xl font-bold">🛡️ Blindagem Digital</h2>
      <p>A segurança baseia-se na Tríade CIA: Confidencialidade, Integridade e Disponibilidade.</p>
    </div>`,
    quizId: "sec-q1"
  },
  { id: "sec-t2", title: "IAM: Gestão de Identidade e Acessos", content: "<p>Quem pode aceder a quê e como validamos isso.</p>", quizId: "sec-q2" },
  { id: "sec-t3", title: "Segurança de Rede e Zero Trust", content: "<p>Nunca confiar, sempre verificar.</p>", quizId: "sec-q3" },
  { id: "sec-t4", title: "Application Security e OWASP Top 10", content: "<p>As vulnerabilidades mais comuns em software.</p>", quizId: "sec-q4" },
  { id: "sec-t5", title: "Cloud Foundations (AWS, GCP, Azure)", content: "<p>A infraestrutura moderna sob demanda.</p>", quizId: "sec-q5" },
  { id: "sec-t6", title: "Contentores e Orquestração (Docker/K8s)", content: "<p>Isolamento de apps e escala elástica.</p>", quizId: "sec-q6" },
  { id: "sec-t7", title: "Arquiteturas Serverless", content: "<p>Focar no código, não no servidor.</p>", quizId: "sec-q7" },
  { id: "sec-t8", title: "Infraestrutura como Código (IaC)", content: "<p>Gerir hardware através de código (Terraform).</p>", quizId: "sec-q8" },
  { id: "sec-t9", title: "DevSecOps e CI/CD Seguro", content: "<p>Integrar segurança no fluxo de entrega contínua.</p>", quizId: "sec-q9" },
  { id: "sec-t10", title: "Resposta a Incidentes e Forense", content: "<p>O que fazer quando o sistema é invadido.</p>", quizId: "sec-q10" }
];
