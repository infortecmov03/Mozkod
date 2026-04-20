
import { Module } from './types';

export const level4: Module = {
  id: '4',
  title: 'Nível 4: Engenharia de Software',
  level: 'Advanced',
  description: 'Arquitetura e qualidade.',
  image: 'hero-bg',
  knowledgeAreas: [
    { id: 'ka-se', title: 'Software Engineering', description: 'Ciclo de vida.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-design', title: 'Software Design', description: 'SOLID e Padrões.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-qa', title: 'Quality Assurance', description: 'Testes automatizados.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-requirements', title: 'Requirements', description: 'Elicitação e Análise.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] }
  ]
};
