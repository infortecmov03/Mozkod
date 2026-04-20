
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
    { 
      id: 'ka-web-core', 
      title: '03. Web Core', 
      description: 'HTML5 e CSS3.', 
      supportedLanguages: ['html', 'css'],
      theoryLessons: [],
      practiceExercises: []
    },
    { 
      id: 'ka-tech-english', 
      title: '04. Tech English', 
      description: 'Inglês Técnico.', 
      supportedLanguages: [],
      theoryLessons: [],
      practiceExercises: []
    }
  ]
};
