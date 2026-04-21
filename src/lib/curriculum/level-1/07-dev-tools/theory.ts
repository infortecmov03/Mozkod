import { lesson as l1 } from './theory/01-vscode';
import { lesson as l2 } from './theory/02-terminal';
import { lesson as l3 } from './theory/03-devtools';
import { lesson as l4 } from './theory/04-package-managers';
import { lesson as l5 } from './theory/05-build-tools';
import { lesson as l6 } from './theory/06-linters-formatters';
import { lesson as l7 } from './theory/07-debugging-tools';
import { lesson as l8 } from './theory/08-postman';
import { lesson as l9 } from './theory/09-docker-basico';
import { lesson as l10 } from './theory/10-github-actions';
import { lesson as l11 } from './theory/11-ssh-keys-remote-dev';

const devToolsTitles = [
  "Bash Scripting para Automação",
  "DevTools: Performance e Memory Tab",
  "Virtualização de Ambiente (Containers)",
  "Proxy Reverso e Local Tunneling (Ngrok)",
  "Lighthouse e Auditorias de Qualidade",
  "Regex Testers e IDE Tools",
  "Gestão de Chaves e Secrets (Env Vars)",
  "CI/CD: Pipelines de Integração Contínua",
  "Monitorização de API e Logs",
  "Stack de Produtividade de Elite"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11,
  ...devToolsTitles.map((title, i) => ({
    id: `dt-t${i + 12}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🛠️ Dev Tools: ${title}</h2><p>Domine as ferramentas que aceleram o desenvolvimento e garantem a qualidade do código em produção.</p></div>`,
    quizId: `dt-q${i + 12}`
  }))
];