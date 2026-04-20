
import type { KnowledgeArea } from '../../types';
import { lesson as l1 } from './theory/01-semantics';
import { quiz as q1 } from './quizzes/01-semantics-quiz';
import { exercise as p1 } from './laboratory/01-accessibility-lab';

export const htmlKA: KnowledgeArea = {
  id: 'lang-html',
  title: '01. HTML Master',
  description: 'Arquitetura de documentos de alta complexidade e padrões de acessibilidade global.',
  load: '30h',
  iconName: 'Code',
  theory: [l1],
  practice: {
    html: [p1]
  },
  quizzes: [q1]
};
