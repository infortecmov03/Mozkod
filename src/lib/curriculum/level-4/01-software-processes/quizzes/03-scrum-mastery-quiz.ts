import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q3-master",
  title: "Quiz: Scrum e Gestão de Incrementos",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Quem é o responsável final por gerir e ordenar o Product Backlog?",
      options: [
        "O Scrum Master",
        "O Product Owner",
        "Os Developers",
        "O Cliente diretamente"
      ],
      correctAnswer: 1,
      explanation: "O Product Owner é o único ponto de autoridade sobre o conteúdo e a prioridade do backlog."
    },
    {
      id: "q2",
      question: "Qual o objetivo principal da Sprint Retrospective?",
      options: [
        "Demonstrar o código aos clientes",
        "Avaliar como a Sprint correu em termos de pessoas, ferramentas e processos para planear melhorias",
        "Decidir quais tarefas serão feitas na próxima Sprint",
        "Corrigir bugs encontrados em produção"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Se a equipa não termina todos os itens da Sprint, o que acontece aos itens incompletos?",
      options: [
        "São marcados como concluídos",
        "São movidos para a próxima Sprint sem passar pelo PO",
        "Voltam para o Product Backlog para serem re-priorizados",
        "O Scrum Master deve ser demitido"
      ],
      correctAnswer: 2,
      explanation: "Scrum foca na inspeção. Se não está 'Done', volta ao backlog para o PO decidir o valor futuro."
    },
    {
      id: "q4",
      question: "A Definition of Done (DoD) é importante porque:",
      options: [
        "Garante a transparência e um padrão de qualidade comum para o Incremento",
        "Serve para castigar programadores lentos",
        "É um documento exigido pela lei moçambicana",
        "Impede que o cliente peça novas funcionalidades"
      ],
      correctAnswer: 0
    },
    {
      id: "q5",
      question: "Qual o papel do Scrum Master durante a Daily Scrum?",
      options: [
        "Atribuir tarefas a cada programador",
        "Cobrar a velocidade da equipa",
        "Garantir que a reunião ocorre e que se mantém no limite de 15 minutos",
        "Decidir a arquitetura do sistema"
      ],
      correctAnswer: 2,
      explanation: "O Scrum Master facilita o processo; a reunião é para os Developers se coordenarem."
    },
    {
      id: "q6",
      question: "Um Sprint Goal claro serve para:",
      options: [
        "Aumentar o número de horas trabalhadas",
        "Dar um propósito e foco à equipa para além de apenas completar tarefas individuais",
        "Substituir o Product Backlog",
        "Medir a performance do computador"
      ],
      correctAnswer: 1
    }
  ]
};