
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

// Import Quizzes
import { quiz as q1 } from './quizzes/01-vscode-quiz';
import { quiz as q2 } from './quizzes/02-terminal-quiz';

// Import Labs
import { exercise as ex1 } from './laboratory/01-vscode-shortcuts';
import { exercise as ex2 } from './laboratory/02-terminal-basico';

export const devTools: KnowledgeArea = {
  id: 'ka-dev-tools',
  title: '07. Dev Tools',
  description: 'Domine as ferramentas que aceleram o desenvolvimento.',
  load: '15h',
  iconName: 'Wrench',
  theory: lessons,
  quizzes: [q1, q2],
  practice: {
    tool: [ex1, ex2]
  }
};
