import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const databases: KnowledgeArea = {
  id: 'ka-databases',
  title: '03. Databases',
  description: 'Arquitetura de dados, SQL avançado, transações ACID e sistemas NoSQL.',
  load: '45h',
  iconName: 'Database',
  theory: lessons,
  quizzes: [],
  practice: {
    sql: []
  }
};