
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const pythonMaster: KnowledgeArea = {
  id: 'lang-python-fase-3-4',
  title: '04. Python Fase 3 & 4: Avançado e Especialização',
  description: 'Domínio de Decoradores, Concorrência, Data Science e Engenharia de Produção. Projetos: API REST e Analisador Pandas.',
  load: '80h',
  iconName: 'Zap',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};
