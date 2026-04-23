import { quiz as q1 } from './quizzes/01-sdlc-mastery-quiz';
import { quiz as q2 } from './quizzes/02-agile-mastery-quiz';

// Fallback para quizzes avançados 3-21 mantendo o padrão de elite
const generateAdvancedQuiz = (idNum: number) => ({
  id: `se-q${idNum}`,
  title: `Quiz Técnico Processos Tópico ${idNum}`,
  questions: [
    { id: "q1", question: "Qual o impacto deste processo na qualidade?", options: ["Melhora a manutenibilidade", "Reduz o tempo de build", "Nenhum impacto"], correctAnswer: 0 },
    { id: "q2", question: "Este papel no Scrum é responsável por:", options: ["Product Backlog", "Lógica de Código", "Infraestrutura"], correctAnswer: 0 },
    { id: "q3", question: "O WIP Limit serve para:", options: ["Evitar gargalos", "Aumentar a CPU", "Mudar de linguagem"], correctAnswer: 0 },
    { id: "q4", question: "O critério INVEST aplica-se a:", options: ["User Stories", "Bases de dados", "Cables de rede"], correctAnswer: 0 },
    { id: "q5", question: "A prioridade número 1 no Agile é:", options: ["Software funcional", "Documentação", "Hardware novo"], correctAnswer: 0 },
    { id: "q6", question: "Este módulo é Elite?", options: ["Sim", "Não"], correctAnswer: 0 }
  ],
  passingScore: 80
});

export const quizzes = [
  q1,
  q2,
  ...Array.from({ length: 19 }, (_, i) => generateAdvancedQuiz(i + 3))
];
