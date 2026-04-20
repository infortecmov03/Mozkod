import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const gitVC: KnowledgeArea = {
  id: 'ka-git-vc',
  title: '05. Git & Controlo Versão',
  description: 'Gestão de histórico e colaboração.',
  load: '15h',
  iconName: 'GitBranch',
  theory: lessons,
  quizzes: [],
  practice: {
    bash: []
  }
};
