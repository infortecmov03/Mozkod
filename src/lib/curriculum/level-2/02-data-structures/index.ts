import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as e1 } from './laboratory/01-linked-list';

export const dataStructures: KnowledgeArea = {
  id: 'ka-data-structures',
  title: '02. Data Structures',
  description: 'A fundação física da computação: como organizar dados na RAM para máxima performance e eficiência.',
  load: '40h',
  iconName: 'Database',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    javascript: [e1],
    python: [e1]
  }
};
