
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory.ts';
import { quiz as quiz1 } from './theory/quizzes/01-variaveis-tipos-quiz';
import { exercise as exerciseJS } from './laboratory/javascript/01-variaveis';
import { exercise as exercisePY } from './laboratory/python/01-variaveis';

export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-programming-fundamentals',
  title: '02. Programming Fundamentals',
  description: 'Lógica, variáveis e estruturas que funcionam em qualquer linguagem.',
  load: '30h',
  iconName: 'Code2',
  theory: lessons,
  quizzes: [quiz1],
  practice: {
    javascript: [exerciseJS],
    python: [exercisePY]
  }
};
