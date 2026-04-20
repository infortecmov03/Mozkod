import type { KnowledgeArea, Quiz } from '../../types';
import { lessons } from './theory';

const dbQuizzes: Quiz[] = [
  {
    id: "db-q1",
    title: "Quiz: Sistemas Relacionais",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Qual o principal objetivo de uma Primary Key?",
        options: ["Deixar o banco mais bonito", "Identificar unicamente cada registro numa tabela", "Guardar senhas de usuários", "Aumentar o tamanho do disco"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "db-q6",
    title: "Quiz: Transações ACID",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "O que garante a 'Atomicidade' numa transação?",
        options: [
          "Que a transação seja rápida",
          "Que a transação ocorra totalmente ou não ocorra nada (tudo ou nada)",
          "Que os dados sejam salvos em dois bancos",
          "Que o banco use energia solar"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "db-q7",
    title: "Quiz: Normalização",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Para estar na 1ª Forma Normal (1NF), uma tabela precisa de:",
        options: ["Ter pelo menos 100 linhas", "Não possuir grupos repetidos e ter valores atómicos", "Usar apenas cores azuis", "Estar conectada à internet"],
        correctAnswer: 1
      }
    ]
  }
];

export const databases: KnowledgeArea = {
  id: 'ka-databases',
  title: '03. Databases',
  description: 'Arquitetura de dados, SQL avançado, transações ACID e sistemas NoSQL seguindo o padrão ACM.',
  load: '45h',
  iconName: 'Database',
  theory: lessons,
  quizzes: dbQuizzes,
  practice: {
    sql: [
      {
        id: "db-p1",
        language: "sql",
        title: "Laboratório: Queries Básicas",
        description: "Pratique a seleção de dados.",
        statement: "Escreva o comando para selecionar todas as colunas da tabela 'Usuarios'.",
        template: "SELECT * FROM Usuarios;",
        detailedExplanation: "<p>O asterisco (*) é usado para selecionar todas as colunas.</p>",
        objectives: [{ id: "obj1", description: "Usar o seletor universal", test: "SELECT *" }]
      }
    ]
  }
};