import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

// Import Quizzes
import { quiz as q1 } from './quizzes/01-sistemas-numericos-quiz';
import { quiz as q2 } from './quizzes/02-logica-booleana-quiz';
import { quiz as q3 } from './quizzes/03-algebra-booleana-quiz';
import { quiz as q4 } from './quizzes/04-arquitetura-quiz';
import { quiz as q5 } from './quizzes/05-memoria-quiz';
import { quiz as q6 } from './quizzes/06-algoritmos-quiz';
import { quiz as q7 } from './quizzes/07-complexidade-quiz';
import { quiz as q8 } from './quizzes/08-paradigmas-quiz';

// Import Labs
import { exercise as e1 } from './laboratory/01-sistemas-numericos';
import { exercise as e2 } from './laboratory/02-logica-booleana';
import { exercise as e3 } from './laboratory/03-algebra-booleana';
import { exercise as e4 } from './laboratory/04-arquitetura';
import { exercise as e5 } from './laboratory/05-memoria';
import { exercise as e6 } from './laboratory/06-algoritmos';
import { exercise as e7 } from './laboratory/07-complexidade';
import { exercise as e8 } from './laboratory/08-paradigmas';

export const csCore: KnowledgeArea = {
  id: 'ka-cs-core',
  title: '01. CS Core',
  description: 'Ciência da Computação: binário, lógica e arquitetura.',
  load: '20h',
  iconName: 'Cpu',
  theory: lessons,
  quizzes: [q1, q2, q3, q4, q5, q6, q7, q8],
  practice: {
    concept: [e1, e2, e3, e4, e5, e6, e7, e8]
  }
};