import { quiz as q1 } from './quizzes/01-gil-quiz';

export const quizzes = [
  q1,
  {
    id: "py-mq2",
    title: "Quiz: Metaprogramação",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "O que é uma Metaclasse em Python?",
        options: ["Uma classe que não tem métodos", "A classe de uma classe", "Uma ferramenta de design visual", "Um erro de sintaxe"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "py-mq3",
    title: "Quiz: AsyncIO",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual palavra-chave é usada para suspender a execução de uma corrotina até que ela termine?",
        options: ["stop", "pause", "await", "wait"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "py-mq4",
    title: "Quiz: Memória",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual o principal mecanismo de limpeza de memória imediata do Python?",
        options: ["Manual delete", "Contagem de Referências", "Reiniciar o script", "Limpar a cache"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "py-mq5",
    title: "Quiz: FastAPI",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Em qual biblioteca o FastAPI se baseia para validação de dados?",
        options: ["Requests", "Django", "Pydantic", "NumPy"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "py-mq10",
    title: "Quiz Final: Deploy",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual servidor ASGI é recomendado para rodar apps FastAPI em produção?",
        options: ["Apache", "Nginx", "Uvicorn", "Flask Server"],
        correctAnswer: 2
      }
    ]
  }
];
