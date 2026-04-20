
import type { Level } from '../types';
import { htmlKA } from './01-html/index';
import { cssKA } from './02-css/index';
import { javascriptKA } from './03-javascript/index';

export const level8: Level = {
  id: 8,
  title: 'Nível 8: Domínio de Linguagens',
  description: 'Especialização profunda em sintaxes, performance e ferramentas específicas.',
  knowledgeAreas: [
    htmlKA,
    cssKA,
    javascriptKA,
    {
      id: 'lang-python',
      title: '04. Python Master',
      description: 'Data Science, Automação, Django e Fast API.',
      load: '40h',
      iconName: 'Code2',
      theory: [
        {
          id: 'py-master-t1',
          title: 'Python Decorators e Metaclasses',
          content: '<div class="space-y-4"><h2 class="text-2xl font-bold">Python Avançado</h2><p>Entende como o Python funciona "under the hood" para escrever código mais eficiente.</p></div>',
          quizId: 'py-master-t1-quiz'
        }
      ],
      practice: {
        python: [
          {
            id: 'py-master-p1',
            language: 'python',
            title: 'Laboratório: Decorators',
            description: 'Cria um decorator para medir tempo de execução.',
            statement: 'Cria uma função que use o @timer decorator.',
            template: 'import time\ndef timer(func):\n    pass\n\n@timer\ndef test():\n    pass',
            detailedExplanation: '<p>Decorators permitem modificar o comportamento de funções sem alterar o seu código.</p>',
            objectives: [
              { id: 'obj1', description: 'Usar a sintaxe @timer', test: '@timer' }
            ]
          }
        ]
      },
      quizzes: []
    }
  ]
};
