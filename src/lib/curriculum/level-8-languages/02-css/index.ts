
import type { KnowledgeArea } from '../../types';

export const cssKA: KnowledgeArea = {
  id: 'lang-css',
  title: '02. CSS Master',
  description: 'Domínio de layout, animações e arquitetura CSS.',
  load: '30h',
  iconName: 'Palette',
  theory: [
    {
      id: 'css-t1',
      title: 'Seletores e Especificidade',
      content: `
        <div class="space-y-4">
          <h2 class="text-xl font-bold">🎯 O Poder dos Seletores</h2>
          <p>O CSS permite-te escolher exatamente quais os elementos HTML que queres estilizar.</p>
          <div class="bg-card p-4 rounded-lg font-code">
            p { color: blue; } /* Seleciona todos os parágrafos */
          </div>
        </div>
      `,
      quizId: 'css-t1-quiz'
    }
  ],
  practice: {
    css: [
      {
        id: 'css-p1',
        language: 'css',
        title: 'Laboratório: Estilização Básica',
        description: 'Muda as cores e fontes de uma página.',
        statement: 'Altera a cor do título h1 para azul.',
        template: 'h1 {\n  color: ;\n}',
        detailedExplanation: '<p>Usa a propriedade color para mudar a cor do texto.</p>',
        objectives: [
          { id: 'obj1', description: 'Cor do h1 deve ser blue', test: 'color: blue' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'css-t1-quiz',
      title: 'Quiz: Fundamentos de CSS',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'O que significa CSS?',
          options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets'],
          correctAnswer: 1
        }
      ]
    }
  ]
};
