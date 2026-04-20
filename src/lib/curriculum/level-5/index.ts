
import { Module } from '../types';

export const level5: Module = {
  id: '5',
  title: 'Nível 5: Especializações',
  level: 'Professional',
  description: 'Escolha a sua trilha de especialização tecnológica.',
  image: 'ai-ml',
  knowledgeAreas: [
    { id: 'ka-web-advanced', title: '01. Web Advanced', description: 'React e Next.js.', supportedLanguages: ['typescript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-mobile', title: '02. Mobile', description: 'Flutter e React Native.', supportedLanguages: ['dart', 'javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-ai-ml', title: '03. AI & ML', description: 'Inteligência Artificial.', supportedLanguages: ['python'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-cloud', title: '04. Cloud Computing', description: 'AWS e DevOps.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-cybersecurity', title: '05. Cybersecurity', description: 'Segurança Ofensiva.', supportedLanguages: ['python'], theoryLessons: [], practiceExercises: [] }
  ]
};
