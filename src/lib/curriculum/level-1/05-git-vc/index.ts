
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quiz as q1 } from './quizzes/01-git-basico-quiz';
import { exercise as ex1 } from './laboratory/01-comandos-basicos';

export const gitVC: KnowledgeArea = {
  id: 'ka-git-vc',
  title: '05. Git & Controlo Versão',
  description: 'Gestão de histórico, colaboração em equipa e fluxos de trabalho profissionais.',
  load: '15h',
  iconName: 'GitBranch',
  theory: lessons,
  quizzes: [q1],
  practice: {
    bash: [ex1]
  }
};
