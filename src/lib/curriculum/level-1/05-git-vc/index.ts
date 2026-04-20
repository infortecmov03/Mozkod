
import type { KnowledgeArea } from '../../types';
import { lesson as lesson1 } from './theory/01-o-que-e-git';
import { quiz as quiz1 } from './quizzes/01-git-basico-quiz';
import { exercise as exercise1 } from './laboratory/01-comandos-basicos';

export const gitVC: KnowledgeArea = {
  id: 'ka-git-vc',
  title: '05. Git & Controlo Versão',
  description: 'Aprenda a gerir o histórico do seu código e a colaborar em equipa.',
  load: '15h',
  iconName: 'GitBranch',
  theory: [lesson1],
  quizzes: [quiz1],
  practice: {
    bash: [exercise1]
  }
};
