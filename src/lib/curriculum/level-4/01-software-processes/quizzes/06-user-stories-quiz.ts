import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q6-master",
  title: "Quiz: User Stories e INVEST",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "No critério INVEST, o que significa a letra 'S'?",
      options: ["Smart (Inteligente)", "Small (Pequeno o suficiente para caber no Sprint)", "Secure (Seguro)", "Scalable (Escalável)"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que o 'V' do INVEST garante?",
      options: ["Velocidade", "Valor de Negócio real para o utilizador", "Validação de dados", "Variáveis globais"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual o formato correto de uma User Story?",
      options: ["O sistema deve fazer X", "Como um [Ator], eu quero [Ação], para que [Valor]", "Programar a função X para o utilizador Y", "Se o utilizador clicar, então acontece X"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "User Stories que são demasiado grandes para um Sprint são chamadas de:",
      options: ["Monstros", "Tasks", "Epics (Épicos)", "Backlogs"],
      correctAnswer: 2
    },
    {
      id: "q5",
      question: "Quem deve participar na escrita das User Stories?",
      options: ["Apenas o PO", "Apenas os Developers", "O PO em colaboração com a equipa técnica e stakeholders", "Apenas o Scrum Master"],
      correctAnswer: 2
    },
    {
      id: "q6",
      question: "Critérios de Aceitação servem para:",
      options: ["Definir o preço do projeto", "Remover ambiguidades e definir quando a história está completa", "Mudar as cores da interface", "Acelerar o processamento"],
      correctAnswer: 1
    }
  ]
};