
import { Module } from '../types';

export const level7: Module = {
  id: '7',
  title: 'Nível 7: Certificações',
  level: 'Certified',
  description: 'Projetos finais para certificação internacional.',
  image: 'certificate-badge',
  knowledgeAreas: [
    { id: 'fcc-web', title: '01. Responsive Web', description: 'Certificação HTML/CSS.', supportedLanguages: ['html', 'css'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-js', title: '02. JS Algorithms', description: 'Lógica e Algoritmos JS.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] }
  ]
};
