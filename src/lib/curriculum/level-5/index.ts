
import { Module } from '../types';

export const level5: Module = {
  id: '5',
  title: 'Nível 5: Especializações',
  level: 'Professional',
  description: 'Trilhas verticais de tecnologia avançada.',
  image: 'ai-ml',
  knowledgeAreas: [
    { id: 'ka-web-advanced', title: '01. Web Advanced', description: 'React e Next.js.', supportedLanguages: ['typescript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-mobile', title: '02. Mobile', description: 'Flutter e React Native.', supportedLanguages: ['dart', 'javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-ai-ml', title: '03. AI & ML', description: 'Python para Inteligência Artificial.', supportedLanguages: ['python'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-cloud', title: '04. Cloud Computing', description: 'AWS e Azure.', supportedLanguages: ['bash', 'terraform'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-cybersecurity', title: '05. Cybersecurity', description: 'Segurança ofensiva.', supportedLanguages: ['python', 'bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-data-science', title: '06. Data Science', description: 'Análise de dados.', supportedLanguages: ['python', 'r'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-blockchain', title: '07. Blockchain', description: 'Web3 e Solidity.', supportedLanguages: ['solidity', 'javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-game-dev', title: '08. Game Development', description: 'Unity e Unreal.', supportedLanguages: ['csharp', 'cpp'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-iot', title: '09. IoT', description: 'Arduino e Sensores.', supportedLanguages: ['cpp', 'python'], theoryLessons: [], practiceExercises: [] }
  ]
};
