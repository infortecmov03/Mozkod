import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q21-master",
  title: "Quiz: Auditoria de Processo e Melhoria Contínua",
  passingScore: 80,
  questions: [
    {
      id: "q21_1",
      question: "Qual das métricas DORA mede a agilidade da equipa em levar uma ideia do código para as mãos do utilizador?",
      options: [
        "Change Failure Rate",
        "Lead Time for Changes",
        "Time to Restore Service",
        "CPU Load Average"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_2",
      question: "O que indica uma 'Change Failure Rate' alta?",
      options: [
        "A equipa é muito rápida.",
        "Instabilidade no processo de QA e falta de testes automatizados eficazes antes do deploy.",
        "O servidor de produção é antigo.",
        "Muitos utilizadores estão a aceder ao site ao mesmo tempo."
      ],
      correctAnswer: 1
    },
    {
      id: "q21_3",
      question: "O conceito de Kaizen na engenharia de software foca em:",
      options: [
        "Reescrever o sistema todo a cada 6 meses.",
        "Pequenas e contínuas melhorias incrementais no processo e na qualidade.",
        "Contratar o máximo de estagiários possível.",
        "Usar apenas ferramentas japonesas."
      ],
      correctAnswer: 1
    },
    {
      id: "q21_4",
      question: "Por que comparar a velocidade (Velocity) entre duas equipas diferentes é considerado um erro de gestão?",
      options: [
        "Porque os programadores ficam tristes.",
        "Porque Story Points são relativos e cada equipa tem a sua própria régua de estimativa.",
        "Porque o cálculo da média é complexo.",
        "Porque o Scrum proíbe medições."
      ],
      correctAnswer: 1
    },
    {
      id: "q21_5",
      question: "O objetivo de uma auditoria de processo é:",
      options: [
        "Encontrar alguém para culpar pelos atrasos.",
        "Identificar gargalos e desperdícios para otimizar o fluxo de entrega de valor.",
        "Aumentar o número de horas de trabalho.",
        "Validar se as cores do site estão no padrão da marca."
      ],
      correctAnswer: 1
    },
    {
      id: "q21_6",
      question: "Maturidade em Engenharia de Software (CMMI) significa que:",
      options: [
        "O código não tem bugs.",
        "O processo de desenvolvimento é previsível, gerido e em constante otimização.",
        "A equipa só tem engenheiros seniores.",
        "A empresa usa a tecnologia mais cara."
      ],
      correctAnswer: 1
    }
  ]
};
