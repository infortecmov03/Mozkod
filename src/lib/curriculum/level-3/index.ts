
import { Module } from '../types';

export const level3: Module = {
  id: '3',
  title: 'Nível 3: Sistemas e Infraestrutura',
  level: 'Intermediate',
  description: 'Funcionamento interno de sistemas e redes.',
  image: 'cs-core',
  knowledgeAreas: [
    { id: 'ka-os', title: '01. Operating Systems', description: 'Kernel, Processos e Memória.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-networking', title: '02. Networking', description: 'Protocolos TCP/IP e HTTP.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-databases', title: '03. Databases', description: 'Modelagem SQL e NoSQL.', supportedLanguages: ['sql'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-security', title: '04. Security', description: 'Cibersegurança e Defesa.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] }
  ]
};
