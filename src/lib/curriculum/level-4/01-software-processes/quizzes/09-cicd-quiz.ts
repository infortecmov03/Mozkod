import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q9-master",
  title: "Quiz: Engenharia de CI/CD",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que define a Integração Contínua (CI)?",
      options: ["Deploy automático a cada mês", "Fusão frequente de código num ramo principal com testes automáticos", "Instalação manual no servidor", "Uso de cabos de rede de fibra"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Qual a diferença entre Continuous Delivery e Continuous Deployment?",
      options: ["Nenhuma", "Deployment é 100% automático; Delivery exige aprovação manual para o passo final", "Delivery é apenas para telemóveis", "Deployment é mais lento"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Se um teste falha no pipeline de CI, o que deve acontecer?",
      options: ["O código vai para produção na mesma", "O pipeline é interrompido e o build falha", "O sistema corrige o erro sozinho", "A internet cai"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Para que serve o 'Build Stage' num pipeline?",
      options: ["Para desenhar a interface", "Para compilar o código e gerar um artefacto pronto para execução", "Para falar com o cliente", "Para limpar a memória RAM"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual o benefício de ter um pipeline rápido?",
      options: ["Gasta menos eletricidade", "Reduz o tempo de espera do programador (Feedback Loop) e acelera o Time-to-Market", "Não há benefícios", "O código fica mais curto"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "O que é um 'Artefacto' em CI/CD?",
      options: ["Um erro histórico", "O ficheiro binário ou container gerado que será publicado no servidor", "Uma regra de negócio", "O teclado do programador"],
      correctAnswer: 1
    }
  ]
};