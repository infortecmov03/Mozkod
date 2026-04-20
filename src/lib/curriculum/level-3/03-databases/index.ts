
import type { KnowledgeArea } from '../../types';

export const databases: KnowledgeArea = {
  id: 'ka-databases',
  title: '03. Databases',
  description: 'Armazenamento persistente: SQL e Modelagem de Dados.',
  load: '35h',
  iconName: 'Database',
  theory: [
    {
      id: 'db-t1',
      title: 'Introdução ao SQL',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Linguagem de Consulta Estruturada</h2>
          <p>SQL é a linguagem padrão para interagir com bases de dados relacionais.</p>
        </div>
      `,
      quizId: 'db-t1-quiz'
    }
  ],
  practice: {
    sql: [
      {
        id: 'db-p1',
        language: 'sql',
        title: 'Laboratório: Selecionando Dados',
        description: 'Comando SELECT básico.',
        statement: 'Seleciona todos os campos da tabela "users".',
        template: '-- Escreve o teu SQL aqui\n',
        detailedExplanation: '<p>O asterisco (*) é usado para selecionar todas as colunas.</p>',
        objectives: [
          { id: 'obj1', description: 'Usar SELECT * FROM users', test: 'SELECT * FROM users' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'db-t1-quiz',
      title: 'Quiz: SQL Básico',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'Qual comando apaga uma tabela inteira?',
          options: ['DELETE', 'DROP', 'REMOVE'],
          correctAnswer: 1
        }
      ]
    }
  ]
};
