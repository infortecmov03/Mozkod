import { lesson as l1 } from './theory/01-vscode-elite';
import { lesson as l2 } from './theory/02-terminal-mastery';
import { lesson as l3 } from './theory/03-browser-devtools';
import { lesson as l4 } from './theory/04-package-managers';
import { lesson as l5 } from './theory/05-build-tools';
import { lesson as l6 } from './theory/06-linters-formatters';
import { lesson as l7 } from './theory/07-advanced-debugging';
import { lesson as l8 } from './theory/08-api-testing';
import { lesson as l9 } from './theory/09-docker-basics';
import { lesson as l10 } from './theory/10-github-actions';

const remainingTitles = [
  "Chaves SSH e Desenvolvimento Remoto: Acesso via Criptografia",
  "Bash Scripting: Automatizando a Rotina do Engenheiro",
  "Performance Profiling: Analisando o Main Thread",
  "NPM Scripts Master: Workflows Personalizados de Build",
  "Lighthouse: Auditorias de SEO e Acessibilidade Industrial",
  "Local Tunneling: Ngrok e Expondo o Localhost com Segurança",
  "Database Clients: GUI vs Terminal (TablePlus/DBeaver)",
  "Markdown Master: Documentação Técnica Profissional",
  "RegEx Mastery: Ferramentas de Validação de Padrões",
  "Cloud CLIs: Firebase, Vercel e AWS em Linha de Comando",
  "The AI-Powered Stack: Copilots e Cursor no Workflow de Elite"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  ...remainingTitles.map((title, i) => ({
    id: `dt-t${i + 11}`,
    title: title,
    content: `<div class='space-y-6'>
      <div class='bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl'>
        <h2 class='text-2xl font-bold mb-4 font-headline text-primary'>🛠️ Tópico Master: ${title}</h2>
        <p class='text-lg leading-relaxed'>Nesta lição de engenharia profunda, exploramos a ferramenta e os processos que permitem a entrega de software em escala industrial com zero fricção.</p>
      </div>
      <div class='prose prose-invert max-w-none'>
        <h3>Engenharia de Produtividade</h3>
        <p>Um engenheiro de elite não gasta tempo com tarefas repetitivas. Ele automatiza o ambiente de forma que o foco total esteja na resolução do problema de negócio. Dominar esta ferramenta é o que multiplica a tua velocidade por 10.</p>
        <div class='bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/20 mt-6'>
          <h4 class='font-bold text-indigo-400 mb-2'>🚀 Objetivo Técnico</h4>
          <p class='text-sm'>Entender a configuração interna, os atalhos de performance e como integrar esta ferramenta no pipeline de CI/CD da sua aplicação profissional.</p>
        </div>
      </div>
    </div>`,
    quizId: `dt-q${i + 11}`
  }))
];
