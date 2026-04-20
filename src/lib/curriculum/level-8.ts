
import { Module } from './types';

export const level8: Module = {
  id: '8',
  title: 'Nível 8: Linguagens de Programação',
  level: 'Master',
  description: 'Domínio de sintaxes específicas.',
  image: 'web-dev',
  knowledgeAreas: [
    { id: 'lang-html', title: 'HTML', description: 'Web.', supportedLanguages: ['html'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-css', title: 'CSS', description: 'Estilo.', supportedLanguages: ['css'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-javascript', title: 'JavaScript', description: 'Scripts.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-typescript', title: 'TypeScript', description: 'Tipagem.', supportedLanguages: ['typescript'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-python', title: 'Python', description: 'Geral.', supportedLanguages: ['python'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-sql', title: 'SQL', description: 'Dados.', supportedLanguages: ['sql'], theoryLessons: [], practiceExercises: [] }
  ]
};
