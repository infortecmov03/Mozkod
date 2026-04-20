import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

// Quizzes
import { quiz as q1 } from './theory/quizzes/01-variaveis-tipos-quiz';
import { quiz as q2 } from './theory/quizzes/02-operadores-quiz';
import { quiz as q3 } from './theory/quizzes/03-strings-quiz';
import { quiz as q4 } from './theory/quizzes/04-condicionais-quiz';
import { quiz as q5 } from './theory/quizzes/05-loops-quiz';
import { quiz as q6 } from './theory/quizzes/06-funcoes-quiz';

// Labs
import { exercise as js1 } from './laboratory/javascript/01-variaveis';
import { exercise as py1 } from './laboratory/python/01-variaveis';

export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-programming-fundamentals',
  title: '02. Programming Fundamentals',
  description: 'Lógica universal, variáveis e estruturas de controlo.',
  load: '30h',
  iconName: 'Code2',
  theory: lessons,
  quizzes: [q1, q2, q3, q4, q5, q6],
  practice: {
    javascript: [js1],
    python: [py1]
  }
};