
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quiz1 } from './quizzes/01-estrutura-html-quiz';
import { exerciseHTML1 } from './laboratory/html/01-estrutura-basica';

export const webCore: KnowledgeArea = {
  id: 'ka-web-core',
  title: '03. Web Core (HTML/CSS)',
  description: 'A estrutura e o estilo da web moderna.',
  load: '25h',
  iconName: 'Globe',
  theory: lessons,
  quizzes: [quiz1],
  practice: {
    html: [exerciseHTML1]
  }
};
