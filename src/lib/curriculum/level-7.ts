
import { Module } from './types';

export const level7: Module = {
  id: '7',
  title: 'Nível 7: Certificações (freeCodeCamp)',
  level: 'Certified',
  description: 'Projetos finais do freeCodeCamp.',
  image: 'certificate-badge',
  knowledgeAreas: [
    { id: 'fcc-responsive-web', title: 'Responsive Web Design', description: 'HTML/CSS.', supportedLanguages: ['html', 'css'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-js-algorithms', title: 'JavaScript Algorithms', description: 'Lógica.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-frontend-libraries', title: 'Frontend Libraries', description: 'React.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-data-visualization', title: 'Data Visualization', description: 'D3.js.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-relational-db', title: 'Relational Databases', description: 'SQL.', supportedLanguages: ['sql'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-backend-apis', title: 'Backend APIs', description: 'Node.js.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-quality-assurance', title: 'Quality Assurance', description: 'Testes.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-capstone', title: 'Capstone', description: 'Full Stack.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] }
  ]
};
