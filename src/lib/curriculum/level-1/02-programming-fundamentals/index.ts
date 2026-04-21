
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-python-fase-1',
  title: '02. Python Fase 1: Fundamentos Básicos',
  description: 'Sintaxe, tipos de dados, estruturas de controlo e lógica base. Projetos: Calculadora e Jogo de Adivinhação.',
  load: '20h',
  iconName: 'Code2',
  theory: lessons,
  quizzes: quizzes,
  practice: practice
};
