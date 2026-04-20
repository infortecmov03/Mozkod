import type { KnowledgeArea } from '../../types';
import { lesson as l1 } from './theory/01-philosophy';
import { quiz as q1 } from './quizzes/01-philosophy-quiz';

export const kotlinMaster: KnowledgeArea = {
  id: 'lang-kotlin-master',
  title: '06. Kotlin Master',
  description: 'Desenvolvimento moderno para Android e Backend robusto com Coroutines.',
  load: '45h',
  iconName: 'Smartphone',
  theory: [l1],
  practice: {
    kotlin: []
  },
  quizzes: [q1]
};