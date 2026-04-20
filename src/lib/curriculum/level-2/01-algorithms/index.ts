import type { KnowledgeArea, Quiz, PracticeExercise } from '../../types';
import { lessons } from './theory';

// Import Quizzes
import { quiz as q1 } from './quizzes/01-big-o-quiz';
import { quiz as q2 } from './quizzes/02-busca-quiz';

// Import Labs
import { exercise as e1 } from './laboratory/01-busca-binaria';
import { exercise as e2 } from './laboratory/02-bubble-sort';

export const algorithms: KnowledgeArea = {
  id: 'ka-algorithms',
  title: '01. Algorithms',
  description: 'Lógica de resolução de problemas, ordenação, busca e análise de eficiência.',
  load: '35h',
  iconName: 'Zap',
  theory: lessons,
  quizzes: [q1, q2],
  practice: {
    javascript: [e1, e2],
    python: [e1, e2]
  }
};
