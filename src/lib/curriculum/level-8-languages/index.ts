
import type { Level, KnowledgeArea } from '../types';
import { htmlKA } from './01-html/index';
import { cssKA } from './02-css/index';
import { javascriptKA } from './03-javascript/index';

const pythonMaster: KnowledgeArea = {
  id: 'lang-python-master',
  title: '04. Python Master',
  description: 'Metaprogramação, Async e Arquiteturas Escaláveis.',
  load: '40h',
  iconName: 'Code2',
  theory: [
    {
      id: 'py-master-t1',
      title: 'AsyncIO e Concorrência',
      content: '<p>Escreve código Python que lida com milhares de conexões simultâneas.</p>',
      quizId: 'py-master-t1-quiz'
    }
  ],
  practice: {
    python: [
      {
        id: 'py-master-p1',
        language: 'python',
        title: 'Laboratório: Coroutines',
        description: 'Uso de async/await.',
        statement: 'Defina uma função assíncrona "fetch_data".',
        template: 'async def fetch_data():\n    pass',
        detailedExplanation: '<p>Asincronismo é crucial para IO-bound tasks.</p>',
        objectives: [{ id: 'obj1', description: 'Usar async def', test: 'async def' }]
      }
    ]
  },
  quizzes: []
};

const javaMaster: KnowledgeArea = {
  id: 'lang-java-master',
  title: '05. Java Master',
  description: 'JVM Internals, Spring Boot e Microsserviços.',
  load: '50h',
  iconName: 'Coffee',
  theory: [
    {
      id: 'java-master-t1',
      title: 'Garbage Collection e Memória',
      content: '<p>Como a JVM gere a memória e otimiza a performance.</p>',
      quizId: 'java-master-t1-quiz'
    }
  ],
  practice: {
    java: [
      {
        id: 'java-master-p1',
        language: 'java',
        title: 'Laboratório: Streams API',
        description: 'Processamento funcional em Java.',
        statement: 'Use .filter() numa lista de números.',
        template: 'lista.stream().filter(n -> n > 10)',
        detailedExplanation: '<p>Streams tornam o código Java mais limpo e declarativo.</p>',
        objectives: [{ id: 'obj1', description: 'Usar filter', test: '.filter' }]
      }
    ]
  },
  quizzes: []
};

export const level8: Level = {
  id: 8,
  title: 'Nível 8: Domínio de Linguagens',
  description: 'Especialização profunda para se tornar um mestre em tecnologias específicas.',
  knowledgeAreas: [htmlKA, cssKA, javascriptKA, pythonMaster, javaMaster]
};
