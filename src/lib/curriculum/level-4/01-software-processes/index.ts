import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

export const softwareProcesses: KnowledgeArea = {
  id: 'ka-se-processes',
  title: '01. Software Processes',
  description: 'Metodologias de desenvolvimento, ciclo de vida e gestão ágil de projetos.',
  load: '30h',
  iconName: 'Settings',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    process: []
  }
};
