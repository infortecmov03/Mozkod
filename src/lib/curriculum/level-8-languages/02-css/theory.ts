
import { lesson as l1 } from './theory/01-selectors';
import { lesson as l2 } from './theory/02-cascade-layers';
import { lesson as l3 } from './theory/03-custom-properties';
import { lesson as l4 } from './theory/04-logical-properties';
import { lesson as l5 } from './theory/05-flexbox-mastery';
import { lesson as l6 } from './theory/06-container-queries';
import { lesson as l7 } from './theory/07-positioning-flow';
import { lesson as l8 } from './theory/08-subgrid-master';
import { lesson as l9 } from './theory/09-transforms-transitions';

import type { TheoryLesson } from '../../types';

const cssTitles = [
  "Fase 1: Seletores de Elite, Especificidade e :has()",
  "Fase 1: Cascade Layers (@layer) e a Nova Ordem",
  "Fase 1: Custom Properties e Design Tokens",
  "Fase 1: Propriedades Lógicas e Layout Global",
  "Fase 2: Flexbox Mastery: Eixos, Gap e Intrinsic Sizing",
  "Fase 2: Container Queries vs Media Queries",
  "Fase 2: Posicionamento e Fluxo de Documento",
  "Fase 2: Subgrid: Alinhamento Multi-nível",
  "Fase 3: Transições e Transformações de Hardware",
  "Fase 3: Animações @keyframes e Performance GPU",
  "Fase 3: Pseudo-classes, Elementos e Estados de UI",
  "Fase 3: Design Systems Escaláveis e Variáveis",
  "Fase 3: Media Queries, Container Queries e Contexto",
  "Fase 4: Arquiteturas CSS: BEM, ITCSS e Utility",
  "Fase 4: Tooling: PostCSS, Sass e Compiladores",
  "Fase 4: Performance: Critical CSS e FOUC Prevention",
  "Fase 4: Scroll-driven Animations e View Timelines",
  "Fase 4: OKLCH e Espaços de Cor de Próxima Geração",
  "Fase 4: Anchor Positioning e Popovers Nativos",
  "Fase 4: CSS Houdini: Pintura no Motor do Browser",
  "Fase 4: Capstone: Design System de Elite Completo"
];

const lessonsSource: Record<number, any> = {
  0: l1,
  1: l2,
  2: l3,
  3: l4,
  4: l5,
  5: l6,
  6: l7,
  7: l8,
  8: l9
};

export const lessons: TheoryLesson[] = cssTitles.map((title, i) => {
  if (lessonsSource[i]) {
    return {
      ...lessonsSource[i],
      title: title,
      id: `css-m${i + 1}`,
      quizId: `css-mq${i + 1}`
    };
  }

  return {
    id: `css-m${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🎨 CSS Master: ${title}</h2><p>Estudo avançado sobre engenharia de estilos e performance visual.</p></div>`,
    quizId: `css-mq${i + 1}`,
    enableInteractive: true
  };
});
