
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
    // Adicionar outras KAs conforme necessário seguindo o mesmo padrão de pasta
  ]
};
