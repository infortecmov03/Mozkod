
import type { KnowledgeArea } from '../../types';
import { lesson as l1 } from './theory/01-selectors';
import { quiz as q1 } from './quizzes/01-selectors-quiz';
import { exercise as p1 } from './laboratory/01-grid-master';

export const cssKA: KnowledgeArea = {
  id: 'lang-css',
  title: '02. CSS Master',
  description: 'Engenharia de estilos, Design Systems e animações de alta performance.',
  load: '40h',
  iconName: 'Palette',
  theory: [l1],
  practice: {
    css: [p1]
  },
  quizzes: [q1]
};
