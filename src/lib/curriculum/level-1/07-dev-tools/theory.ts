
import { lesson as l1 } from './theory/01-vscode-elite';
import { lesson as l2 } from './theory/02-terminal-mastery';
import { lesson as l3 } from './theory/03-browser-devtools';
import { lesson as l4 } from './theory/04-package-managers';
import { lesson as l5 } from './theory/05-build-tools';

const titles = [
  "Linters e Formatters: Automação da Qualidade",
  "Debugging Avançado: Call Stack e Memory Leaks",
  "API Testing: Postman e Diagnóstico de Endpoints",
  "Docker: Contentores e Isolamento de Ambientes",
  "Git Hooks: Husky e Lint-staged em Equipa",
  "SSH e Desenvolvimento Remoto: Acesso via Chaves",
  "Bash Scripting: Automatizando a Rotina do Engenheiro",
  "Performance: Profiling de CPU e Frame Rate",
  "NPM Scripts Master: Workflows Personalizados",
  "Lighthouse: Auditorias de SEO e Acessibilidade",
  "Local Tunneling: Ngrok e Cloudflare Tunnel",
  "Database Clients: GUI vs Terminal (TablePlus/DBeaver)",
  "Markdown Master: Documentação Técnica de Nível Sénior",
  "RegEx Mastery: Ferramentas de Teste e Padrões",
  "Cloud CLIs: Firebase, Vercel e AWS em Linha de Comando",
  "The Elite Engineer Tooling Stack (IA e Copilots)"
];

export const lessons = [
  l1, l2, l3, l4, l5,
  ...titles.map((title, i) => ({
    id: `dt-t${i + 6}`,
    title: title,
    content: `<div class='space-y-6'>
      <div class='bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl'>
        <h2 class='text-2xl font-bold mb-4 font-headline text-primary'>🛠️ Tópico Master: ${title}</h2>
        <p class='text-lg leading-relaxed'>Nesta lição de engenharia profunda, exploramos a ferramenta e os processos que permitem a entrega de software em escala industrial com zero fricção.</p>
      </div>
      <div class='prose prose-invert max-w-none'>
        <h3>Engenharia de Produtividade</h3>
        <p>Um engenheiro de elite não gasta tempo com tarefas repetitivas. Ele automatiza o ambiente de forma que o foco total esteja na resolução do problema de negócio.</p>
        <div class='bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/20 mt-6'>
          <h4 class='font-bold text-indigo-400 mb-2'>🚀 Objetivo Técnico</h4>
          <p class='text-sm'>Entender a configuração interna, os atalhos de performance e como integrar esta ferramenta no pipeline de CI/CD da sua aplicação.</p>
        </div>
      </div>
    </div>`,
    quizId: `dt-q${i + 6}`
  }))
];
