
import { Module } from './types';

export const level6: Module = {
  id: '6',
  title: 'Nível 6: Desenvolvimento Profissional',
  level: 'Expert',
  description: 'Carreira e Empreendedorismo.',
  image: 'certificate-badge',
  knowledgeAreas: [
    { id: 'ka-career', title: 'Career', description: 'CV e LinkedIn.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-soft-skills', title: 'Soft Skills', description: 'Comunicação.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-ethics', title: 'Ethics', description: 'Responsabilidade.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-entrepreneurship', title: 'Entrepreneurship', description: 'MVP.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-advanced-git', title: 'Advanced Git', description: 'Workflow.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] }
  ]
};
