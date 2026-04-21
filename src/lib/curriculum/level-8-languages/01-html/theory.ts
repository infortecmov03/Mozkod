
import { lesson as l1 } from './theory/01-structure';
import { lesson as l2 } from './theory/01-semantics';
import { lesson as l3 } from './theory/02-seo-metadata';
import { lesson as l4 } from './theory/03-ssr-hydration';
import { lesson as l5 } from './theory/04-web-components';
import { lesson as l6 } from './theory/05-forms-master';
import { lesson as l7 } from './theory/07-multimedia';
import { lesson as l8 } from './theory/08-performance-master';
import { lesson as l9 } from './theory/09-shadow-dom-internals';
import { lesson as l10 } from './theory/10-focus-management';
import { lesson as l11 } from './theory/11-svg-optimization';
import { lesson as l12 } from './theory/12-constraint-validation';
import { lesson as l13 } from './theory/13-webvtt-master';
import { lesson as l14 } from './theory/14-canvas-engineering';
import { lesson as l15 } from './theory/15-webassembly-html';
import { lesson as l16 } from './theory/16-fetch-priority';
import { lesson as l17 } from './theory/17-csp-master';
import { lesson as l18 } from './theory/18-service-workers';
import { lesson as l19 } from './theory/19-webgpu-basics';
import { lesson as l20 } from './theory/20-structured-data-seo';
import { lesson as l21 } from './theory/21-security-storage';

export const lessons = [
  // FASE 1: Fundamentos (1-6)
  { ...l1, title: "Fase 1: Estrutura Master e DOCTYPE" },
  { ...l3, title: "Fase 1: Meta Tags e SEO Técnico" },
  { ...l2, title: "Fase 1: Tags Semânticas e Acessibilidade" },
  { id: "html-f1-4", title: "Fase 1: Listas e Hierarquia de Texto", content: "<p>Domínio de ol, ul, dl e a importância da ordem lógica de h1-h6.</p>", quizId: "html-mq4" },
  { id: "html-f1-5", title: "Fase 1: Links, Âncora e Alvos", content: "<p>Navegação profunda, atributos target e segurança em links externos.</p>", quizId: "html-mq5" },
  { id: "html-f1-6", title: "Fase 1: Imagens, Picture e Figcaption", content: "<p>Otimização de imagens responsivas e legendagem semântica.</p>", quizId: "html-mq6" },
  
  // FASE 2: Intermediário (7-11)
  { id: "html-f2-7", title: "Fase 2: Tabelas de Alta Complexidade", content: "<p>Estruturação de dados massivos com thead, tbody e colgroup.</p>", quizId: "html-mq7" },
  { ...l6, title: "Fase 2: Formulários e Tipos de Input" },
  { ...l12, title: "Fase 2: Validação HTML5 e Constraint API" },
  { ...l7, title: "Fase 2: Multimédia: Áudio e Vídeo Nativo" },
  { ...l11, title: "Fase 2: SVG Básico e Manipulação XML" },

  // FASE 3: Avançado (12-21)
  { ...l10, title: "Fase 3: Acessibilidade: ARIA e Roles" },
  { ...l20, title: "Fase 3: Microdata e Schema.org" },
  { ...l14, title: "Fase 3: Canvas API e Desenho no Browser" },
  { ...l5, title: "Fase 3: Web Components e Custom Elements" },
  { ...l9, title: "Fase 3: Shadow DOM e Encapsulamento" },
  { id: "html-f3-17", title: "Fase 3: Drag and Drop API", content: "<p>Implementação de interfaces interativas de arrastar e soltar.</p>", quizId: "html-mq17" },
  { id: "html-f3-18", title: "Fase 3: Web Storage (Local vs Session)", content: "<p>Persistência de dados no cliente sem cookies.</p>", quizId: "html-mq18" },
  { ...l18, title: "Fase 3: Web Workers e Service Workers" },
  { id: "html-f3-20", title: "Fase 3: History API e SPA Routing", content: "<p>Criação de rotas dinâmicas sem frameworks.</p>", quizId: "html-mq20" },
  { ...l21, title: "Fase 3: Capstone: Auditoria de Segurança e Cookies" }
];
