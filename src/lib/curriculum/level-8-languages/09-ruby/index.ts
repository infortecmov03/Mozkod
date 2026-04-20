
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const rubyMaster: KnowledgeArea = {
  id: 'lang-ruby-master',
  title: '09. Ruby Master',
  description: 'Elegância, produtividade e a arte do desenvolvimento centrado no humano.',
  load: '35h',
  iconName: 'Gem',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};
