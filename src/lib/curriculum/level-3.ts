
import { Module } from './types';

export const level3: Module = {
  id: '3',
  title: 'Nível 3: Sistemas e Infraestrutura',
  level: 'Intermediate',
  description: 'Funcionamento interno de sistemas.',
  image: 'cs-core',
  knowledgeAreas: [
    { id: 'ka-os', title: 'Operating Systems', description: 'Processos e Memória.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-networking', title: 'Networking', description: 'Protocolos e Redes.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-databases', title: 'Databases', description: 'SQL e NoSQL.', supportedLanguages: ['sql'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-security', title: 'Security', description: 'Criptografia e Defesa.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] }
  ]
};
