import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q1-master",
  title: "Quiz: Engenharia de SDLC e Gestão de Risco",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o custo relativo estimado de corrigir um erro de requisito na fase de Manutenção em comparação à fase de Definição?",
      options: [
        "O mesmo custo",
        "Até 10 vezes mais caro",
        "Até 100 vezes mais caro ou mais",
        "Metade do preço"
      ],
      correctAnswer: 2,
      explanation: "A correção tardia exige refazer design, código e testes, além de possivelmente quebrar integrações existentes."
    },
    {
      id: "q2",
      question: "Qual a diferença fundamental entre Verificação e Validação?",
      options: [
        "São sinônimos técnicos",
        "Verificação olha para as regras; Validação olha para as necessidades do utilizador",
        "Validação é automática; Verificação é manual",
        "Verificação ocorre no início; Validação apenas no fim"
      ],
      correctAnswer: 1,
      explanation: "Verificação: 'Estamos a fazer o sistema corretamente?'. Validação: 'Estamos a fazer o sistema certo?'."
    },
    {
      id: "q3",
      question: "A manutenção do tipo 'Perfeitiva' foca em:",
      options: [
        "Reparar bugs críticos",
        "Adaptar o software a uma nova base de dados",
        "Melhorar a estrutura interna do código sem alterar a sua função (Refactoring)",
        "Prevenir ataques de hackers"
      ],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "Em qual cenário o modelo Waterfall (Cascata) ainda é considerado uma escolha técnica de elite?",
      options: [
        "Startups com requisitos voláteis",
        "Projetos de software para sistemas críticos de hardware com requisitos fixos e regulados",
        "Desenvolvimento de aplicações web modernas",
        "Sistemas baseados em IA generativa"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O 'Gargalo de Requisitos' ocorre quando:",
      options: [
        "O programador escreve código lento",
        "O design visual demora a ser aprovado",
        "As necessidades do negócio não são clarificadas, paralisando o progresso da equipa",
        "O servidor de testes cai"
      ],
      correctAnswer: 2
    },
    {
      id: "q6",
      question: "Qual o principal objetivo do 'Passo de Viabilidade' no SDLC?",
      options: [
        "Escolher a cor da interface",
        "Avaliar se o projeto deve prosseguir com base em custo, tempo e capacidade técnica",
        "Contratar o máximo de estagiários possível",
        "Garantir que o site tenha 1 milhão de acessos"
      ],
      correctAnswer: 1
    }
  ]
};
