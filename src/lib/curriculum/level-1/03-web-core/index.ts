import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quiz1 as q1 } from './quizzes/01-estrutura-html-quiz';
import { quiz as q2 } from './theory/quizzes/02-css-seletores-quiz';

export const webCore: KnowledgeArea = {
  id: 'ka-web-core',
  title: '03. Web Core (HTML/CSS)',
  description: 'A fundação da interface moderna.',
  load: '25h',
  iconName: 'Globe',
  theory: lessons,
  quizzes: [q1, q2],
  practice: {
    html: [],
    css: []
  }
};
