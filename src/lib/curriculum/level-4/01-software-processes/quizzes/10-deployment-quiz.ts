import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q10-master",
  title: "Quiz: Estratégias de Lançamento e Resiliência",
  passingScore: 80,
  questions: [
    {
      id: "q10_1",
      question: "Qual a principal vantagem do Blue-Green Deployment?",
      options: [
        "Usa menos memória RAM no servidor.",
        "Permite Rollback instantâneo ao virar o Load Balancer de volta para o ambiente estável.",
        "É a estratégia mais barata de infraestrutura.",
        "Não necessita de testes unitários."
      ],
      correctAnswer: 1,
      explanation: "Como mantemos as duas versões ativas, a reversão é apenas uma mudança de configuração de rede, sem necessidade de re-instalação."
    },
    {
      id: "q10_2",
      question: "Como funciona a estratégia Canary Deployment?",
      options: [
        "O site muda de cor para amarelo durante o deploy.",
        "A nova versão é libertada para uma pequena percentagem de utilizadores reais para monitorização inicial.",
        "As tarefas são feitas apenas por programadores seniores.",
        "O código é compilado apenas no telemóvel do cliente."
      ],
      correctAnswer: 1,
      explanation: "O objetivo é limitar o 'Blast Radius' (raio de impacto) caso a nova versão contenha um erro crítico."
    },
    {
      id: "q10_3",
      question: "O que caracteriza um Rolling Update?",
      options: [
        "A atualização de todos os servidores simultaneamente.",
        "A atualização gradual de instâncias, uma por uma, garantindo que o serviço nunca fique 100% offline.",
        "O fecho do site para manutenção durante a noite.",
        "A mudança de nome do domínio a cada versão."
      ],
      correctAnswer: 1
    },
    {
      id: "q10_4",
      question: "Por que as alterações na Base de Dados são o maior desafio num Rollback?",
      options: [
        "Porque os ficheiros SQL são muito grandes.",
        "Porque dados inseridos pela versão nova podem ser incompatíveis com a lógica da versão antiga recuperada.",
        "Porque o banco de dados não suporta Git.",
        "Porque as senhas mudam sozinhas."
      ],
      correctAnswer: 1,
      explanation: "Garantir a compatibilidade de dados entre versões (Schema Migration) é a tarefa mais complexa da engenharia de deploy."
    },
    {
      id: "q10_5",
      question: "A estratégia Blue-Green exige quanto de infraestrutura comparada a um deploy simples?",
      options: [
        "O mesmo valor.",
        "O dobro (exige dois ambientes completos e idênticos).",
        "Metade do valor.",
        "Depende apenas da velocidade da internet."
      ],
      correctAnswer: 1
    },
    {
      id: "q10_6",
      question: "Qual métrica é vital monitorizar durante um Canary Deployment para decidir se o rollout continua?",
      options: [
        "Número de linhas de código novas.",
        "Taxa de erro (HTTP 5xx) e latência percebida pelos utilizadores do grupo canary.",
        "O brilho do monitor do servidor.",
        "O número de commits feitos no dia."
      ],
      correctAnswer: 1
    }
  ]
};