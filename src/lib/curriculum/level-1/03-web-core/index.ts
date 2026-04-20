
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quiz1 as q1 } from './quizzes/01-estrutura-html-quiz';
import { quiz as q2 } from './theory/quizzes/02-css-seletores-quiz';
import { quiz as q3 } from './quizzes/03-box-model-quiz';
import { quiz as q4 } from './quizzes/04-flexbox-quiz';

// Labs
import { exerciseHTML1 } from './laboratory/html/01-estrutura-basica';
import { exercise as exerciseCSS1 } from './laboratory/css/01-seletores';

export const webCore: KnowledgeArea = {
  id: 'ka-web-core',
  title: '03. Web Core (HTML/CSS)',
  description: 'A fundação da interface moderna: estrutura semântica e estilização avançada.',
  load: '25h',
  iconName: 'Globe',
  theory: lessons,
  quizzes: [q1, q2, q3, q4],
  practice: {
    html: [exerciseHTML1],
    css: [exerciseCSS1]
  }
};
