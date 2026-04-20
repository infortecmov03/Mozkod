
import type { Level } from '../types';

export const level6: Level = {
  id: 6,
  title: 'Nível 6: Desenvolvimento Profissional',
  description: 'Carreira, Soft Skills, Portfólio e Preparação para o Mercado Global.',
  knowledgeAreas: [
    {
      id: 'ka-career',
      title: '01. Career Development',
      description: 'LinkedIn, CV e Estratégias de Entrevista.',
      load: '10h',
      iconName: 'Briefcase',
      theory: [],
      practice: {},
      quizzes: []
    },
    {
      id: 'ka-soft-skills',
      title: '02. Soft Skills',
      description: 'Comunicação, Liderança e Trabalho em Equipa.',
      load: '10h',
      iconName: 'Users',
      theory: [],
      practice: {},
      quizzes: []
    }
  ]
};
