
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercises } from './laboratory';

export const csCore: KnowledgeArea = {
  id: 'ka-cs-core',
  title: '01. CS Core (Engenharia Base)',
  description: 'Ciência da Computação Profunda: de circuitos lógicos a arquiteturas avançadas de CPU. 21 tópicos de nível universitário.',
  load: '45h',
  iconName: 'Cpu',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    concept: exercises
  }
};
