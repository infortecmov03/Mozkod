import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

// Import Quizzes
import { quiz as q1 } from './theory/quizzes/01-variaveis-tipos-quiz';
import { quiz as q2 } from './theory/quizzes/02-operadores-quiz';
import { quiz as q3 } from './theory/quizzes/03-strings-quiz';

// Import Labs (JS)
import { exercise as js1 } from './laboratory/javascript/01-variaveis';
import { exercise as js2 } from './laboratory/javascript/02-operadores';
import { exercise as js3 } from './laboratory/javascript/03-strings';

// Import Labs (PY)
import { exercise as py1 } from './laboratory/python/01-variaveis';
import { exercise as py2 } from './laboratory/python/02-operadores';
import { exercise as py3 } from './laboratory/python/03-strings';

// Import Labs (JAVA)
import { exercise as jv1 } from './laboratory/java/01-variaveis';
import { exercise as jv2 } from './laboratory/java/02-operadores';
import { exercise as jv3 } from './laboratory/java/03-strings';

// Import Labs (CPP)
import { exercise as cp1 } from './laboratory/cpp/01-variaveis';
import { exercise as cp2 } from './laboratory/cpp/02-operadores';
import { exercise as cp3 } from './laboratory/cpp/03-strings';

export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-programming-fundamentals',
  title: '02. Programming Fundamentals',
  description: 'Lógica universal, variáveis e estruturas de controlo.',
  load: '30h',
  iconName: 'Code2',
  theory: lessons,
  quizzes: [q1, q2, q3],
  practice: {
    javascript: [js1, js2, js3],
    python: [py1, py2, py3],
    java: [jv1, jv2, jv3],
    cpp: [cp1, cp2, cp3]
  }
};
