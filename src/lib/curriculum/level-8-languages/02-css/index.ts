import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
// Importar quizzes e labs conforme necessário

export const cssKA: KnowledgeArea = {
  id: 'lang-css',
  title: '02. CSS Master',
  description: 'Domínio de layout, animações e arquitetura CSS moderna.',
  load: '30h',
  iconName: 'Palette',
  theory: lessons,
  quizzes: [],
  practice: {}
};