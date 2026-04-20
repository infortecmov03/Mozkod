import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quiz as q1 } from './quizzes/01-arrays-quiz';
import { exercise as e1 } from './laboratory/01-linked-list';

export const dataStructures: KnowledgeArea = {
  id: 'ka-data-structures',
  title: '02. Data Structures',
  description: 'Organização avançada de dados: de Listas Ligadas a Grafos e Heaps.',
  load: '40h',
  iconName: 'Database',
  theory: lessons,
  quizzes: [q1],
  practice: {
    javascript: [e1],
    python: [e1]
  }
};
