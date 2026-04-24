import { lesson as l1 } from './theory/01-selectors';
import { lesson as l2 } from './theory/02-cascade-layers';
import { lesson as l3 } from './theory/03-custom-properties';
import { lesson as l4 } from './theory/04-logical-properties';
import { lesson as l5 } from './theory/05-flexbox-mastery';
import { lesson as l6 } from './theory/06-grid-master';
import { lesson as l7 } from './theory/07-container-queries';
import { lesson as l8 } from './theory/08-subgrid-master';
import { lesson as l9 } from './theory/09-transforms-transitions';
import { lesson as l10 } from './theory/10-perf-animations';
import { lesson as l11 } from './theory/11-compositing-blending';
import { lesson as l12 } from './theory/12-glassmorphism-filters';
import { lesson as l13 } from './theory/13-color-spaces-oklch';
import { lesson as l14 } from './theory/14-css-architectures';
import { lesson as l15 } from './theory/15-postcss-tooling';
import { lesson as l16 } from './theory/16-performance-audits';
import { lesson as l17 } from './theory/17-houdini-api';
import { lesson as l18 } from './theory/18-pseudo-elements-advanced';
import { lesson as l19 } from './theory/19-scroll-animations';
import { lesson as l20 } from './theory/20-anchor-positioning';
import { lesson as l21 } from './theory/21-color-spaces-oklch';

import type { TheoryLesson } from '../../types';

const cssTitles = [
  "Fase 1: Seletores de Elite, Especificidade e :has()",
  "Fase 1: Cascade Layers (@layer) e a Nova Ordem",
  "Fase 1: Custom Properties e Design Tokens",
  "Fase 1: Propriedades Lógicas e Layout Global",
  "Fase 2: Flexbox Mastery: Eixos, Gap e Intrinsic Sizing",
  "Fase 2: Grid & Subgrid Master: Alinhamento Multi-nível",
  "Fase 2: Container Queries vs Media Queries",
  "Fase 2: CSS Math: clamp(), min(), max() e calc()",
  "Fase 3: Variable Fonts & Typography Performance",
  "Fase 3: Animações de Alta Performance: O Papel do Compositor",
  "Fase 3: Compositing & Blending Modes",
  "Fase 3: Glassmorphism & Backdrop Filters",
  "Fase 4: OKLCH e o Futuro das Cores no CSS",
  "Fase 4: Architectures: BEM, Utility-first e Manutenibilidade",
  "Fase 4: PostCSS & Build Tooling: O Compilador do CSS",
  "Fase 4: Auditoria de Performance e Profiling de CSS",
  "Fase 4: CSS Houdini Paint API: Desenhando no Motor",
  "Fase 4: Pseudo-elements: ::slotted & ::part",
  "Fase 4: Scroll-driven Animations: Adeus Event Listeners",
  "Fase 4: Anchor Positioning Future: Popovers Nativos",
  "Fase 4: Capstone: Design System de Elite Completo"
];

const lessonsSource = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21
];

export const lessons: TheoryLesson[] = cssTitles.map((title, i) => {
  const base = lessonsSource[i];
  return {
    ...base,
    id: `css-m${i + 1}`,
    title: title,
    quizId: `css-mq${i + 1}`,
    enableInteractive: true
  };
});