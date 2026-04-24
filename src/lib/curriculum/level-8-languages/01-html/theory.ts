import { lesson as l1 } from './theory/01-structure';
import { lesson as l2 } from './theory/02-meta-seo';
import { lesson as l3 } from './theory/03-semantics-accessibility';
import { lesson as l4 } from './theory/04-text-hierarchy-navigation';
import { lesson as l5 } from './theory/05-identity-attributes';
import { lesson as l6 } from './theory/06-responsive-images';
import { lesson as l7 } from './theory/07-tables-data';
import { lesson as l8 } from './theory/08-forms-master';
import { lesson as l9 } from './theory/09-constraint-validation';
import { lesson as l10 } from './theory/10-multimedia-vtt';
import { lesson as l11 } from './theory/11-svg-optimization';
import { lesson as l12 } from './theory/12-aria-deep-dive';
import { lesson as l13 } from './theory/13-microdata-jsonld';
import { lesson as l14 } from './theory/14-canvas-engineering';
import type { TheoryLesson } from '../../types';

const htmlTitles = [
  "Fase 1: Estrutura Master, DOCTYPE e Standards",
  "Fase 1: Meta Tags, SEO Técnico e Social Graphs",
  "Fase 1: Semântica Master e Acessibilidade (A11y)",
  "Fase 1: Hierarquia de Texto e Navegação Crítica",
  "Fase 1: Atributos de Identidade: Hooks para CSS/JS",
  "Fase 1: Imagens Responsivas e Otimização de LCP",
  "Fase 2: Tabelas Complexas e Organização de Dados",
  "Fase 2: Formulários Master e Validação Nativa",
  "Fase 2: Constraint Validation API e UX de Erros",
  "Fase 2: Multimedia: Áudio e Vídeo com WebVTT",
  "Fase 2: SVG de Elite: Manipulação XML e Vetores",
  "Fase 3: Acessibilidade Profunda: WAI-ARIA e Roles",
  "Fase 3: Microdata, JSON-LD e SEO de Dados",
  "Fase 3: Canvas API: Renderização Gráfica 2D",
  "Fase 3: Web Components: Templates e Custom Elements",
  "Fase 3: Shadow DOM: Encapsulamento e Isolamento",
  "Fase 3: Drag and Drop API e Interatividade Nativa",
  "Fase 3: Web Storage, IndexedDB e Cache Persistente",
  "Fase 3: Web Workers e Paralelismo de Script",
  "Fase 3: History API: Roteamento de SPAs do Zero",
  "Fase 3: Capstone: Auditoria de Segurança e Cookies"
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
  8: l9,
  9: l10,
  10: l11,
  11: l12,
  12: l13,
  13: l14
};

export const lessons: TheoryLesson[] = htmlTitles.map((title, i) => {
  if (lessonsSource[i]) {
    return {
      ...lessonsSource[i],
      title: title,
      id: `html-m${i + 1}`,
      quizId: `html-mq${i + 1}`
    };
  }

  return {
    id: `html-m${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📄 HTML Master: ${title}</h2><p>Arquitetura de documentos de alta compexidade seguindo padrões W3C.</p></div>`,
    quizId: `html-mq${i + 1}`,
    enableInteractive: true
  };
});
