import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const softwareProcesses: KnowledgeArea = {
  id: 'ka-se-processes',
  title: '01. Software Processes',
  description: 'Metodologias de desenvolvimento, ciclo de vida e gestão ágil de projetos.',
  load: '30h',
  iconName: 'Settings',
  theory: lessons,
  quizzes: Array.from({ length: 21 }, (_, i) => ({
    id: `se-q${i + 1}`,
    title: `Processes Quiz ${i + 1}`,
    questions: [],
    passingScore: 70
  })),
  practice: {
    process: []
  }
};
