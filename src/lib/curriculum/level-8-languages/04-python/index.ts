
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const pythonMaster: KnowledgeArea = {
  id: 'lang-python-master',
  title: '04. Python Master',
  description: 'Especialização profunda em arquitetura do interpretador, concorrência moderna e sistemas de dados de alta performance.',
  load: '60h',
  iconName: 'Code2',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};
