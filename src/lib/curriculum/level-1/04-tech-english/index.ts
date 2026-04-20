
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quiz1 } from './quizzes/01-basic-vocab-quiz';
import { exercise1 } from './laboratory/01-vocabulary-exercise';

export const techEnglish: KnowledgeArea = {
  id: 'ka-tech-english',
  title: '04. Tech English',
  description: 'Vocabulário essencial para navegar na indústria tecnológica.',
  load: '15h',
  iconName: 'Languages',
  theory: lessons,
  quizzes: [quiz1],
  practice: {
    english: [exercise1]
  }
};
