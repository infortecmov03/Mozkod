import { lesson as l1 } from './theory/01-estrutura-html';
import { lesson as l2 } from './theory/02-css-seletores';
import { lesson as l3 } from './theory/03-css-box-model';
import { lesson as l4 } from './theory/04-css-flexbox';
import { lesson as l5 } from './theory/05-css-grid';
import { lesson as l6 } from './theory/06-responsividade';
import { lesson as l7 } from './theory/07-formularios';
import { lesson as l8 } from './theory/08-publicacao-web';
import { lesson as l9 } from './theory/09-semantica-seo';

const webTitles = [
  "SVG e Gráficos Vetoriais na Web",
  "Tipografia e Web Fonts",
  "Animações e Transições CSS",
  "Acessibilidade ARIA",
  "Arquitetura BEM e Metodologias CSS",
  "Performance Web e Core Vitals",
  "Shadow DOM e Web Components",
  "Protocolo HTTP e Cabeçalhos",
  "Segurança Web: HTTPS e CSP",
  "PWA: Progressive Web Apps Intro",
  "DevTools: Inspeção e Debugging",
  "Fronteira com JavaScript (DOM Intro)"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9,
  ...webTitles.map((title, i) => ({
    id: `web-t${i + 10}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🌐 Web Core: ${title}</h2><p>Entenda as camadas fundamentais que compõem a interface e a comunicação na web moderna.</p></div>`,
    quizId: `web-q${i + 10}`
  }))
];