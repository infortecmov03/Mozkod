
import { Module } from '../types';
import { softwareEngineering } from './01-se';

export const level4: Module = {
  id: '4',
  title: 'Nível 4: Engenharia de Software',
  level: 'Advanced',
  description: 'Construa software profissional com qualidade e arquitetura.',
  image: 'hero-bg',
  knowledgeAreas: [
    softwareEngineering,
    { id: 'ka-design', title: '02. Software Design', description: 'SOLID e Padrões.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-qa', title: '03. Quality Assurance', description: 'Testes Automatizados.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-requirements', title: '04. Requirements', description: 'Análise de Requisitos.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] }
  ]
};
