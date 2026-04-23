import { lesson as l1 } from './theory/01-estrutura-html';
import { lesson as l2 } from './theory/02-css-seletores';
import { lesson as l3 } from './theory/03-css-box-model';
import { lesson as l4 } from './theory/04-css-flexbox';
import { lesson as l5 } from './theory/05-css-grid';
import { lesson as l6 } from './theory/06-responsividade';
import { lesson as l7 } from './theory/07-formularios';
import { lesson as l8 } from './theory/08-publicacao-web';

const titles = [
  "Semântica e SEO: Significado na Web",
  "SVG e Gráficos Vetoriais",
  "Acessibilidade e Padrões ARIA",
  "Animações e Transições CSS",
  "Arquitetura BEM e CSS Limpo",
  "Protocolo HTTP e Cabeçalhos",
  "Performance Web e Core Vitals",
  "Segurança Web: HTTPS e CSP",
  "PWA: Progressive Web Apps",
  "DevTools: Inspeção e Debugging",
  "Tipografia e Web Fonts Otimizadas",
  "Layouts Flexíveis com Container Queries",
  "Fronteira com JavaScript (DOM Intro)"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8,
  ...titles.map((title, i) => ({
    id: `web-t${i + 9}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🌐 Web Core: ${title}</h2><p>Domínio das tecnologias fundamentais da interface web moderna, focando em performance, acessibilidade e design responsivo.</p></div>`,
    quizId: `web-q${i + 9}`
  }))
];
