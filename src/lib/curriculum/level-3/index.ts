
import type { Level } from '../types';

export const level3: Level = {
  id: 3,
  title: 'Nível 3: Sistemas e Infraestrutura',
  description: 'Entenda como os computadores comunicam e gerem recursos.',
  knowledgeAreas: [
    {
      id: 'ka-os',
      title: '01. Operating Systems',
      description: 'Gestão de processos, memória e kernel.',
      load: '30h',
      iconName: 'Cpu',
      theory: [],
      practice: {},
      quizzes: []
    },
    {
      id: 'ka-networking',
      title: '02. Networking',
      description: 'Protocolos HTTP, TCP/IP e infraestrutura de rede.',
      load: '25h',
      iconName: 'Globe',
      theory: [],
      practice: {},
      quizzes: []
    },
    {
      id: 'ka-databases',
      title: '03. Databases',
      description: 'SQL, modelação e bancos de dados relacionais.',
      load: '35h',
      iconName: 'Database',
      theory: [],
      practice: {},
      quizzes: []
    }
  ]
};
