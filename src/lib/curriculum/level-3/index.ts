
import { Module } from '../types';
import { os } from './01-os';

export const level3: Module = {
  id: '3',
  title: 'Nível 3: Sistemas e Infraestrutura',
  level: 'Intermediate',
  description: 'Entenda como os computadores comunicam e gerem recursos.',
  image: 'cs-core',
  knowledgeAreas: [
    os,
    { id: 'ka-networking', title: '02. Networking', description: 'Protocolos HTTP e TCP/IP.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-databases', title: '03. Databases', description: 'SQL e Modelação Relacional.', supportedLanguages: ['sql'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-security', title: '04. Security', description: 'Cibersegurança básica.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] }
  ]
};
