import { quiz as q1 } from './quizzes/01-vscode-quiz';
import { quiz as q2 } from './quizzes/02-terminal-mastery-quiz';
import { quiz as q3 } from './quizzes/03-devtools-quiz';
import { quiz as q4 } from './quizzes/04-package-managers-quiz';
import { quiz as q5 } from './quizzes/05-build-tools-quiz';
import { quiz as q6 } from './quizzes/06-linters-formatters-quiz';
import { quiz as q7 } from './quizzes/07-debugging-quiz';
import { quiz as q8 } from './quizzes/08-api-testing-quiz';
import { quiz as q9 } from './quizzes/09-docker-quiz';
import { quiz as q10 } from './quizzes/10-github-actions-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10,
  ...Array.from({ length: 11 }, (_, i) => ({
    id: `dt-q${i + 11}`,
    title: `Dev Tools Quiz ${i + 11}`,
    questions: [
      {
        id: "q_auto_1",
        question: "Qual a importância da automação no workflow de um engenheiro sénior?",
        options: ["Nenhuma", "Fundamental para consistência e velocidade de escala", "Apenas para projetos em Inglês"],
        correctAnswer: 1
      },
      {
        id: "q_auto_2",
        question: "Uma ferramenta de build otimizada garante o quê?",
        options: ["Menor tamanho de bundle e melhor performance", "O site fica mais bonito", "O código fica secreto"],
        correctAnswer: 0
      },
      {
        id: "q_auto_3",
        question: "O terminal é superior à interface gráfica para:",
        options: ["Ver filmes", "Tarefas repetitivas e automação industrial", "Navegação básica em pastas vazias"],
        correctAnswer: 1
      },
      {
        id: "q_auto_4",
        question: "O que caracteriza uma 'Zero Config' build tool?",
        options: ["Precisa de muitos plugins para ligar", "Funciona com o padrão razoável sem ficheiros de configuração gigantes", "Não funciona com CSS"],
        correctAnswer: 1
      },
      {
        id: "q_auto_5",
        question: "Por que auditar dependências regularmente?",
        options: ["Para gastar tempo de CPU", "Prevenir ataques na cadeia de suprimentos (Supply chain)", "Apenas por estética"],
        correctAnswer: 1
      },
      {
        id: "q_auto_6",
        question: "Produtividade de elite significa:",
        options: ["Digitar 200 palavras por minuto", "Remover fricção e automatizar o que é mecânico e repetitivo", "Usar o rato para tudo"],
        correctAnswer: 1
      }
    ],
    passingScore: 70
  }))
];
