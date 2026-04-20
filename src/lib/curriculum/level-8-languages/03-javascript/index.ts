
import type { KnowledgeArea } from '../../types';

export const javascriptKA: KnowledgeArea = {
  id: 'lang-javascript',
  title: '03. JavaScript Master',
  description: 'Programação dinâmica e interatividade avançada no browser.',
  load: '40h',
  iconName: 'Zap',
  theory: [
    {
      id: 'js-t1',
      title: 'Motor do JavaScript',
      content: `
        <div class="space-y-4">
          <h2 class="text-xl font-bold">🚀 Como o JS funciona?</h2>
          <p>O JavaScript é executado por motores como o V8 (Chrome) e o SpiderMonkey (Firefox).</p>
        </div>
      `,
      quizId: 'js-t1-quiz'
    }
  ],
  practice: {
    javascript: [
      {
        id: 'js-p1',
        language: 'javascript',
        title: 'Laboratório: DOM e Eventos',
        description: 'Cria interações dinâmicas.',
        statement: 'Cria uma função que retorne a soma de dois números.',
        template: 'function somar(a, b) {\n  return ;\n}',
        detailedExplanation: '<p>Usa o operador + para somar os valores.</p>',
        objectives: [
          { id: 'obj1', description: 'Retornar a soma de a e b', test: 'return a + b' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'js-t1-quiz',
      title: 'Quiz: Motor do JS',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'Onde o JavaScript é executado por padrão?',
          options: ['Apenas no servidor', 'No motor do navegador', 'No sistema de ficheiros'],
          correctAnswer: 1
        }
      ]
    }
  ]
};
