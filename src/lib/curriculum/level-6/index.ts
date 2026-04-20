
import { Module } from '../types';

export const level6: Module = {
  id: '6',
  title: 'Nível 6: Desenvolvimento Profissional',
  level: 'Expert',
  description: 'Soft skills, carreira e empreendedorismo tecnológico.',
  image: 'certificate-badge',
  knowledgeAreas: [
    { id: 'ka-career', title: '01. Career', description: 'LinkedIn e CV.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-soft-skills', title: '02. Soft Skills', description: 'Liderança e Comunicação.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-ethics', title: '03. Ethics', description: 'Ética na Tecnologia.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-entrepreneurship', title: '04. Entrepreneurship', description: 'Criação de Startups.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-advanced-git', title: '05. Advanced Git', description: 'Gitflow profissional.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] }
  ]
};
