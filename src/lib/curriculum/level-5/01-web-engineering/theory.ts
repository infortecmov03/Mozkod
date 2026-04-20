import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  {
    id: "web-adv-t1",
    title: "Next.js App Router e Server Components",
    content: `<div class="space-y-4">
      <h2 class="text-2xl font-bold">🚀 A Revolução do React Server Components (RSC)</h2>
      <p>Next.js 13+ introduziu o App Router, permitindo que componentes sejam renderizados no servidor por padrão, reduzindo o bundle JS enviado ao cliente.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Server Components:</strong> Melhor performance, SEO e acesso direto à DB.</li>
        <li><strong>Client Components:</strong> Usados para interatividade e hooks (useState, useEffect).</li>
      </ul>
    </div>`,
    quizId: "web-adv-q1"
  },
  { id: "web-adv-t2", title: "Padrões de Renderização: SSG, SSR, ISR e PPR", content: "<p>Estratégias de geração de páginas para escala e performance.</p>", quizId: "web-adv-q2" },
  { id: "web-adv-t3", title: "Gestão de Estado: Zustand e Tanstack Query", content: "<p>Sincronização de estado global e cache de dados de servidor.</p>", quizId: "web-adv-q3" },
  { id: "web-adv-t4", title: "Data Fetching e Server Actions", content: "<p>Mutação de dados segura diretamente do servidor para o cliente.</p>", quizId: "web-adv-q4" },
  { id: "web-adv-t5", title: "Web Performance e Core Web Vitals", content: "<p>Otimização de LCP, FID e CLS para Google e utilizadores.</p>", quizId: "web-adv-q5" },
  { id: "web-adv-t6", title: "Acessibilidade Avançada (WCAG 2.2)", content: "<p>Garantindo que a web seja inclusiva para todos.</p>", quizId: "web-adv-q6" },
  { id: "web-adv-t7", title: "Design Systems e Component Libraries", content: "<p>Escalando interfaces com Tailwind, Shadcn e Radix.</p>", quizId: "web-adv-q7" },
  { id: "web-adv-t8", title: "Segurança Web (XSS, CSRF, CSP)", content: "<p>Protegendo a aplicação contra vulnerabilidades modernas.</p>", quizId: "web-adv-q8" },
  { id: "web-adv-t9", title: "Estilização Moderna e Container Queries", content: "<p>Layouts responsivos baseados no container, não no ecrã.</p>", quizId: "web-adv-q9" },
  { id: "web-adv-t10", title: "Deployment e Edge Computing", content: "<p>Levando o código para o limite (Edge) com Vercel e Middleware.</p>", quizId: "web-adv-q10" }
];
