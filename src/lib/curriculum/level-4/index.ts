
import { Module } from '../types';

export const level4: Module = {
  id: '4',
  title: 'Nível 4: Engenharia de Software',
  level: 'Advanced',
  description: 'Arquitetura, design e qualidade de software profissional.',
  image: 'hero-bg',
  knowledgeAreas: [
    { id: 'ka-se', title: '01. Software Engineering', description: 'Ciclo de vida e Metodologias Ágeis.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-design', title: '02. Software Design', description: 'SOLID e Design Patterns.', supportedLanguages: ['javascript', 'python', 'java'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-qa', title: '03. Quality Assurance', description: 'Testes unitários e automação.', supportedLanguages: ['javascript', 'python', 'java'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-requirements', title: '04. Requirements', description: 'Elicitação e Análise.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] }
  ]
};
