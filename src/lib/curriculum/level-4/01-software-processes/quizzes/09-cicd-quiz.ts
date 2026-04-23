import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q9-master",
  title: "Quiz: Engenharia de CI/CD e Automação",
  passingScore: 80,
  questions: [
    {
      id: "q9_1",
      question: "Qual o principal benefício técnico da Integração Contínua (CI)?",
      options: [
        "Aumentar o tamanho do ficheiro de log.",
        "Reduzir o tempo de feedback e detetar conflitos de código o mais cedo possível.",
        "Eliminar a necessidade de falar com outros desenvolvedores.",
        "Garantir que o site tenha cores consistentes."
      ],
      correctAnswer: 1,
      explanation: "A integração frequente com testes automáticos garante que os bugs não se acumulem e que o código esteja sempre saudável."
    },
    {
      id: "q9_2",
      question: "Qual a diferença fundamental entre Continuous Delivery e Continuous Deployment?",
      options: [
        "O Delivery é mais rápido que o Deployment.",
        "No Deployment, a ida para produção é 100% automática; no Delivery, exige aprovação manual.",
        "Delivery é apenas para telemóveis e Deployment para computadores.",
        "O Deployment não usa testes unitários."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_3",
      question: "Por que deves gerar o artefacto (build) apenas UMA vez no pipeline?",
      options: [
        "Para gastar menos eletricidade no servidor.",
        "Para garantir que o código testado em Staging é exatamente o mesmo que será executado em Produção.",
        "Porque o Docker não permite múltiplos builds.",
        "Para poupar espaço no GitHub."
      ],
      correctAnswer: 1,
      explanation: "A imutabilidade do artefacto elimina erros de 'funciona no meu ambiente de teste mas não em produção' devido a diferenças de compilação."
    },
    {
      id: "q9_4",
      question: "O que deve acontecer se o estágio de 'Lint' ou 'Test' falhar no pipeline?",
      options: [
        "O pipeline deve prosseguir para o deploy para não atrasar o cliente.",
        "O pipeline deve ser interrompido imediatamente e o desenvolvedor notificado.",
        "O sistema deve apagar as alterações automaticamente.",
        "O erro deve ser ignorado se o resto do build for bem-sucedido."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "A prática de 'Build once, deploy many' foca em:",
      options: [
        "Escrever o código apenas uma vez.",
        "Utilizar o mesmo artefacto binário em múltiplos ambientes (Dev, Staging, Prod) mudando apenas a configuração.",
        "Fazer o deploy em múltiplos países ao mesmo tempo.",
        "Instalar o Windows em vários computadores."
      ],
      correctAnswer: 1
    },
    {
      id: "q9_6",
      question: "Qual o papel do estágio de 'Security Scan' num pipeline moderno?",
      options: [
        "Mudar as senhas dos utilizadores.",
        "Identificar vulnerabilidades conhecidas (CVEs) em bibliotecas de terceiros antes do deploy.",
        "Verificar se o firewall do escritório está ligado.",
        "Bloquear o acesso de utilizadores desconhecidos ao site."
      ],
      correctAnswer: 1,
      explanation: "A segurança deve ser parte do fluxo automatizado (DevSecOps) para prevenir o lançamento de software vulnerável."
    }
  ]
};