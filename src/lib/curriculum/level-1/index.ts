
import { Module } from '../types';
import { csCore } from './01-cs-core';
import { programmingFundamentals } from './02-programming-fundamentals';

export const level1: Module = {
  id: '1',
  title: 'Nível 1: Fundamentos (Core Foundations)',
  level: 'Beginner',
  description: 'A base essencial de CS e Programação para quem está a começar do zero.',
  image: 'cs-core',
  knowledgeAreas: [
    csCore,
    programmingFundamentals,
    { id: 'ka-web-core', title: '03. Web Core', description: 'HTML5 e CSS3.', theoryLessons: [], practiceExercises: [], supportedLanguages: ['html', 'css'] },
    { id: 'ka-tech-english', title: '04. Tech English', description: 'Inglês Técnico.', theoryLessons: [], practiceExercises: [], supportedLanguages: [] },
    { id: 'ka-git', title: '05. Git & VC', description: 'Controlo de Versão.', theoryLessons: [], practiceExercises: [], supportedLanguages: ['bash'] },
    { id: 'ka-hci', title: '06. HCI', description: 'Interação Humano-Computador.', theoryLessons: [], practiceExercises: [], supportedLanguages: [] },
    { id: 'ka-dev-tools', title: '07. Dev Tools', description: 'VS Code e Terminal.', theoryLessons: [], practiceExercises: [], supportedLanguages: ['bash'] }
  ]
};
