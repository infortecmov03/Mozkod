
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const kotlinMaster: KnowledgeArea = {
  id: 'lang-kotlin-master',
  title: '06. Kotlin Master',
  description: 'Desenvolvimento moderno para Android e Backend robusto com Coroutines.',
  load: '45h',
  iconName: 'Smartphone',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};
