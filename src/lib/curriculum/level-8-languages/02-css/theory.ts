
import { lesson as l1 } from './theory/01-selectors';
import { lesson as l2 } from './theory/02-cascade-layers';
import { lesson as l3 } from './theory/03-custom-properties';
import { lesson as l4 } from './theory/04-logical-properties';
import { lesson as l5 } from './theory/05-flexbox-mastery';
import { lesson as l6 } from './theory/06-subgrid-master';
import { lesson as l7 } from './theory/07-container-queries';
import { lesson as l8 } from './theory/08-css-math';
import { lesson as l9 } from './theory/09-variable-fonts';
import { lesson as l10 } from './theory/10-perf-animations';
import { lesson as l11 } from './theory/11-compositing-blending';
import { lesson as l12 } from './theory/12-glassmorphism-filters';
import { lesson as l13 } from './theory/13-svg-styling';
import { lesson as l14 } from './theory/14-css-architectures';
import { lesson as l15 } from './theory/15-postcss-tooling';
import { lesson as l16 } from './theory/16-css-perf-fouc';
import { lesson as l17 } from './theory/17-houdini-api';
import { lesson as l18 } from './theory/18-pseudo-elements-advanced';
import { lesson as l19 } from './theory/19-scroll-animations';
import { lesson as l20 } from './theory/20-anchor-positioning';
import { lesson as l21 } from './theory/21-color-spaces-oklch';

export const lessons = [
  // FASE 1: Fundamentos (1-4)
  { ...l1, title: "Fase 1: Sintaxe, Seletores e Especificidade" },
  { id: "css-f1-2", title: "Fase 1: Box Model e Box Sizing", content: "<p>Margens, bordas, preenchimento e o cálculo real de tamanho dos elementos.</p>", quizId: "css-mq2" },
  { id: "css-f1-3", title: "Fase 1: Cores e Unidades (px, em, rem, %)", content: "<p>Sistemas de cores (HEX, RGB, HSL) e unidades relativas para layouts elásticos.</p>", quizId: "css-mq3" },
  { id: "css-f1-4", title: "Fase 1: Tipografia e Backgrounds", content: "<p>Controlo de fontes, altura de linha e camadas de fundos complexos.</p>", quizId: "css-mq4" },

  // FASE 2: Layouts (5-8)
  { ...l5, title: "Fase 2: Flexbox Mastery" },
  { ...l6, title: "Fase 2: Grid Layout e Geometria" },
  { id: "css-f2-7", title: "Fase 2: Position: Fixed, Sticky e Absolute", content: "<p>Dominando o fluxo do documento e elementos flutuantes.</p>", quizId: "css-mq7" },
  { ...l4, title: "Fase 2: Propriedades Lógicas Globais" },

  // FASE 3: Intermediário (9-13)
  { id: "css-f3-9", title: "Fase 3: Transições e Transformações", content: "<p>Movimentos suaves e manipulação de espaço 2D/3D.</p>", quizId: "css-mq9" },
  { ...l10, title: "Fase 3: Animações @keyframes de Alta Performance" },
  { ...l18, title: "Fase 3: Pseudo-classes e Pseudo-elementos" },
  { ...l3, title: "Fase 3: Variáveis CSS e Design Systems" },
  { id: "css-f3-13", title: "Fase 3: Media Queries e Mobile First", content: "<p>Estratégias de adaptação de ecrã do telemóvel para o desktop.</p>", quizId: "css-mq13" },

  // FASE 4: Avançado (14-21)
  { ...l7, title: "Fase 4: Container Queries e Contexto" },
  { ...l20, title: "Fase 4: Anchor Positioning e Popovers" },
  { ...l14, title: "Fase 4: Arquiteturas: BEM e ITCSS" },
  { ...l15, title: "Fase 4: Tooling: PostCSS e Sass" },
  { ...l16, title: "Fase 4: Performance: Critical CSS e GPU" },
  { ...l19, title: "Fase 4: Scroll-driven Animations" },
  { ...l21, title: "Fase 4: OKLCH e Espaços de Cor de Próxima Geração" },
  { ...l17, title: "Fase 4: Capstone: Design System de Elite" }
];
