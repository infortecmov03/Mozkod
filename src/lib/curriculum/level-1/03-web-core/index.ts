import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quiz1 } from './theory/quizzes/01-estrutura-html-quiz';
import { quiz as quiz2 } from './theory/quizzes/02-css-seletores-quiz';
import { exerciseHTML1 } from './laboratory/html/01-estrutura-basica';

export const webCore: KnowledgeArea = {
  id: 'ka-web-core',
  title: '03. Web Core (HTML/CSS)',
  description: 'A estrutura e o estilo da web moderna.',
  load: '25h',
  iconName: 'Globe',
  theory: lessons,
  quizzes: [quiz1, quiz2],
  practice: {
    html: [exerciseHTML1]
  }
};