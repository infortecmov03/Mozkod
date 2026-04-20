
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-programming-fundamentals',
  title: '02. Programming Fundamentals',
  description: 'Lógica universal expandida: de variáveis a padrões de tratamento de erros e memória. 21 tópicos fundamentais.',
  load: '50h',
  iconName: 'Code2',
  theory: lessons,
  quizzes: quizzes,
  practice: practice
};
