import type { KnowledgeArea } from '../../types';
import { lesson as l4 } from './theory/04-goroutines';
import { quiz as q4 } from './quizzes/04-goroutines-quiz';

export const goMaster: KnowledgeArea = {
  id: 'lang-go-master',
  title: '07. Go Master',
  description: 'Simplicidade, concorrência nativa e sistemas de cloud de alta performance.',
  load: '40h',
  iconName: 'Cloud',
  theory: [l4],
  practice: {
    go: []
  },
  quizzes: [q4]
};