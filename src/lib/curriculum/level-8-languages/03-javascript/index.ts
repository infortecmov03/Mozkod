import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const javascriptKA: KnowledgeArea = {
  id: 'lang-javascript',
  title: '03. JavaScript Master',
  description: 'Profundidade técnica na linguagem da web: de motores a metaprogramação.',
  load: '50h',
  iconName: 'Zap',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};
