
import { Module } from './types';

export const level5: Module = {
  id: '5',
  title: 'Nível 5: Especializações',
  level: 'Professional',
  description: 'Trilhas verticais de tecnologia.',
  image: 'ai-ml',
  knowledgeAreas: [
    { id: 'ka-web-advanced', title: 'Web Advanced', description: 'React, Next.js.', supportedLanguages: ['javascript', 'typescript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-mobile', title: 'Mobile', description: 'Flutter, Native.', supportedLanguages: ['dart', 'swift', 'kotlin'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-ai-ml', title: 'AI & ML', description: 'TensorFlow, PyTorch.', supportedLanguages: ['python'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-cloud', title: 'Cloud Computing', description: 'AWS, Terraform.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-cybersecurity', title: 'Cybersecurity', description: 'Pentest.', supportedLanguages: ['python', 'bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-data-science', title: 'Data Science', description: 'Pandas, R.', supportedLanguages: ['python', 'r'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-blockchain', title: 'Blockchain', description: 'Solidity, Web3.', supportedLanguages: ['solidity', 'javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-game-dev', title: 'Game Development', description: 'Unity, Unreal.', supportedLanguages: ['csharp', 'cpp'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-iot', title: 'IoT', description: 'Arduino, ESP32.', supportedLanguages: ['cpp', 'python'], theoryLessons: [], practiceExercises: [] }
  ]
};
