
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

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  ...Array.from({ length: 11 }, (_, i) => ({
    id: `git-t${i + 11}`,
    title: [
      "Git Stash & Pop", "Fundamentos de Rebase", "Cherry-pick", "Git Flow vs GitHub Flow",
      "Pull Requests & Review", "Tags & Releases", "Git Hooks", "Log & Reflog",
      "Git Submodules", "Internals: A pasta .git", "SSH Keys & Segurança"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🌿 Domínio de Versão</h2><p>Exploração profunda do sistema de controlo de versão mais usado no mundo.</p></div>`,
    quizId: `git-q${i + 11}`
  }))
];
