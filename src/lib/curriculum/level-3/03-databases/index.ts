
import type { KnowledgeArea } from '../../types';

export const databases: KnowledgeArea = {
  id: 'ka-databases',
  title: '03. Databases',
  description: 'Sistemas de Gestão de Bases de Dados Relacionais e Não-Relacionais.',
  load: '40h',
  iconName: 'Database',
  theory: [
    {
      id: 'db-t1',
      title: 'O Modelo Relacional',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Tabelas e Relações</h2>
          <p>No modelo relacional, os dados são organizados em tabelas com linhas (registos) e colunas (atributos).</p>
          <div class="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h4 class="font-bold">Chaves Primárias (PK):</h4>
            <p class="text-sm">Identificador único de uma linha.</p>
            <h4 class="font-bold mt-2">Chaves Estrangeiras (FK):</h4>
            <p class="text-sm">Referência a uma PK noutra tabela para criar relações.</p>
          </div>
        </div>
      `,
      quizId: 'db-t1-quiz'
    },
    {
      id: 'db-t2',
      title: 'Normalização de Dados',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Reduzindo Redundância</h2>
          <p>A normalização (1NF, 2NF, 3NF) é o processo de organizar as tabelas para minimizar a duplicação de dados e garantir a integridade.</p>
        </div>
      `,
      quizId: 'db-t2-quiz'
    },
    {
      id: 'db-t3',
      title: 'Introdução ao NoSQL',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Escalabilidade Horizontal</h2>
          <p>Bases de Dados NoSQL (como MongoDB ou Firestore) são ideais para dados não estruturados e alta escalabilidade.</p>
          <ul class="list-disc ml-6 space-y-2">
            <li><strong>Documentos:</strong> JSON-like (MongoDB).</li>
            <li><strong>Key-Value:</strong> Rápidos (Redis).</li>
            <li><strong>Grafos:</strong> Relacionamentos complexos (Neo4j).</li>
          </ul>
        </div>
      `,
      quizId: 'db-t3-quiz'
    }
  ],
  practice: {
    sql: [
      {
        id: 'db-p1',
        language: 'sql',
        title: 'Laboratório: Filtragem com WHERE',
        description: 'Usando cláusulas de filtragem.',
        statement: 'Selecione todos os usuários da tabela "profiles" que tenham mais de 100 pontos.',
        template: 'SELECT * FROM profiles WHERE ',
        detailedExplanation: '<p>A cláusula WHERE permite filtrar linhas baseando-se numa condição lógica.</p>',
        objectives: [
          { id: 'obj1', description: 'Filtrar por total_points > 100', test: 'total_points > 100' }
        ]
      },
      {
        id: 'db-p2',
        language: 'sql',
        title: 'Laboratório: JOINs',
        description: 'Unindo tabelas.',
        statement: 'Faça um INNER JOIN entre "users" e "posts" usando o id do usuário.',
        template: 'SELECT * FROM users INNER JOIN posts ON ',
        detailedExplanation: '<p>JOINs permitem combinar dados de múltiplas tabelas.</p>',
        objectives: [
          { id: 'obj1', description: 'Condição de igualdade no ON', test: 'users.id = posts.user_id' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'db-t1-quiz',
      title: 'Quiz: Bases de Dados',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'O que garante a unicidade de uma linha numa tabela?',
          options: ['Foreign Key', 'Primary Key', 'Index'],
          correctAnswer: 1
        }
      ]
    }
  ]
};
