import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const os: KnowledgeArea = {
  id: 'ka-os',
  title: '01. Operating Systems',
  description: 'Arquitetura de Kernels, gestão de processos, memória, ficheiros e segurança de sistemas.',
  load: '45h',
  iconName: 'Cpu',
  theory: lessons,
  quizzes: [], // Quizzes a serem preenchidos separadamente
  practice: {
    bash: [] // Laboratórios a serem preenchidos separadamente
  }
};