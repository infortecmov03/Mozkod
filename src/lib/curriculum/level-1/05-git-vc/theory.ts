import { lesson as l1 } from './theory/01-o-que-e-git';
import { lesson as l2 } from './theory/02-instalacao-config';
import { lesson as l3 } from './theory/03-repositorio-local';
import { lesson as l4 } from './theory/04-add-commit';
import { lesson as l5 } from './theory/05-desfazer-alteracoes';
import { lesson as l6 } from './theory/06-branches';
import { lesson as l7 } from './theory/07-merge-conflitos';
import { lesson as l8 } from './theory/08-repositorios-remotos';
import { lesson as l9 } from './theory/09-github';
import { lesson as l10 } from './theory/10-gitignore';

const gitTitles = [
  "Git Stash: Guardando Trabalho Temporário",
  "Resolvendo Merge Conflicts de Elite",
  "Git Rebase vs Merge",
  "Cherry-picking de Commits",
  "Git Flow e Estratégias de Branching",
  "Tags e Versionamento Semântico (SemVer)",
  "Pull Requests e Code Review",
  "Git Hooks e Automação",
  "Bisect: Caça a Bugs no Histórico",
  "Git Internals: Inodes e Object Database",
  "Segurança: GPG Signing e SSH"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  ...gitTitles.map((title, i) => ({
    id: `git-t${i + 11}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🌿 Git & Versão: ${title}</h2><p>Domine a ferramenta que é o padrão da indústria para colaboração e histórico de código.</p></div>`,
    quizId: `git-q${i + 11}`
  }))
];