import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

export const softwareProcesses: KnowledgeArea = {
  id: 'ka-se-processes',
  title: '01. Software Processes',
  description: 'Metodologias de desenvolvimento, ciclo de vida, agilidade industrial e métricas de performance.',
  load: '30h',
  iconName: 'Settings',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    process: [
      {
        id: 'se-p1',
        language: 'process',
        title: 'Laboratório: Auditoria de Métricas DORA',
        description: 'Analise o estado de saúde de uma equipa fictícia.',
        statement: 'Identifique qual métrica DORA mede o tempo do commit à produção. Escreva "Lead Time".',
        template: 'let metrica = "";',
        detailedExplanation: '<p>O Lead Time for Changes é o indicador definitivo da agilidade do teu pipeline de entrega.</p>',
        objectives: [
          { id: 'obj1', description: 'Identificar a métrica correta', test: 'Lead Time' }
        ]
      }
    ]
  }
};
