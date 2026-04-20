
import { Module } from '../types';

export const level8: Module = {
  id: '8',
  title: 'Nível 8: Domínio de Linguagens',
  level: 'Master',
  description: 'Aprofunde-se em sintaxes específicas e avançadas.',
  image: 'web-dev',
  knowledgeAreas: [
    { id: 'lang-html', title: '01. HTML Master', description: 'Semântica e SEO.', supportedLanguages: ['html'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-css', title: '02. CSS Master', description: 'Animações e Flexbox.', supportedLanguages: ['css'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-js', title: '03. JS Master', description: 'ESNext e Assincronismo.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-python', title: '04. Python Master', description: 'Data e Scripts.', supportedLanguages: ['python'], theoryLessons: [], practiceExercises: [] }
  ]
};
