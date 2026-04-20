
import { Module } from '../types';

export const level7: Module = {
  id: '7',
  title: 'Nível 7: Certificações (freeCodeCamp)',
  level: 'Certified',
  description: 'Projetos de certificação internacional.',
  image: 'certificate-badge',
  knowledgeAreas: [
    { id: 'fcc-responsive-web', title: '01. Responsive Web', description: 'Projetos HTML/CSS.', supportedLanguages: ['html', 'css'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-js-algorithms', title: '02. JavaScript Algorithms', description: 'Lógica Pura.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-frontend-libraries', title: '03. Frontend Libraries', description: 'React e Redux.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-data-visualization', title: '04. Data Visualization', description: 'D3.js.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-relational-db', title: '05. Relational Databases', description: 'PostgreSQL.', supportedLanguages: ['sql'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-backend-apis', title: '06. Backend APIs', description: 'Node.js.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-quality-assurance', title: '07. Quality Assurance', description: 'Testes.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'fcc-capstone', title: '08. Capstone', description: 'Projeto Full Stack.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] }
  ]
};
