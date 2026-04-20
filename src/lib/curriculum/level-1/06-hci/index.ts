
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

// Import Quizzes
import { quiz as q1 } from './quizzes/01-hci-fundamentos-quiz';
import { quiz as q2 } from './quizzes/02-usabilidade-quiz';

// Import Labs
import { exercise as ex1 } from './laboratory/01-analise-usabilidade';
import { exercise as ex2 } from './laboratory/02-acessibilidade-lab';

export const hci: KnowledgeArea = {
  id: 'ka-hci',
  title: '06. HCI (Interação Humano-Computador)',
  description: 'Design centrado no utilizador, princípios de usabilidade e arquitetura de interfaces.',
  load: '20h',
  iconName: 'Layout',
  theory: lessons,
  quizzes: [q1, q2],
  practice: {
    design: [ex1, ex2]
  }
};
