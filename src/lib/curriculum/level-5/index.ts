
import type { Level, KnowledgeArea } from '../types';
import { lessons as webLessons } from './01-web-engineering/theory';
import { lessons as aiLessons } from './02-ai-data-science/theory';
import { lessons as secLessons } from './03-cybersecurity-cloud/theory';

const createQuizzes = (prefix: string) => Array.from({ length: 21 }, (_, i) => ({
  id: `${prefix}-q${i + 1}`,
  title: `Quiz Tópico ${i + 1}`,
  questions: [],
  passingScore: 70
}));

const webEngineering: KnowledgeArea = {
  id: 'ka-web-eng',
  title: '01. Web Engineering',
  description: 'Mastering Next.js, Server Components e Performance de Elite.',
  load: '50h',
  iconName: 'Zap',
  theory: webLessons,
  practice: { typescript: [] },
  quizzes: createQuizzes('web-adv')
};

const aiDataScience: KnowledgeArea = {
  id: 'ka-ai-ds',
  title: '02. AI & Data Science',
  description: 'De Algoritmos Lineares a Grandes Modelos de Linguagem (LLMs).',
  load: '60h',
  iconName: 'Cpu',
  theory: aiLessons,
  practice: { python: [] },
  quizzes: createQuizzes('ai')
};

const cloudSecurity: KnowledgeArea = {
  id: 'ka-cloud-sec',
  title: '03. Cloud & Cybersecurity',
  description: 'Segurança de Sistemas, Cloud Native e DevSecOps.',
  load: '50h',
  iconName: 'ShieldCheck',
  theory: secLessons,
  practice: { bash: [] },
  quizzes: createQuizzes('sec')
};

export const level5: Level = {
  id: 5,
  title: 'Nível 5: Especializações de Elite',
  description: 'Aprofunde-se nas tecnologias de ponta que dominam o mercado global.',
  knowledgeAreas: [webEngineering, aiDataScience, cloudSecurity]
};
