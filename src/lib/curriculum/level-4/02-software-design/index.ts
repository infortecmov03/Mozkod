import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const softwareDesign: KnowledgeArea = {
  id: 'ka-se-design',
  title: '02. Design & Architecture',
  description: 'Princípios SOLID, Design Patterns e Arquitetura Limpa para sistemas escaláveis.',
  load: '45h',
  iconName: 'Layout',
  theory: lessons,
  practice: {
    typescript: []
  },
  quizzes: Array.from({ length: 21 }, (_, i) => ({
    id: `des-q${i + 1}`,
    title: `Design Quiz ${i + 1}`,
    questions: [],
    passingScore: 70
  }))
};
