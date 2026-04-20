
import type { KnowledgeArea } from '../types';
import { lesson as lesson1 } from './theory/01-sistemas-numericos';
import { quiz as quiz1 } from './quizzes/01-sistemas-numericos-quiz';
import { exercise as exercise1 } from './laboratory/01-sistemas-numericos';

export const csCore: KnowledgeArea = {
  id: 'ka-cs-core',
  title: '01. CS Core',
  description: 'Fundamentos da Ciência da Computação: binário, lógica e arquitetura.',
  load: '20h',
  iconName: 'Cpu',
  theory: [lesson1],
  quizzes: [quiz1],
  practice: {
    concept: [exercise1]
  }
};
