import { lesson as l1 } from './theory/01-structure';
import { lesson as l2 } from './theory/02-css-seletores';
import { lesson as l3 } from './theory/03-css-box-model';
import { lesson as l4 } from './theory/04-css-flexbox';
import { lesson as l5 } from './theory/05-css-grid';
import { lesson as l6 } from './theory/06-responsividade';
import { lesson as l7 } from './theory/07-formularios';
import { lesson as l8 } from './theory/08-publicacao-web';
import { lesson as l9 } from './theory/09-semantica-seo';
import { lesson as l10 } from './theory/10-svg-graphics';
import { lesson as l11 } from './theory/11-aria-accessibility';
import { lesson as l12 } from './theory/12-animacoes-transicoes';
import { lesson as l13 } from './theory/13-arquitetura-bem';
import { lesson as l14 } from './theory/14-http-protocol';
import { lesson as l15 } from './theory/15-web-performance';

const titles = [
  "Segurança Web: HTTPS e CSP",
  "PWA: Progressive Web Apps",
  "DevTools: Inspeção e Debugging",
  "Tipografia e Web Fonts Otimizadas",
  "Layouts Flexíveis com Container Queries",
  "Fronteira com JavaScript (DOM Intro)"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15,
  ...titles.map((title, i) => ({
    id: `web-t${i + 16}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🌐 Web Core: ${title}</h2><p>Domínio das tecnologias fundamentais da interface web moderna, focando em performance, acessibilidade e design responsivo.</p></div>`,
    quizId: `web-q${i + 16}`
  }))
];
