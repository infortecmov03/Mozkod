import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

// Import Quizzes
import { quiz as q1 } from './quizzes/01-variaveis-tipos-quiz';
import { quiz as q2 } from './quizzes/02-operadores-quiz';
import { quiz as q3 } from './quizzes/03-strings-quiz';
import { quiz as q4 } from './quizzes/04-condicionais-quiz';
import { quiz as q5 } from './quizzes/05-loops-quiz';
import { quiz as q6 } from './quizzes/06-funcoes-quiz';
import { quiz as q7 } from './quizzes/07-arrays-quiz';
import { quiz as q8 } from './quizzes/08-objetos-quiz';
import { quiz as q9 } from './quizzes/09-recursao-quiz';
import { quiz as q10 } from './quizzes/10-poo-quiz';
import { quiz as q11 } from './quizzes/11-testes-quiz';

// Import Labs - JavaScript
import { exercise as js1 } from './laboratory/javascript/01-variaveis';
import { exercise as js2 } from './laboratory/javascript/02-operadores';
import { exercise as js3 } from './laboratory/javascript/03-condicionais';
import { exercise as js4 } from './laboratory/javascript/04-loops';
import { exercise as js5 } from './laboratory/javascript/05-funcoes';
import { exercise as js6 } from './laboratory/javascript/06-arrays';
import { exercise as js7 } from './laboratory/javascript/07-objetos';

// Import Labs - Python
import { exercise as py1 } from './laboratory/python/01-variaveis';
import { exercise as py2 } from './laboratory/python/02-operadores';
import { exercise as py3 } from './laboratory/python/03-condicionais';
import { exercise as py4 } from './laboratory/python/04-loops';
import { exercise as py5 } from './laboratory/python/05-funcoes';

// Import Labs - Java
import { exercise as jv1 } from './laboratory/java/01-variaveis';

// Import Labs - C++
import { exercise as cp1 } from './laboratory/cpp/01-variaveis';

export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-programming-fundamentals',
  title: '02. Programming Fundamentals',
  description: 'Lógica universal, variáveis e estruturas de controlo em 4 linguagens.',
  load: '30h',
  iconName: 'Code2',
  theory: lessons,
  quizzes: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11],
  practice: {
    javascript: [js1, js2, js3, js4, js5, js6, js7],
    python: [py1, py2, py3, py4, py5],
    java: [jv1],
    cpp: [cp1]
  }
};
