
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice } from './laboratory';

export const phpEcosystem: KnowledgeArea = {
  id: 'lang-php-ecosystem',
  title: '11. PHP Ecosystem & Patterns',
  description: 'Arquitetura de sistemas, DDD, Testes de Elite e Infraestrutura Cloud-Native.',
  load: '50h',
  iconName: 'Blocks',
  theory: lessons,
  practice: practice,
  quizzes: quizzes
};
