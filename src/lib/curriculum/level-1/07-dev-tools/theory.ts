import { lesson as l1 } from './theory/01-vscode-elite';
import { lesson as l2 } from './theory/02-terminal-mastery';

const devToolsTitles = [
  "Browser DevTools Mastery", "Package Managers (NPM, Yarn, PNPM)", "Build Tools: Vite e Webpack",
  "Linters e Formatters (Clean Automation)", "Advanced Debugging: Call Stack e Memory",
  "Postman e Design de Testes de API", "Docker: Contentores e Isolamento",
  "Git Hooks e Automação de Qualidade", "SSH, Chaves e Remote Development", "Bash Scripting para Automação",
  "Chrome Performance e CPU Profiling", "NPM Scripts: Custom Workflows", "Lighthouse e Core Web Vitals Audits",
  "Ngrok e Local Tunneling", "Database GUI Clients Profissionais", "Markdown para Documentação de Elite",
  "Regex Testers e Ferramentas Visuais", "Cloud CLIs (Vercel, Firebase, AWS)", "The Elite Productivity Stack"
];

export const lessons = [
  l1, l2,
  ...devToolsTitles.map((title, i) => ({
    id: `dt-t${i + 3}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🛠️ Dev Tools: ${title}</h2><p>Domine as ferramentas que aceleram o desenvolvimento e garantem a qualidade do código em produção.</p></div>`,
    quizId: `dt-q${i + 3}`
  }))
];
