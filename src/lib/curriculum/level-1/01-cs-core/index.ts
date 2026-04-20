import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quiz as q1 } from './quizzes/01-sistemas-numericos-quiz';
import { quiz as q2 } from './quizzes/02-logica-booleana-quiz';
import { quiz as q3 } from './quizzes/03-algebra-booleana-quiz';
import { exercise as e1 } from './laboratory/01-sistemas-numericos';
import { exercise as e2 } from './laboratory/02-logica-booleana';

export const csCore: KnowledgeArea = {
  id: 'ka-cs-core',
  title: '01. CS Core',
  description: 'Fundamentos da Ciência da Computação: binário, lógica e arquitetura.',
  load: '20h',
  iconName: 'Cpu',
  theory: lessons,
  quizzes: [q1, q2, q3],
  practice: {
    concept: [e1, e2]
  }
};