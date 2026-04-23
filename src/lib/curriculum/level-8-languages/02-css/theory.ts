
import type { TheoryLesson } from '../../types';

const cssTitles = [
  "Fase 1: Seletores de Elite e Especificidade",
  "Fase 1: Box Model, Box Sizing e Física da Web",
  "Fase 1: Sistemas de Cores, Unidades e Escala",
  "Fase 1: Tipografia Master e Altura de Linha",
  "Fase 2: Flexbox Mastery: Eixos e Alinhamento",
  "Fase 2: Grid Layout Master: Geometria 2D",
  "Fase 2: Posicionamento e Fluxo de Documento",
  "Fase 2: Propriedades Lógicas e Layout Global",
  "Fase 3: Transições e Transformações de Hardware",
  "Fase 3: Animações @keyframes e Performance GPU",
  "Fase 3: Pseudo-classes, Elementos e Estados de UI",
  "Fase 3: Variáveis CSS e Design Systems Escaláveis",
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

export const lessons: TheoryLesson[] = cssTitles.map((title, i) => ({
  id: `css-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🎨 CSS Master: ${title}</h2><p>Engenharia de estilos e sistemas visuais de alta performance.</p></div>`,
  quizId: `css-mq${i + 1}`
}));
