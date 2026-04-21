import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const cssKA: KnowledgeArea = {
  id: 'lang-css',
  title: '02. CSS Master',
  description: 'Engenharia de estilos, Design Systems e animações de alta performance.',
  load: '40h',
  iconName: 'Palette',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};
