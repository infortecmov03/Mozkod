import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const databases: KnowledgeArea = {
  id: 'ka-databases',
  title: '03. Databases',
  description: 'Arquitetura de dados, SQL avançado, transações ACID e sistemas NoSQL seguindo o padrão ACM.',
  load: '45h',
  iconName: 'Database',
  theory: lessons,
  quizzes: lessons.map(l => ({
    id: l.quizId,
    title: `Quiz: ${l.title}`,
    questions: [],
    passingScore: 70
  })),
  practice: {
    sql: [
      {
        id: "db-p1",
        language: "sql",
        title: "Laboratório: Queries Básicas",
        description: "Pratique a seleção de dados.",
        statement: "Escreva o comando para selecionar todas as colunas da tabela 'Usuarios'.",
        template: "SELECT  FROM Usuarios;",
        detailedExplanation: "<p>O asterisco (*) é usado para selecionar todas as colunas.</p>",
        objectives: [{ id: "obj1", description: "Usar o seletor universal", test: "*" }]
      }
    ]
  }
};