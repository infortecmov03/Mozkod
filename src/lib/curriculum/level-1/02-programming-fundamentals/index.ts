
import type { KnowledgeArea } from '../../types';
import { lesson as lesson1 } from './theory/01-variaveis-tipos';
import { quiz as quiz1 } from './quizzes/01-variaveis-tipos-quiz';
import { exercise as exerciseJS } from './laboratory/javascript/01-variaveis';
import { exercise as exercisePY } from './laboratory/python/01-variaveis';

export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-programming-fundamentals',
  title: '02. Programming Fundamentals',
  description: 'Lógica, variáveis e estruturas que funcionam em qualquer linguagem.',
  load: '30h',
  iconName: 'Code2',
  theory: [lesson1],
  quizzes: [quiz1],
  practice: {
    javascript: [exerciseJS],
    python: [exercisePY]
  }
};
