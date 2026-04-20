
import type { Level, KnowledgeArea } from '../types';

const capstone: KnowledgeArea = {
  id: 'ka-capstone',
  title: '01. Capstone Project',
  description: 'Construção da aplicação final para certificação.',
  load: '100h',
  iconName: 'Trophy',
  theory: [
    {
      id: 'cap-t1',
      title: 'Do Conceito ao Lançamento',
      content: '<p>Nesta fase, vais integrar bases de dados, autenticação e UI num projeto real.</p>',
      quizId: 'cap-t1-quiz'
    }
  ],
  practice: {
    process: [
      {
        id: 'cap-p1',
        language: 'process',
        title: 'Laboratório: Definição de MVP',
        description: 'Mínimo Produto Viável.',
        statement: 'Escolha 3 funcionalidades essenciais para o teu projeto.',
        template: '1.\n2.\n3.',
        detailedExplanation: '<p>Foca-te no essencial para lançar rápido e aprender com os utilizadores.</p>',
        objectives: [{ id: 'obj1', description: 'Listar 3 funções', test: '3' }]
      }
    ]
  },
  quizzes: []
};

export const level7: Level = {
  id: 7,
  title: 'Nível 7: Projetos & Certificações',
  description: 'Consolidação de todo o currículo através de um projeto de grande escala.',
  knowledgeAreas: [capstone]
};
