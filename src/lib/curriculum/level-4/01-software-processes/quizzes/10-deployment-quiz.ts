import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q10-master",
  title: "Quiz: Estratégias de Lançamento Profissionais",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Como funciona o Blue-Green Deployment?",
      options: ["O site muda de cor a cada hora", "Alterna entre dois ambientes idênticos para garantir zero downtime e rollback fácil", "Lança o site apenas para utilizadores de olhos azuis", "Usa apenas servidores de energia solar"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual o objetivo do Canary Deployment?",
      options: ["Testar o site em pássaros", "Lançar a nova versão para uma pequena percentagem de utilizadores reais para monitorizar erros", "Mudar o logotipo para um canário", "Acelerar o download de fontes"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que é um 'Rolling Update'?",
      options: ["Apagar o servidor e criar um novo", "Atualizar os servidores um por um em sequência", "Fazer o deploy apenas no final do ano", "Rodar o código em círculos"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Qual a maior dificuldade de um Rollback em produção?",
      options: ["O botão de desfazer é invisível", "Incompatibilidade de dados entre a nova versão e o esquema antigo da base de dados", "A internet é lenta", "O programador esqueceu a senha"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Estratégias de deploy modernas visam principalmente:",
      options: ["Reduzir o custo de hosting", "Minimizar o risco de falhas e o tempo de indisponibilidade (Downtime)", "Aumentar o número de curtidas", "Obrigar o uso de Docker"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "No Blue-Green, se o ambiente 'Green' falha após a viragem do tráfego, o que fazemos?",
      options: ["Reiniciamos a internet", "Viramos o Load Balancer de volta para o ambiente 'Blue' (Rollback)", "Apagamos o banco de dados", "Esperamos 24 horas"],
      correctAnswer: 1
    }
  ]
};