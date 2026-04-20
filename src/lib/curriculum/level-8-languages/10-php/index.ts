import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const phpMaster: KnowledgeArea = {
  id: 'lang-php-master',
  title: '10. PHP Master',
  description: 'A força motriz da web: do PHP 8 moderno a arquiteturas de larga escala com Swoole.',
  load: '40h',
  iconName: 'Globe',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};