import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q19-master",
  title: "Quiz: Liderança Técnica e Impacto de Equipa",
  passingScore: 80,
  questions: [
    {
      id: "q19_1",
      question: "Qual o principal indicador de sucesso de um Staff Engineer ou Tech Lead?",
      options: [
        "O número de linhas de código que ele escreve sozinho.",
        "A melhoria da autonomia e qualidade técnica de toda a equipa.",
        "A velocidade com que ele fecha tickets no Jira.",
        "O silêncio absoluto durante as reuniões."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_2",
      question: "O que define a técnica de 'Mentoria Socrática'?",
      options: [
        "Exigir que o júnior leia livros de filosofia grega.",
        "Guiar o aprendizado através de perguntas estratégicas em vez de dar a solução pronta.",
        "Falar sem parar durante 1 hora sobre a arquitetura do sistema.",
        "Ignorar as perguntas do júnior para ele aprender sozinho."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_3",
      question: "Como um líder técnico deve lidar com uma decisão arquitetural controversa na equipa?",
      options: [
        "Impor a sua vontade, pois ele é o mais experiente.",
        "Facilitar um debate baseado em trade-offs técnicos e registar o resultado num ADR.",
        "Deixar a equipa votar e seguir a maioria, mesmo que tecnicamente errado.",
        "Evitar tomar uma decisão para não causar conflitos."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_4",
      question: "O conceito de 'Bus Factor' de uma equipa refere-se a:",
      options: [
        "A velocidade de processamento dos servidores.",
        "O número de membros que, se 'atropelados por um autocarro', fariam o projeto parar por falta de conhecimento partilhado.",
        "O custo do transporte dos funcionários.",
        "A quantidade de bugs encontrados por minuto."
      ],
      correctAnswer: 1,
      explanation: "Líderes master lutam para aumentar o Bus Factor através de documentação, pair programming e code reviews."
    },
    {
      id: "q19_5",
      question: "O que é 'Servant Leadership' (Liderança Servidora) em contextos ágeis?",
      options: [
        "Fazer o café para a equipa.",
        "Focar em remover obstáculos e fornecer as ferramentas para que a equipa atinja a excelência.",
        "Obedecer cegamente a todas as ordens do cliente.",
        "Trabalhar apenas nas tarefas que ninguém mais quer fazer."
      ],
      correctAnswer: 1
    },
    {
      id: "q19_6",
      question: "Um Tech Lead percebe que a equipa está a gerar muito débito técnico para bater uma meta. O que ele deve fazer?",
      options: [
        "Ignorar, pois as metas de negócio são a única prioridade.",
        "Alertar os stakeholders sobre os riscos de longo prazo e negociar espaço para refatoração no próximo Sprint.",
        "Trabalhar secretamente à noite para limpar o código.",
        "Culpar os desenvolvedores juniores pela má qualidade."
      ],
      correctAnswer: 1
    }
  ]
};
