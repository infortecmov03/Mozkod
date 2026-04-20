
import type { KnowledgeArea } from '../../types';
import { lesson as l1 } from './theory/01-event-loop';
import { quiz as q1 } from './quizzes/01-event-loop-quiz';
import { exercise as p1 } from './laboratory/01-concurrency';

export const javascriptKA: KnowledgeArea = {
  id: 'lang-javascript',
  title: '03. JavaScript Master',
  description: 'Profundidade técnica na linguagem da web: de motores a metaprogramação.',
  load: '50h',
  iconName: 'Zap',
  theory: [l1],
  practice: {
    javascript: [p1]
  },
  quizzes: [q1]
};
