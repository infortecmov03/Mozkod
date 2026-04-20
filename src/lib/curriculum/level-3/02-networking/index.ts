import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const networking: KnowledgeArea = {
  id: 'ka-networking',
  title: '02. Networking',
  description: 'Comunicação digital: protocolos, roteamento, segurança de rede e nuvem.',
  load: '40h',
  iconName: 'Globe',
  theory: lessons,
  quizzes: Array.from({ length: 21 }, (_, i) => ({
    id: `net-q${i + 1}`,
    title: `Networking Quiz ${i + 1}`,
    questions: [],
    passingScore: 70
  })),
  practice: {
    bash: []
  }
};
