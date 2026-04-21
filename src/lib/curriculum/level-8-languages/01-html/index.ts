import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-structure-lab';
import { exercise as p2 } from './laboratory/01-accessibility-lab';
import { exercise as p3 } from './laboratory/02-seo-lab';
import { exercise as p4 } from './laboratory/03-hydration-lab';
import { exercise as p5 } from './laboratory/04-web-components-lab';
import { exercise as p6 } from './laboratory/05-forms-lab';
import { exercise as p7 } from './laboratory/06-multimedia-lab';
import { exercise as p8 } from './laboratory/07-performance-lab';

// Labs de Elite (9-21)
import { exercise as p9 } from './laboratory/09-shadow-dom-lab';
import { exercise as p10 } from './laboratory/10-focus-trap-lab';
import { exercise as p11 } from './laboratory/11-svg-master-lab';
import { exercise as p12 } from './laboratory/12-custom-validation-lab';
import { exercise as p13 } from './laboratory/13-subtitles-lab';
import { exercise as p14 } from './laboratory/14-canvas-loop-lab';
import { exercise as p15 } from './laboratory/15-wasm-loader-lab';
import { exercise as p16 } from './laboratory/16-resource-hints-lab';
import { exercise as p17 } from './laboratory/17-csp-nonce-lab';
import { exercise as p18 } from './laboratory/18-sw-cache-lab';
import { exercise as p19 } from './laboratory/19-webgpu-init-lab';
import { exercise as p20 } from './laboratory/20-json-ld-lab';
import { exercise as p21 } from './laboratory/21-secure-cookies-lab';

export const htmlKA: KnowledgeArea = {
  id: 'lang-html',
  title: '01. HTML Master',
  description: 'Arquitetura de documentos de alta complexidade e padrões de acessibilidade global.',
  load: '30h',
  iconName: 'Code',
  theory: lessons,
  practice: {
    html: [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21]
  },
  quizzes: quizzes
};
