
import { quiz as q1 } from './quizzes/01-vscode-quiz';
import { quiz as q2 } from './quizzes/02-terminal-mastery-quiz';
import { quiz as q3 } from './quizzes/03-devtools-quiz';

export const quizzes = [
  q1, q2, q3,
  ...Array.from({ length: 18 }, (_, i) => ({
    id: `dt-q${i + 4}`,
    title: `Dev Tools Quiz ${i + 4}`,
    questions: [
      {
        id: "q_auto_1",
        question: "Qual a importância da automação no workflow de um engenheiro sénior?",
        options: ["Nenhuma", "Fundamental para consistência e velocidade", "Apenas para iniciantes"],
        correctAnswer: 1
      },
      {
        id: "q_auto_2",
        question: "Uma ferramenta de build otimizada ajuda em quê?",
        options: ["Menor tamanho de bundle e melhor performance", "Nada", "Apenas para sites em Inglês"],
        correctAnswer: 0
      },
      {
        id: "q_auto_3",
        question: "O terminal é superior à interface gráfica para:",
        options: ["Tarefas repetitivas e automação", "Ver filmes", "Navegação básica"],
        correctAnswer: 0
      },
      {
        id: "q_auto_4",
        question: "O que caracteriza uma 'Zero Config' build tool moderna?",
        options: ["Precisa de muitos plugins", "Funciona com o padrão razoável sem ficheiros de configuração gigantes", "Não funciona com CSS"],
        correctAnswer: 1
      },
      {
        id: "q_auto_5",
        question: "Por que auditar dependências?",
        options: ["Para gastar tempo", "Prevenir ataques na cadeia de suprimentos (Supply chain)", "Apenas por estética"],
        correctAnswer: 1
      },
      {
        id: "q_auto_6",
        question: "Produtividade de elite significa:",
        options: ["Digitar mais rápido", "Remover fricção e automatizar o que é mecânico", "Usar o rato sempre"],
        correctAnswer: 1
      }
    ],
    passingScore: 70
  }))
];
