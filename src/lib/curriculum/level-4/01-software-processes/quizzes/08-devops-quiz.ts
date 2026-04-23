import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q8-master",
  title: "Quiz: Cultura e Filosofia DevOps",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o principal objetivo da cultura DevOps?",
      options: ["Mudar de linguagem de programação", "Quebrar os silos entre Dev e Ops para entregas mais rápidas e estáveis", "Contratar apenas engenheiros de infraestrutura", "Comprar servidores mais caros"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "No modelo CAMS, o que representa o 'A'?",
      options: ["Arquitetura", "Automação (Automation)", "Análise", "Acessibilidade"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "O que significa o termo 'Blame-free culture'?",
      options: ["Ninguém é responsável por nada", "Focar na correção do processo e não em culpar indivíduos após uma falha", "Apagar os logs de erro", "Não ter chefes"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "DevOps é uma ferramenta ou uma ferramenta?",
      options: ["Sim, é o nome de um software", "Não, é uma mudança cultural e organizacional auxiliada por automação", "É apenas para utilizadores de Linux", "É um tipo de base de dados"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "A monitorização proativa (Measurement) serve para:",
      options: ["Espiar os funcionários", "Detetar falhas antes que elas afetem o utilizador final", "Aumentar a conta da cloud", "Contar linhas de código"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "O 'S' do CAMS (Sharing) incentiva:",
      options: ["Dividir a mesma senha entre todos", "Partilhar conhecimento, ferramentas e sucessos/falhas entre equipas", "Partilhar o mesmo monitor", "Dividir o custo do servidor"],
      correctAnswer: 1
    }
  ]
};